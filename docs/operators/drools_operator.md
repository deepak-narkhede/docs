## About Drools Operator

Drools operator provides real-time complex event processing capability with the help of Drools engine.

The Drools operator embeds the Drools rule engine to simplify the rules configuration for a business apps such as the Fraud Prevention App.

You can write rules as per your business requirements and the execution aspect is handled by the Drools operator.

The Drools operator provides the following advantages:

- Facility to write rules in a rule file instead of programming them. This makes it easy for a domain expert (non-technical person) to configure rules.
- Centralization of knowledge-base in the form of rules. This results in easy maintenance.
- Pre-defined algorithms in Drools engine provide efficient ways to match rule patterns with data.
- Easily modify the existing rules instead of modifying a program.
- Supports rule configuration in various file formats such as **.drl** , **.xls** , **.dsl** etc.

This operator is available under _DT Premium_ license.

## Testing

The drools operator is tested with the following components:

- Cloudera Hadoop version 5.8.2 along with Apache Hadoop version 2.6.0
- Java version 1.7 and above
- Drools embedded version 6.5.0-final

## Workflow of the Operator

![droolsworkflow](images/drools_Workflow.png)

- Write and save the rules in the drools format.
- Configure the location of this rule&#39;s file in the drools operator.
- Drools operator receives enriched data from upstream operators which is validated against the specified rules.
- Drools operator emits processed data with fields changed by applied rules data, details of rule name, and the number of times that the rule is applied.

## Ports

The following ports are available on the Drools operator:

| **Port Type** | **Port Name** | **Details** |
| --- | --- | --- |
| Input Port | factsInput Port | Receives incoming tuples from upstream operators. |
| Output Port | factsOutput Port | Emits processed data with fields changed by applied rules. | 
| |ruleCountOutput Port | Emits details of rule name and the number of times that the rule is applied. |   
| |firedRuleAndTransactionOutput Port | Emits rules along with processed data matching a specific rule. | 
| |factAndFiredRulesOutput | Emits processed data along with associated rules. |

## Partitioning

The Drools operator can be partitioned using default partitioner provided by Apex. In case of stateful rules, you must ensure that during partitioning the associated data goes to the single partition, that is, if all the rules are for a customer, the partitioning should be done on the customer field in the record.

Drools operator can be dynamically partitioned when rules are stateless. For stateful rules dynamic partitioning is not supported.

For partitioning, you must add the following property in the **properties.xml** file. For example, if you add Drools operator with the name _RuleExecutor_ in the DAG, then this property creates four partitions of the operator when the application starts.

```
<property>
     <name>dt.operator.RuleExecutor.attr.PARTITIONER</name>
     <value>com.datatorrent.common.partitioner.StatelessPartitioner:4</value>
</property>
```

## Configuring Drools Operator

The following settings can be configured for Drools operator:

- Configuring rules
- Configuring Replay
- Setting the expiration of events

## Configuring Rules

For the Drools operator, you can configure the rules using one of the following methods:

- HDFS Direct Deploy
- CEP Workbench & Configuration Artifacts

### HDFS Direct Deploy

To configure rules from HDFS, do the following:

1. Write the rules in the one the format that is supported by Drools.
2. Add this rules file to a folder in HDFS.
3. In an application configuration, set the folder path using the following operator property:

| **Property Name** | **Description** |
| --- | --- |
| dt.operator.FraudRulesExecutor.prop.rulesDir | The path to HDFS from where to load the rules. If this path is set to null, then the operator loads the rules from the classpath. |

### CEP Workbench & JAR Artifacts

Refer to [CEP Workbench](../cep_workbench.md) and [JAR Artifacts](../jar_artifacts.md) for more details. 

## Setting the Expiration Limit for Events

If rules are loaded from HDFS, Drools operator configures the session in streaming mode. In this mode the rule file declares the input data type as event, using annotations.

Every item that is added to the Drools operator is kept in the memory. Hence, you must set the expiration timeout of the events. The Drools operator, automatically removes those item from the Drools working memory.

For example, if you want to evaluate the rules on _UserEventType_ objects, you must add the following code on top of the rules file **(.drl file)**:

```
declare UserEventType
  @role(event)
  @expires(60m)
end
```

**Note:** For more details refer to the [Drools documentation](http://docs.jboss.org/drools/release/6.5.0.Final/drools-docs/html/).

## Sample Application

The following code illustrates how Drools Operator can be used within an application. The application reads JSON data from Kafka, parses it to Java object, and sends it to Drools Operator for evaluation of rules. The result of rule evaluation is then sent to another Kafka topic, which can be consumed by other applications.

```
public class Application implements StreamingApplication
{
  @Override
  public void populateDAG(DAG, Configuration configuration)
  {
    KafkaSinglePortInputOperator kafkaInputOperator = dag.addOperator("Input", new KafkaSinglePortInputOperator());
    JsonParser parser = dag.addOperator("TransactionParser", JsonParser.class);`
    
    dag.setInputPortAttribute(parser.in, Context.PortContext.PARTITION_PARALLEL, true);
    DroolsOperator ruleExecutor = dag.addOperator("RuleExecutor", new DroolsOperator());
    KafkaSinglePortOutputOperator output = dag.addOperator("Output", new KafkaSinglePortOutputOperator());

    dag.addStream("input", kafkaInputOperator.outputPort, parser.in);
    dag.addStream("data", parser.out, ruleExecutor.factsInput);
    dag.addStream("processed", ruleExecutor.factsOutput, output.inputPort);
  }
  
}
```
## Performance Benchmarking

As the Drools operator is configured in streaming mode, it keeps the data in memory till the configured expiration in the rule file. Memory required by operator depends on the following parameters:

- Operator input rate
- Data tuple size in memory
- Expiration duration.

Drools operator was tested with 1KB tuple size and various expiration rate, input rate, and memory configuration.

The result is shown as a graph where **Y-axis** is the **expiration interval** and **X-axis** is the **input rate**.
![](images/drools_benchmarking.png)

If you want to process data at a specific input rate and expiration interval, you can choose a point on the plot with configured input rate and expiration interval and choose that line of memory configuration which is above that point.

For example, if user wants to process 240 tuples per second with 4000 seconds expiry, then container size should be 12 GB.
