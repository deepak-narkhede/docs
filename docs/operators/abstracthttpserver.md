## About AbstractHttpServer Operator

AbstractHttpServer operator helps developer to implement HTTP services and run them as part of operator.  It provides a way to host Jetty HTTP Servlet server as an . You can develop custom Servlets and plug-in those using these classes: ServletContextHolder and ServletHolder.

This operator can be used as an input or output operator based on how you can extend it.  This operator can be used to receive data from Mobile/ Web clients as well as from clients using WebSocket connections.

To use this operator, you must extend it and implement the _getHandlers_ method to define the collection of handlers to handle HTTP requests.

 This operator is available under DT Plus license.

## Ports

The following port is available for the AbstractHttpServerOperator operator:

| **Port Type** | **Port Name** | **Details** |
| --- | --- | --- |
| Output Port | deployBroadcastOutport | Emits information about the current partition including, hostname, services started or not, partition mask, partitionId.  If the partition has more than one partitionId assigned, then that many tuples are emitted.  All this information is emitted using POJO object of the type ServerDeploymentConfig. |

## Testing

AbstractHttpServer  is tested with the following components:

- Cloudera Hadoop version 5.8.2 along with Apache Hadoop version 2.6.0
- Java version 1.7 and above
- Embedded Jetty version 9.2.11.v20150529.

# Workflow of the Operator

The workflow of the **AbstrractHttpServer**  is as follows:

- At initialization, the operator loads the handlers that you have provided.
- Starts webserver with the defined port.
- If the operator is partitioned and the anti-affinity rule is set for the partitions of this operator, partitions of the operator gets deployed on different nodes. This is needed to ensure that two partitions do not share the same TCP port.

# Supplementary Classes

The following classes are used by the **AbstrractHttpServer** operator:

## ServerDeploymentConfig

| Property Name | Type | Description |
| --- | --- | --- |
| hostName | String | This property can be used as the address URL and is specified in the following format by default: `protocol://[hostname]:[port]/.` |
| started | boolean | Specifies if the server has started or shut down for the clients. |
| mask | int | Specifies the partition mask of the partition of the operator |
| partitionId | int | Specifies the partition ID for the current partition of the operator. |

## HandlerCollection

You must implement the _getHandlers()_ method on this operator, which returns the **HandlerCollection** object `org.eclipse.jetty.server.handler.HandlerCollection`. The following example depicts how you implement the *gethandlers* method:
```
@Override
public HandlerCollection getHandlers() throws Exception
{
 HandlerCollection handlers = new HandlerCollection(true);
 this.logHandler = new RequestLogHandler();
 DummyRequestLog requestLog = new DummyRequestLog();
 requestLog.setExtended(true);
 requestLog.setLogLatency(true);
 requestLog.setPreferProxiedForAddress(true);
 logHandler.setRequestLog(requestLog);
 handlers.addHandler(logHandler);
 ServletContextHandler handler = new ServletContextHandler();
 handler.addServlet(new ServletHolder(new HeartbeatServlet("HttpServer", this.getNodeUrl())), "/health");
 handlers.addHandler(handler);
 return handlers;
}
```
You can also use this operator to develop Websocket operators with some modifications. Two classes are implemented; one for handling data transfer for receiving and sending data over websocket connections and other for creating connections and configuring WebSocketServletFactory.

The following example depicts implementation of `getHandlers()` method for WebsocketOutput operator.
```
public HandlerCollection getHandlers() throws UnknownHostException
{
 HandlerCollection handlers = new HandlerCollection(true);
 ServletContextHandler handler = new ServletContextHandler();
 handler.addServlet(new ServletHolder("ws-events", new DummyRequestWebsocketServlet(
   180000, 180000, DummyRequestWS.class)), "/ws/*");
 handlers.addHandler(handler);
 return handlers;

}
```

### DummyRequestWS ( Example for WebsocketAdapter ) :

