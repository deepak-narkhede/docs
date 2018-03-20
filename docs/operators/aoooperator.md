# About Analytics Output Operator

This operator can be used to send data from a source application for processing in Online Analytics Service. **Analytics Output operator** is essentially an extension to **Kafka exactly once output** operator which does some additional work for seamlessly integrating with Online Analytics Service (OAS). This operator is extended from **Kafka Single Port Exactly Once Output operator** from malhar-kafka library. The kafka client used in this operator is versioned at 0.9.

**Analytics Output Operator** (AOO for short) can be added to any pipeline for sending the data to OAS for OLAP processing. This operator can be referred as a thin client for OAS.

AnalyticsOutputOperator receives a tuple of type Object from upstream Apex pipeline and sends it to a configured Kafka topic. The data sent to Kafka topic is in exactly once fashion. That means, if the AOO gets killed, after recovery it attempts for data deduplication.

## Ports

AnalyticsOutputOperator has a single input port and no output port. The input port is used to receive the tuple from upstream and sending to downstream kafka topic.

## Partitioning

This operator is partitionable in a stateless manner and all partitioning capabilities of **Kafka Single Port Exactly Once Output** operator are applicable to this operator.

## Accessing the Operator

Analytics Output Operator is present in _dt-apoxi-oas-operator_ maven artifact. One can add following lines to project&#39;s maven **pom.xml** file for making the operator available in their project:
```
<dependency>
      		<groupId>com.datatorrent</groupId>
		<artifactId>dt-apoxi-oas-operator</artifactId>
		 <version>1.4.0</version>
</dependency>
```

Current version for DT Apoxi OAS operator is 1.4.0.

## Testing

Analytics Output operator is tested with the following configuration:

- Java 7 runtime
- Kafka 0.9 and 0.10 clients
- Online Analytics Service 1.4.0

## Requirements

Requirements for using this operator are as follows:

- Standard system requirements of Apex Application are applicable for this operator.
- Kafka version 0.9 or 0.10.
- DataTorrent RTS 3.10.0 platform
- Upstream pipeline should be idempotent. This is required for the purpose of maintaining exactly once semantics. You can choose to skip the exactly once semantics using a property _disablePartialWindowCheck_ described in the properties section and setting it to _true_.

# Workflow of the Operator

The workflow of Analytics Output operator is as follows:

1. At the beginning of every checkpoint window, it send a druid schema (configured as a string property) tuple to the configured kafka topic  which is consumed by the Online Analytics Service to register the new datasource. This is a general step irrespective of any tuples being received from upstream.
2. The operator receives a tuple of type _Object_ from upstream.
3. It parses, validates and serializes the tuple and forwards it to base class of **Kafka Single Port Exactly Once Output** operator.
4. **Kafka Single Port Exactly Once Output** operator sends this tuple to the configured kafka topic in exactly once fashion.
5. At the end of every window operator it keeps track of the kafka offset for exactly once purpose.

The workflow of Analytics Output operator in case of recovery:

- As per the apex semantics, the recovery of this operator occurs at the last commited window. This means the data is reprocessed by this operator.
- If _disablePartialWindowCheck_ is _false_, this means exactly once semantics are enabled. In this case, the operator skips all the reprocessing till the window for which kafka offset is present. There can be an incomplete window for which some of the data is already sent to kafka. For this purpose, the operator reads the data from the last offset and skips all the data received in this window which is already sent.
- If _disablePartialWindowCheck_ is true, this means exactly once semantics are disabled. In this case, the operator still skips the data reprocessing for all those window for which the kafka offset is present. In case of incomplete or partial window, the data is resent. This means there is a possible data duplication in kafka for maximum of one window. If the upstream pipeline is not idempotent, this option is suggested.

# Supported Data Types

Analytics Output operator receives data as an **Object**. There is a default serializer provided for serializing the received tuple to a JSON object. One can choose to override the serializer using the property _serializerClass_.

