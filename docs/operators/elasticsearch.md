# About ElasticSearch Output Operator

Elasticsearch output operator along with Elastic Search engine provides data capability to store full-text search documents in real time.

The Elasticsearch operator embeds the transport client to simplify the connectivity and stores the documents to Elasticsearch cluster for a text search analysis.

You can configure the operator properties as per your business requirements and the execution aspect is handled by the Elasticsearch operator.

The Elasticsearch output operator provides the following advantages:

- High performant and can process data in bulk operations.
- The application is also highly performant and can process as fast as the network allows.
- Ease to modify the configuration of Elasticsearch indexes through properties as most of the functionality is exported as tuning parameters as per requirements.
- Flexible and configurable sharding (that is, it allows you to distribute and parallelize operations across shard) for Elasticsearch indexes based on APIs provided in operator for user provided document ID and index name.
- Flexible in setting input source data type formats such as JSON.
- Built-in metrics related to Elasticsearch, such as number of events, bytes written, bad events etc., are available.

This operator is available under _DT Plus_ license.

## Testing

The Elasticsearch output operator is tested with the following components:

- Apache Hadoop version 2.7.0
- Java version 1.8.
- Elastic search version 5.4

## Workflow of the Operator

- Configure the Elasticsearch cluster node and port in the Elasticsearch operator.
- Elasticsearch output operator receives enriched data from upstream operators which are stored on Elasticsearch cluster.

## Ports

The following ports are available on the Elasticsearch output operator:

| **Port Type** | **Port Name** | **Details** |
| --- | --- | --- |
| Input Port | Input Port | Receives incoming tuples from upstream operators. |

## Partitioning

The ElasticSearch operator can be partitioned using the default partitioner provided by Apex.

Elasticsearch operator can be dynamically partitioned as stateless. For stateful, dynamic partitioning is not supported. Also see

# Configuring ElasticSearch Output Operator

The following settings can be configured for Elasticsearch output operator:

- [Mandatory properties for connectivity ](#Reference1)
- [Optional properties for performance tuning](#Reference2)

## Mandatory Elasticsearch Cluster Properties <a name="Reference1"></a>

The following properties must be mandatorily updated in the **properties.xml** file for connectivity:

| **Property Name** | **Description** |
| --- | --- |
| clusterName | Name of Elasticsearch cluster. |
| hostNames | Name of hosts along with the port numbers where Elasticsearch cluster is configured. For e.g: localhost:9300 |
| indexName | Name of the Elasticsearch index. |

## Optional Properties for Performance Tuning <a name="Reference2"></a>

Operator can be optionally configured as per the performance and resources requirement. The following properties must be added to **properties.xml** file.

| **Property Name** | **Description** |
| --- | --- |
| batchSize | This controls the amount of data that is grouped in a bulk for storing in the Elasticsearch store. |
| concurrentRequests | Sets the number of concurrent requests that are allowed to be executed parallelly. |
| bulkRequestTimeoutInSecs | Sets the timeout for bulk request in seconds. A value of zero indicates that only a single request can be executed. A value of one indicates that concurrent request can be executed while accumulating new bulk requests. |
| bulkRequestBatchSizeInMb | Sets the batch size in MB for bulk request. |
| checkClusterStatus | Checks the entire cluster status along with status for specified index. |
| flushAfterWindowCompletion | Pushes the bulk request to elastic store after every end window. |
| backoffPolicyRetryCount | Sets a retry count for back off policy in case of a failure. |
| backoffPolicyRetryTimeInMSecs | Sets the time interval for back off policy in case of a failure. |

## Configuring the Partitioning

For partitioning, you must add the following property in the **properties.xml** file. For example, if you add Elasticsearch operator with the name _ElasticOutputStore_ in the DAG, then this property creates four partitions of the operator when the application starts.
```
<property>
     <name>dt.operator.ElasticOutputStore.attr.PARTITIONER</name>
     <value>com.datatorrent.common.partitioner.StatelessPartitioner(4)</name>
</property>
```

# Sample Application

The following code illustrates how Elasticsearch output Operator can be used within an application.

This application reads JSON data from Kafka and parses it. After some transformation, this data is sent to Elasticsearch output Operator which is then stored on an Elasticsearch cluster.

```
public class Application implements StreamingApplication
{

  public void populateDAG(DAG dag, Configuration conf)
  {
    // This kafka input operator takes input from specified Kafka brokers.
    KafkaSinglePortInputOperator kafkaInputOperator = dag.addOperator("kafkaInput", KafkaSinglePortInputOperator.class);

    // Parses a json string tuple against a specified json schema and emits JSONObject.
    JsonParser jsonParser = dag.addOperator("JsonParser", JsonParser.class);

    // Filters the tuple as per specified condition by user.
    FilterOperator filterOperator = dag.addOperator("filter", new FilterOperator());

    // Transforms the tuple value to user logic. Note logic may be modified.
    TransformOperator transform = dag.addOperator("transform", new TransformOperator());

    // Format the transformed logic into JSON format.
    JsonFormatter jsonFormatter = dag.addOperator("JsonFormatter", JsonFormatter.class);

    // Use elasticsearch as a store.
    ElasticSearchOutputOperator elasticSearchOutput = dag.addOperator("ElasticStore", ElasticSearchOutputOperator.class);

    // Now create the streams to complete the dag or application logic.
    // Most of the operators are kept THREAD_LOCAL for optimizing the local resources. As latest elastic search supports java 1.8,
    // so most of the clusters are not on java 1.8. If hadoop cluster is migrated to java 1.8, one can change the locality as
    // per the requirement.
    dag.addStream("KafkaToJsonParser", kafkaInputOperator.outputPort, jsonParser.in).setLocality(DAG.Locality.CONTAINER_LOCAL);
    dag.addStream("JsonParserToFilter", jsonParser.out, filterOperator.input).setLocality(DAG.Locality.THREAD_LOCAL);
    dag.addStream("FilterToTransform", filterOperator.truePort, transform.input).setLocality(DAG.Locality.THREAD_LOCAL);
    dag.addStream("TransformToJsonFormatter", transform.output, jsonFormatter.in).setLocality(DAG.Locality.THREAD_LOCAL);
    dag.addStream("JsonToElasticStore", jsonFormatter.out, elasticSearchOutput.input);
    dag.setAttribute(Context.DAGContext.METRICS_TRANSPORT, null);
  }
}
```