Object of this class is instantiated for each established websocket connection. You can refer to details about WebSocketAdapter at http://www.eclipse.org/jetty/javadoc/current/org/eclipse/jetty/websocket/api/WebSocketAdapter.html](http://www.eclipse.org/jetty/javadoc/current/org/eclipse/jetty/websocket/api/WebSocketAdapter.html)
```
import java.io.IOException;
import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.WebSocketAdapter;

public class DummyRequestWS extends WebSocketAdapter
{
  @Override
  public void onWebSocketConnect(Session sess){}

  @Override
  public void onWebSocketText(String message){}
  
  @Override
  public void onWebSocketClose(int statusCode, String reason){}
  
  @Override
  public void onWebSocketError(Throwable cause){}
}
```
### DummyRequestWebsocketServlet Implementation (Example of AbstractWebSocketServlet)
```
public class DummyRequestWebsocketServlet extends AbstractWebSocketServlet
{

 public DummyRequestWebsocketServlet(long maxIdleTime, long maxAsyncWriteTimeout, Class wsClazzName)
 {
   super(maxIdleTime, maxAsyncWriteTimeout, wsClazzName);
 }

 @Override
 public void configure(WebSocketServletFactory webSocketServletFactory)
 {
   // set a 10 second timeout
   super.configure(webSocketServletFactory);
   int BUFFER_SIZE = 10240; // 10240 bytes
   webSocketServletFactory.getPolicy().setInputBufferSize(BUFFER_SIZE / 10);
   webSocketServletFactory.getPolicy().setMaxTextMessageSize(BUFFER_SIZE);
   webSocketServletFactory.getPolicy().setMaxTextMessageBufferSize(BUFFER_SIZE * 8);
   webSocketServletFactory.getPolicy().setMaxBinaryMessageSize(BUFFER_SIZE);
   webSocketServletFactory.getPolicy().setMaxBinaryMessageBufferSize(BUFFER_SIZE);
   webSocketServletFactory.getPolicy().setIdleTimeout(getMaxIdleTime());
   webSocketServletFactory.getPolicy().setAsyncWriteTimeout(getMaxAsyncWriteTimeout());

 }
}
```
# Configurations

The following properties must be updated in the **properties.xml** file:

| **Property Name** | **Description** | **Example** |
| --- | --- | --- |
| threads | Defines number of threads for the server operator. | dt.operator.[OPNAME].prop.threads |
| cooldownSecs | Defines the number of seconds to wait before you shut down the jetty server. | dt.operator.[OPNAME].prop.cooldownSecs |
| port | Defines the listening tcp port used by the server. | dt.operator.[OPNAME].prop.port |

When you are creating the DAG, you must specify the following configuration:
```
DummyHttpServerOperator tcpInput = dag.addOperator("HttpInput", DummyHttpServerOperator.class);
AffinityRule httpRule = new AffinityRule(AffinityRule.Type.ANTI_AFFINITY, DAG.Locality.NODE_LOCAL, false, "HttpInput", "HttpInput");
```

# Partitioning

This operator implements interface called WebServerPartitionable and requires WebServerPartitioner for static partitioning. Being stateless, this operator does not redistribute any state.

The following configuration must be set in **Properties.xml** for partitioning:
```
<property>
 <name>dt.operator.[OperatorName].attr.PARTITIONER</name>
 <value>[FQDN for WebServerPartitioner or One extended from it] :[PARTITION_COUNT]</value>
</property>
```

For example, the following code depicts a scenario when an  is extended from AbstractHttpServerOperator as DummyServerOperator and DummyWebPartitioner and extends WebServerPartitioner, configuration for specifying 3 partitions for the operator.
```
<property>
 <name>dt.operator.DummyHttpServer.attr.PARTITIONER</name>
 <value>com.example.app.DummyWebPartitioner :3</value>
</property>
```

# Using the Operator

The following code illustrates, how you can use the operator can be used within an application:
public class DummyHttpServer extends AbstractHttpServerOperator implements InputOperator
```
{

 @Override
 public HandlerCollection getHandlers() throws Exception
 {
   HandlerCollection handlers = new HandlerCollection(true);
   this.logHandler = new RequestLogHandler();
   DummyRequestLog requestLog = new DummyRequestLog();
   requestLog.setExtended(true);
   requestLog.setLogLatency(true);
   requestLog.setPreferProxiedForAddress(true);
   logHandler.setRequestLog(requestLog);
   handlers.addHandler(logHandler);
   ServletContextHandler handler = new ServletContextHandler();
   handler.addServlet(new ServletHolder(new HeartbeatServlet("HttpServer", this.getNodeUrl())), "/health");
   handlers.addHandler(handler);
   return handlers;
 }
}
```