# Properties and Attributes

You can set the following properties for Analytics Output operator:

| **Property** | **Description** | **Is required property?** | **Default value** |
| --- | --- | --- | --- |
| **properties** | These are a map of kafka properties where key is a name of kafka property and value is property value. This can be used to specify the broker and other kafka consumer settings.Minimum kafka property that is required is: **bootstrap.servers** | Yes | N/A |
| **topic** | Name of the kafka topic to which the analytics data needs to be sent. | Yes | N/A |
| **schema** | Druid schema (as a string) which defines the data present in the tuple as well as some druid specific properties for OLAP computation.For details on druid schema, refer **DataSchema** section of  following document: [http://druid.io/docs/0.9.1/ingestion/index.html](http://druid.io/docs/0.9.1/ingestion/index.html) | Yes | N/A |
| **serializerClass** | Serializer class which is used to serialize the tuples of type _Object_ received from upstream.This class essentially is implementation of interface: **com.datatorrent.analytics.AnalyticsOutputOperator.AnalyticsPOJOSerializer** Ensure that the given class is present in classpath. | No | com.datatorrent.analytics.AnalyticsOutputOperator.ObjectMapperPOJOSerializer |
| **disablePartialWindowCheck** | Use this property to disable the exactly once semantics. A value set to _true_ disables the exactly once semantics. Value set to _false_, enables the exactly once semantics. | No | false |

**Note:** Other than above mentioned properties, all the properties and attributes of **Kafka Single Port Exactly Once Output** operator are applicable to this operator.

# Supplementary Classes

**Analytics Output Operator**  can be supplied with a serializer class using **serializerClass** property to control how to serialize the tuples received from upstream before sending it to kafka. It is expected that the implementation of this class should provide a valid JSON string after serialization.

This is an optional property and the default implementation uses a ObjectMapper to serialize a POJO to a JSON string.

# Using the Operator

The following is a sample Apex Application where the Analytics Output operator is used:
```
@ApplicationAnnotation(name = "SampleApplication")
public class SampleApplication implements StreamingApplication
{
  @Override
  public void populateDAG(DAG dag, Configuration conf)
  {
    DataGenOperator input = dag.addOperator("Input", new DataGenOperator());
    AnalyticsOutputOperator output = dag.addOperator("AOO", new AnalyticsOutputOperator());

    dag.addStream("io", input.dataOutput, output.inputPort);
  }
}
```

## Sample properties
```
<property>
	<name>dt.operator.AOO.prop.topic</name>
   	<value>analytics</value>
</property>
<property>
<name>dt.operator.AOO.prop.properties(bootstrap.servers)</name>
	<value>localhost:9092</value>
</property>
<property>
	<name>dt.operator.AOO.prop.schema</name>
	<value>
{
  "dataSource": "sample",
  "granularitySpec": {"type": "uniform", "segmentGranularity": "hour", "queryGranularity": "minute"},
  "parser": {
    "type": "string",
    "parseSpec": {
      "format": "json",
      "dimensionsSpec": {
        "dimensions": ["email", "country", "cctype", "currency"]
      },
      "timestampSpec": {"format": "millis", "column": "timestamp"}
    }
  },
  "metricsSpec": [
    {"name": "COUNT", "type": "count"},
    {"name": "TRANSACTIONAMOUNT", "type": "longSum", "fieldName": "amount"},
    {"name": "email_unique", "type": "hyperUnique", "fieldName": "email"},
    {"name": "country_unique", "type": "hyperUnique", "fieldName": "country"},
    {"name": "cctype_unique", "type": "hyperUnique", "fieldName": "cctype"},
    {"name": "currency_unique", "type": "hyperUnique", "fieldName": "currency"},
    {"name": "amount_min", "type": "longMin", "fieldName": "amount"},
    {"name": "amount_max", "type": "longMax", "fieldName": "amount"}
  ]
}
</value>
</property

```
