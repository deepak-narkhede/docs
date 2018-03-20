# About the Event Hub Output Operator

Event Hub is part of Microsoft Azure cloud ecosystem. It is a highly scalable data streaming platform and event ingestion service which can receive and process millions of events per second. Event Hubs can process, and store events, data, or telemetry produced by distributed software and devices. Data sent to an Event Hub can be transformed and stored using any real-time analytics provider or batching/storage adapters. Using Event Hub, you can also publish-subscribe with low latency and at a massive scale.

Event Hub Output operator receives events from upstream operator(s) in the form of byte array or string tuples and converts them into raw byte array format. These tuples are then emitted to Event Hub in Azure cloud.

This operator is available under DT Plus license.

## Ports

| **Port Type** | **Port Name** | **Details** |
| --- | --- | --- |
| Input port | input | Receives tuples from upstream operators in byte / string array format |

## Testing

Tested with following components:

- Cloudera Hadoop version 5.8.2 along with Apache Hadoop version 2.6.0
- Java version 1.8
- HDInsight: Hadoop 2.7.3 - HDI 3.6
- Eventhub client library - com.microsoft.azure:azure-eventhubs:0.14.0

## Requirements

Java 1.8 and above

# Workflow of the Operator

The following figure depicts the workflow of this operator:

 
# Supported Data Types

- This operator receives events from upstream operator in the form of byte/string array tuples, and emits them as raw byte array Event Hub in Azure cloud.
- If there are any other custom data types, you can extend the class _AbstractEventHubOutputOperator_ by providing implementation for _getRecord()_ method. This converts the incoming tuple into byte array.

# Properties and Attributes

| **Property** | **Description** |
| --- | --- |
| namespaceName | Event Hub name space |
| eventHubName | Event Hub name |
| sasKeyName | SAS key name for accessing Event Hub |
| sasKey | SAS key for accessing Event Hub |
| isBatchProcessing | Whether events should be clubbed together to send to Event Hub in batch or to send individually |
| batchSize | Number of events to be clubbed together in a single send request. Default value = 100 |

# Using the Operator

The following code illustrates how Events Hub output operator can be used within an application:
```
public class Application implements StreamingApplication
{

  public void populateDAG(DAG dag, Configuration conf)
  {
    KafkaSinglePortInputOperator kafkaInput =
        dag.addOperator("kafkaInput", KafkaSinglePortInputOperator.class);

    EventHubByteArrayOutputOperator eventHubOutput = dag.addOperator("eventHubOutput", EventHubByteArrayOutputOperator.class);

    dag.addStream("data", kafkaInput.outputPort, eventHubOutput.inputPort);
  }
} 
```
