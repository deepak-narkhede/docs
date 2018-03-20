# About TCP Input Operator

TCP Input Operator provides a method to let the operator accept concurrent TCP connections. It also allows to parse the data that is received using more than one delimiters.

 This operator can be used for accepting data directly from various IOT devices, any other TCP clients such as agents running on multiple nodes etc.

This operator is available under _DT Plus_ license.

## Ports
The following port is available on the TCP Input operator:

| **Port Type** | **Port Name** | **Details** |
| --- | --- | --- |
| Output Port | outputPort | Emits tuples received on TCP connections. |

## Testing

TCP Input operator is tested with the following components:

- Cloudera Hadoop version 5.8.2 along with Apache Hadoop version 2.6.0
- Java version 1.7 and above
- Netty

# Configurations

The following properties must be updated in the **properties.xml** file for this operator:

| **Property Name** | **Description** | **Example** |
| --- | --- | --- |
| queueSize | Defines the queue size to hold messages before emitting tuples | dt.operator.[OPNAME].prop.queueSize |
| maxFrameLength | Specifies the maximum size of the decoded frames. | dt.operator.[OPNAME].prop.maxFrameLength |
| port | Defines the listening TCP port that is used by the server. | dt.operator.[OPNAME].prop.port |
| threadCount | Specifies the number of parallel threads. | dt.operator.[OPNAME].prop.threadCount |

# Partitioning

The TCP Input operator can be partitioned using default partitioner provided by Apex. TCP Input operator can be dynamically partitioned when rules are stateless.

For partitioning, you must add the following property in the **properties.xml** file. For example, if you add **TcpInputOperator** with the name **TcpInputOperatorEx** in the DAG, then this property creates four partitions of the operator when the application starts.
```
<property>
     <name>dt.operator.TcpInputOperatorEx.attr.PARTITIONER</name>
     <value>com.datatorrent.common.partitioner.StatelessPartitioner(4)</name>
</property>
```

# Using the Operator

TCP Input operator starts TCP server on the defined port . When the operator is used with multiple partitions, partitions cannot be deployed on the same node. Hence you must use it with the correct anti-affinity rule for TCP Input operator.

The following code illustrates, how this operator can be used in an application:
```
TcpInputOperator tcpInput = dag.addOperator("TCPInput", TcpInputOperator.class);
AffinityRule tcpRule = new AffinityRule(AffinityRule.Type.ANTI_AFFINITY, DAG.Locality.NODE_LOCAL, false, "TCPInput", "TCPInput");
```
