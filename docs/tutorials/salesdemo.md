# Sales Dimension Application

The Sales Dimensions application demonstrates multiple
features of the DataTorrent RTS platform including the ability to:
- transform data
- analyze data
- act, based on analysis, in real time
- support scalable applications for high-volume, multi-dimensional computations
  with very low latency using existing library operators.

### Example Scenario

A large national retailer with physical stores and online sales
channels is trying to gain better insights to improve decision making
for their business. By utilizing real-time sales data, they would like
to detect and forecast customer demand across multiple product
categories, gauge pricing and promotional effectiveness across regions,
and drive additional customer loyalty with real time cross purchase
promotions.

In order to achieve these goals, they need to analyze large
volumes of transactions in real time by computing aggregations of sales
data across multiple dimensions, including retail channels, product
categories, and regions. This allows them to not only gain insights by
visualizing the data for any dimension, but also make decisions and take
actions on the data in real time.

The application makes use of seven operators; along with the
streams connecting their ports, these operators are discussed in the
sections that follow.

The application setup for this retailer requires:

-   Input &ndash; For receiving individual sales transactions
-   Transform &ndash; For converting incoming records into a consumable format
-   Enrich &ndash; For providing additional information for each record by
    performing additional lookups
-   Compute &ndash; For performing aggregate computations on all possible
    key field combinations
-   Store &ndash; For storing computed results for further
    analysis and visualizations
-   Analyze, Alert & Visualize &ndash; For displaying graphs
    for selected combinations, perform analysis, and take actions on
    computed data in real time.


## Application Development

To save time we will use some source and data files that are available online.
We will create a new maven project using the maven archetype, add the source
and data files to the project, modify them suitable and finally build and
deploy application.


### Step 1: Build the Sales Dimension application

To build an application

1. Create a new application project named, say `salesapp`, as described in:
   [Apache Apex Development Environment Setup](../apex_development_setup.md)

2.  Delete the following generated JAVA files: `Application.java` and
    `RandomNumberGenerator.java` under `src/main/java/com/example/salesapp`
    and `ApplicationTest.java` under `src/test/java/com/example/salesapp`.

3.  Checkout the `examples` git repository in a suitable location, for example:

        cd; git checkout https://github.com/datatorrent/examples

4.  Copy the following files from that repository at
    `examples/dt-demo/dimensions/src/main/java/com/datatorrent/demos/dimensions/sales/generic`
    to the main source directory of the new project at `src/main/java/com/example/salesapp`.

    <table>
    <colgroup>
    <col width="50%" />
    <col width="50%" />
    </colgroup>
    <tbody>
    <tr class="odd">
    <td align="left"><p>EnrichmentOperator.java</p></td>
    <td align="left"><p>JsonSalesGenerator.java</p></td>
    </tr>
    <tr class="even">
    <td align="left"><p>JsonToMapConverter.java</p></td>
    <td align="left"><p>RandomWeightedMovableGenerator.java</p></td>
    </tr>
    <tr class="odd">
    <td align="left"><p>SalesDemo.java</p></td>
    <td align="left"><p></p></td>
    </tr>
    </tbody>
    </table>

5.  Also copy these text files from the examples repository at
    `examples/dt-demo/dimensions/src/main/resources`:
    `salesGenericDataSchema.json`, `salesGenericEventSchema.json`,
    `products.txt` to the new project at `src/main/resources`. The first two files
    define the format of data for visualization queries and the last has
    data used by the enrichment operator discussed below.

6. Change the package location in each Java file to reflect
    its current location by changing the line

        package com.datatorrent.demos.dimensions.sales.generic;

    to

        package com.example.salesapp;

7. Add a new file called `InputGenerator.java` to the same location
    containing this block of code:

        package com.example.salesapp;
        import com.datatorrent.api.InputOperator;
        public interface InputGenerator<T> extends InputOperator {
            public OutputPort<T> getOutputPort();
        }

8. Remove these lines from `JsonSalesGenerator.java` (the first is
    unused, while the second is now package local):

        import com.datatorrent.demos.dimensions.InputGenerator;
        import com.datatorrent.demos.dimensions.ads.AdInfo;

    Also remove the first import from `SalesDemo.java`.

9. Add the following two lines to `SalesDemo.java` (if it does not exist already).

        PubSubWebSocketAppDataQuery wsIn = new PubSubWebSocketAppDataQuery();
        wsIn.setTopic("SalesDimensionsQuery");      // 1. Add this line
        store.setEmbeddableQueryInfoProvider(wsIn);

        PubSubWebSocketAppDataResult wsOut = dag.addOperator("QueryResult", new PubSubWebSocketAppDataResult());
        wsOut.setTopic("SalesDimensionResult");     // 2. Add this line

        dag.addStream("InputStream", inputGenerator.getOutputPort(), converter.input);
        ...

10. Make the following changes to pom.xml:
    1. Change the artifactId to something that is likely to be unique to
       this application, for example: `<artifactId>salesapp</artifactId>`.
       This step is optional but is recommended since uploading a second
       package with the same artifact id will overwrite the first. Similarly,
       change the `name` and `description` elements to something meaningful
       for this application.

    2. Add the following `repositories` element at the top level (i.e. as a
       child of the `project` element):

            <!-- repository to provide the DataTorrent artifacts -->
            <repositories>
              <repository>
                <id>datatorrent</id>
                <name>DataTorrent Release Repository</name>
                <url>https://www.datatorrent.com/maven/content/repositories/releases/</url>
                <snapshots>
                  <enabled>false</enabled>
                </snapshots>
              </repository>
            </repositories>

    3. Add these lines to the dependencies section at the end of the `pom.xml`
    file (the version number might need to change as new releases come out):

            <dependency>
              <groupId>com.datatorrent</groupId>
              <artifactId>dt-contrib</artifactId>
              <version>3.5.0</version>
              <exclusions>
                <exclusion>
                  <groupId>*</groupId>
                  <artifactId>*</artifactId>
                </exclusion>
              </exclusions>
            </dependency>
            <dependency>
              <groupId>com.datatorrent</groupId>
              <artifactId>dt-library</artifactId>
              <version>3.5.0</version>
              <exclusions>
                <exclusion>
                  <groupId>*</groupId>
                  <artifactId>*</artifactId>
                </exclusion>
              </exclusions>
            </dependency>

    4. Finally change `apex.version` to `3.6.0-SNAPSHOT`. To recapitulate, we are
       using versions `3.5.0` for `dt-contrib` and `dt-library`, `3.6.0`
       for `malhar-library` and `3.6.0-SNAPSHOT` for Apex.

11. Build the project as usual:

        mvn clean package -DskipTests


Assuming the build is successful, you should see the package file named
`salesApp-1.0-SNAPSHOT.jar` under the target directory. The next step
shows you how to use the **dtManage** GUI to upload the package and launch the
application from there.

### Step 2: Upload the Sales Dimension application package

To upload the Sales Dimension application package

1.  Log on to the DataTorrent Console (the default username and password are
    both `dtadmin`).
2.  On the menu bar, click _Develop_.
3.  Under _App Packages_, click on _upload package_.

    ![upload](images/sales_dimensions/image20.png "upload")

4.  Navigate to the location of `salesApp-1.0-SNAPSHOT.apa` and select it.
5.  Wait till the package is successfully uploaded.

### Step 3: Launch the Sales Dimension application

_Note_: If you are launching the application on the sandbox, make sure that
an IDE is not running on it at the same time; otherwise, the sandbox might
hang due to resource exhaustion.

1. In the menu bar, click _Launch_.
2. Under the _Applications_ tab, locate the Sales Dimension application, and click the
   _launch_ button. In the confirmation modal, click the _launch_ button.
   
    *Note*: To configure the application using a configuration file, use the dropdown next to
    the _launch_ button and select a file under the _launch with xml_ section.

If the launch is successful, a notification will appear on the top-right corner with the application ID and a hyperlink to monitor the running application.

### Operator base classes and interfaces

This section briefly discusses operators (and ports) and the relevant interfaces;
the next section discusses the specific operators used in the application.

Operators can have multiple input and output ports; they receive events on their input
ports and emit (potentially different) events on output ports. Thus, operators and ports
are at the heart of all applications. The `Operator` interface extends the `Component`
interface:

    public interface Component <CONTEXT extends Context> {
      public void setup(CONTEXT cntxt);
      public void teardown();
    }

The `Operator` interface defines `Port`, `InputPort`, and `OutputPort` as inner interfaces with
`InputPort`, and `OutputPort` extending `Port`.

    public interface Operator extends Component<Context.OperatorContext> {

      public static interface Port extends Component<Context.PortContext> {}

      public static interface InputPort<T extends Object> extends Port {
        public Sink<T> getSink();
        public void setConnected(boolean bln);
        public StreamCodec<T> getStreamCodec();
      }

      public static interface OutputPort<T extends Object> extends Port {
        public void setSink(Sink<Object> sink);
        public Unifier<T> getUnifier();
      }

      public void beginWindow(long l);
      public void endWindow();
    }

Operators typically extend the `BaseOperator` class which simply
defines empty methods for `setup`, `teardown`, `beginWindow`, and
`endWindow`. Derived classes only need to define those functions for
which they want to perform an action. For example the
`ConsoleOutputOperator` class, which is often used during testing and
debugging, does not override any of these methods.

Input operators typically receive data from some external source such
as a database, message broker, or a file system. They might also
create synthetic data internally. They then transform this data into
one or more events and write these events on one or more output ports;
they have no input ports (this might seem paradoxical at first, but is
consistent with our usage of input ports that dictates that input
ports only be used to receive data from other operators, not from an
external source).

Input ports must implement the `InputOperator` interface.

    public interface InputOperator extends Operator {
      public void emitTuples();
    }

The `emitTuples` method will typically output one or more events on
some or all of the output ports defined in the operator. For example,
the simple application generated by the maven archetype command
discussed earlier has an operator named `RandomNumberGenerator`,
which is defined like this:

    public class RandomNumberGenerator extends BaseOperator implements InputOperator {

      public final transient DefaultOutputPort<Double> out = new DefaultOutputPort<Double>();

      public void emitTuples()  {
        if (count++ < 100) {
          out.emit(Math.random());
        }
      }
    }

Finally, the `DefaultInputPort` and `DefaultOutputPort` classes are
very useful as base classes that can be extended when defining ports
in operators.

    public abstract class DefaultInputPort<T> implements InputPort<T>, Sink<T> {
      private int count;

      public Sink<T> getSink(){ return this; }

      public void put(T tuple){
        count++;
        process(tuple);
      }

      public int getCount(boolean reset) {
        try {
          return count;
        } finally {
          if (reset) {
            count = 0;
          }
        }
      }

      public abstract void process(T tuple);
    }

    public class DefaultOutputPort<T> implements Operator.OutputPort<T> {
      private transient Sink<Object> sink;

      final public void setSink(Sink<Object> s) {
        this.sink = s == null? Sink.BLACKHOLE: s;
      }

      public void emit(T tuple){
        sink.put(tuple);
      }
    }

The `DefaultInputPort` class automatically keeps track of the number
of events emitted and also supports the notion of a sink if needed in
special circumstances. The abstract `process` method needs to be
implemented by any concrete derived class; it will be invoked via the
`Sink.put` override.

The `DefaultOutputPort` class also supports a sink and forwards calls
to `emit` to the sink. The `setSink` method is called by the **StrAM**
execution engine to inject a suitable sink at deployment time.

Output operators are the opposite of input operators; they typically
receive data on one or more input ports from other operators and write
them to external sinks. They have no output ports. There is, however,
no specific interface to implement or base class to extend for output
operators, though they often end up extending `BaseOperator` for
convenience. For example, the `ConsoleOutputOperator` mentioned earlier
is defined like this:

    public class ConsoleOutputOperator extends BaseOperator {
      public final transient DefaultInputPort<Object> input = new DefaultInputPort<Object>() {
        public void process(Object t) {
          System.out.println(s); }
        };
    }

Notice that the implementation of the abstract method
`DefaultInputPort.process` simply writes the argument object to the
console (we have simplified the code in that function somewhat for the
purposes of this discussion; the actual code also allows the message
to be logged and also allows some control over the output format).

### Operators in the Sales Dimensions application


The application simulates an incoming stream of sales events by
generating a synthetic stream of such events; these events are then
converted to Java objects, enriched by mapping numeric identifiers to
meaningful product names or categories. Aggregated data is then
computed and stored for all possible combinations of dimensions such
as channels, regions, product categories and customers. Finally, query
support is added to enable visualization. Accordingly, a number of
operators come into play and they are listed below. Within an
application, an operator can be instantiated multiple times; in order
to distinguish these instances, an application-specific name is
associated with each instance (provided as the first argument of the
`dag.addoperator` call). To facilitate easy cross-referencing with the
code, we use the actual Java class names in the list below along with
the instance name in parentheses.

This diagram represents the Sales Dimension DAG. The
ports on these operators are connected via streams.
![SalesDemoDAG.png](images/sales_dimensions/image19.png)

**JsonSalesGenerator (InputGenerator)**

This class (new operator) is an input operator that generates a single
sales event defined by a class like this:

    class SalesEvent {
      /* dimension keys */
      public long time;
      public int productId;
      public String customer;
      public String channel;
      public String region;
      /* metrics */
      public double sales;
      public double discount;
      public double tax;
    }

**JsonToMapConverter (Converter)**

This operator uses some special utility classes (ObjectReader and
ObjectMapper) to transform JSON event data to Java maps for easy
manipulation in Java code; it is fairly simple:

    public class JsonToMapConverter extends BaseOperator {

    ...

      public final transient DefaultInputPort<byte\[\]> input = new DefaultInputPort<byte[]>() {
        public void process(byte\[\] message) {
          Map<String, Object> tuple = reader.readValue(message);
          outputMap.emit(tuple);
        }
      }

      public final transient DefaultOutputPort<Map<String, Object>> outputMap
         = new DefaultOutputPort<Map<String, Object>>();

    }

**EnrichmentOperator (Enrichment)**

This operator performs category lookup based on incoming numeric
product IDs and adds the corresponding category names to the output
events. The mapping is read from the text file `products.txt` that
we encountered earlier while building the application. It contains
data like this:

    {"productId":96,"product":"Printers"}
    {"productId":97,"product":"Routers"}
    {"productId":98,"product":"Smart Phones"}

The core functionality of this operator is in the `process` function of
the input port where it looks up the product identifier in the
enrichment mapping and adds the result to the event before emitting it
to the output port. The mapping file can be modified at runtime to add
or remove productId to category mapping pairs, so there is also some
code to check the modification timestamp and re-read the file if necessary.

    public class EnrichmentOperator extends BaseOperator {
      ...
      public transient DefaultOutputPort<Map<String, Object>>
        outputPort = new DefaultOutputPort<Map<String, Object>>();

      public transient DefaultInputPort<Map<String, Object>>
        inputPort = new DefaultInputPort<Map<String, Object>>() {

        public void process(Map<String, Object> tuple) {
          ...
        }
      }
    }

**DimensionsComputationFlexibleSingleSchemaMap (DimensionsComputation)**

This operator performs dimension computations on incoming data. Sales
numbers by all combinations of region, product category, customer, and
sales channel should be computed and emitted.

**AppDataSingleDimensionStoreHDHT (Store)**

This operator stores computed dimensional information on HDFS,
optimized for fast retrieval so that it can respond to queries.

**PubSubWebSocketAppDataQuery (Query)**

This is the dashboard connector for visualization queries.
This operator and the next are used respectively to send queries and
retrieve results from the Data Torrent Gateway which can act like a
message broker for limited amounts of data using a topic-based
publish/subscribe model. The URL to connect to is typically something
like `ws://`_gateway-host_:_port_`/pubsub` where
_gateway-host_ and _port_ should be replaced by appropriate values.

A publisher sends a JSON message that looks like this to the URL
where the value of the `data` key is the desired message content:

    {"type":"publish", "topic":"foobar", "data": ...}

Correspondingly, subscribers send messages like this
to retrieve published message data:

    {"type":"subscribe", "topic":"foobar"}

Topic names need not be pre-registered anywhere but obviously, the
same topic name (e.g. _foobar_ in the example above) must be used by both
publisher and subscriber; additionally, if there are no subscribers when
a message is published, it is simply discarded.

This query operator is an input operator used to send queries from
the dashboard to the store via the gateway:

    public class PubSubWebSocketAppDataQuery extends PubSubWebSocketInputOperator<String>
    implements AppData.ConnectionInfoProvider {
      ...
      protected String convertMessage(String message) {
        JSONObject jo = new JSONObject(message);
        return jo.getString("data");
      }
    }

The important method here is `convertMessage` to convert the input
string to a JSON object, get the value of the `data` key from the object
and return it. The base classes look like this:

    public class PubSubWebSocketInputOperator<T> extends WebSocketInputOperator<T> {
      ...
    }

This class simply converts a JSON event into Java maps via the
`convertMessage` method.

    public class WebSocketInputOperator<T> extends
    SimpleSinglePortInputOperator<T> implements Runnable {
      ...
    }

This code is intended to be run in an asynchronous thread to retrieve
events from an external source and emit them on the output port.

    public abstract class SimpleSinglePortInputOperator<T> extends BaseOperator
    implements InputOperator, Operator.ActivationListener<OperatorContext> {

      final public transient BufferingOutputPort<T> outputPort;

      final public void activate(OperatorContext ctx) {
      }

      public void emitTuples() {
        outputPort.flush(Integer.MAX_VALUE);
      }

      public static class BufferingOutputPort<T> extends DefaultOutputPort<T> {
        public void flush(int count) { ... }
      }

    }

The class starts a separate thread which retrieves source events and
invokes the `emit` method of the output port; the output port buffers
events until the `flush` method is called at which point all buffered
events are emitted.

**PubSubWebSocketAppDataResult (QueryResult)**

This is the dashboard connector for results of visualization queries
and is the result counterpart of the previous input query operator:

    public class PubSubWebSocketAppDataResult extends PubSubWebSocketOutputOperator<String>
    implements AppData.ConnectionInfoProvider {
      ...
    }

This class merely overrides the generic `convertMapToMessage` method of the
base class to generate the required JSON publish message.

    public class PubSubWebSocketOutputOperator<T> extends WebSocketOutputOperator<T> {
      ...
    }

This class, similarly, doesn't do much &ndash; the `convertMapToMessage`
method converts input data into a suitable JSON object for publishing to the
registered topic.

    public class WebSocketOutputOperator<T> extends BaseOperator {
      public final transient DefaultInputPort<T> input = new DefaultInputPort<T>() {
        public void process(T t) {
          ...

          connection.sendTextMessage(convertMapToMessage(t));
        }
      }
    }

The key element in this class is the input port (the rest of the code
deals with establishing a connection and reconnecting if
necessary). As usual, the key method in the input port is `process`
which converts the incoming event to a JSON message and sends it
across the connection.

### Connecting the operators


Now that we've seen the operator details, we will look at how they are
connected in the application. An application must implement the
`StreamingApplication` interface:

    public class SalesDemo implements StreamingApplication {
      ...
      public void populateDAG(DAG dag, Configuration conf) {
        JsonSalesGenerator input = dag.addOperator("InputGenerator", JsonSalesGenerator.class);
        JsonToMapConverter converter = dag.addOperator("Converter", JsonToMapConverter.class);
        EnrichmentOperator enrichmentOperator = dag.addOperator("Enrichment", EnrichmentOperator.class);
        DimensionsComputationFlexibleSingleSchemaMap dimensions = dag.addOperator("DimensionsComputation", DimensionsComputationFlexibleSingleSchemaMap.class);
        AppDataSingleSchemaDimensionStoreHDHT store = dag.addOperator("Store", AppDataSingleSchemaDimensionStoreHDHT.class);

        ...

        PubSubWebSocketAppDataQuery wsIn = new PubSubWebSocketAppDataQuery();
        wsIn.setTopic("SalesDimensionsQuery");
        store.setEmbeddableQueryInfoProvider(wsIn);

        PubSubWebSocketAppDataResult wsOut = dag.addOperator("QueryResult", new PubSubWebSocketAppDataResult());
        wsOut.setTopic("SalesDimensionsResult");

        dag.addStream("InputStream", inputGenerator.getOutputPort(), converter.input);
        dag.addStream("EnrichmentStream", converter.outputMap, enrichmentOperator.inputPort);
        dag.addStream("ConvertStream", enrichmentOperator.outputPort, dimensions.input);
        dag.addStream("DimensionalData", dimensions.output, store.input);
        dag.addStream("QueryResult", store.queryResult, wsOut.input).setLocality(Locality.CONTAINER_LOCAL);
      }
    }

The key method to implement in an application is `populateDAG`; as shown
above, the first step is to create instances of all seven operators and
add them to the DAG (we have omitted some parts of the code that are
related to advanced features or are not directly relevant to the
current discussion). Once the operators are added to the DAG, their
ports must be connected (as shown in the earlier diagram) using
streams. Recall that a stream is represented by the `DAG.StreamMeta`
interface and is created via `DAG.addStream()`. The first argument is
the name of the stream, the second is the output port and the third
the input port. These statements form the second part of the
`populateDAG` function.

These two simple steps (a) adding operators to the DAG; and (b)
connecting their ports with streams are all it takes to build most
applications. Of course, additional steps may be needed to configure
suitable properties to achieve the desired performance levels but those
are often easier.

_Note_: You can also find these instructions in the UI console. Click _Learn_ in the menu
bar, and then click the first link in the left panel: _Transform, Analyze, Alert_.

### Step 1: Open the Application Builder interface


1.  On the DataTorrent RTS console, navigate to _App Packages_.
2.  Make sure that the DataTorrent Dimensions Demos package is imported (if
    not, use the Import Demos button to import it).
3.  Click the green _Create new application_ button, and name the application
    Sales Dimensions. The Application Canvas window should open.
    ![Canvas](images/sales_dimensions/image23.png "Canvas")


### Step 2: Add and connect operators


1.  Under _Operator Library_ in the left panel, select the following
    operators and drag them to the Application Canvas. Rename them to
    the names given in parentheses.
    1. **JSON Sales Event Generator (Input)** – This operator generates
       synthetic sales events and emits them as JSON string bytes.
    2. **JSON to Map Parser (Parse)** – This operator transforms JSON
       data to Java maps for convenience in manipulating the sales data
       in Java code.
    3. **Enrichment (Enrich)** – This operator performs category lookup based on
       incoming product IDs, and adds the category ID to the output maps.
    4. **Dimension Computation Map (Compute)** – This operator performs dimensions
       computations, also known as cubing, on the incoming data. It
       pre-computes the sales numbers by region, product category, customer,
       and sales channel, and all combinations of the above. Having these
       numbers available in advance, allows for viewing and taking action on
       any of these combinations in real time.
    5. **Simple App Data Dimensions Store (Store)** &ndash; This operator
       stores the computed dimensional information on HDFS in an optimized manner.
    6. **App Data Pub Sub Query (Query)** &ndash; The dashboard connector for
       visualization queries.
    7. **App Data Pub Sub Result (Result)** &ndash; The dashboard connector for
       visualization data results.

2.  To connect the operators, click the output port of each upstream operator,
    and drag the connector to the input stream of the downstream operator as shown
    in the diagram below:
    ![streams](images/sales_dimensions/image01.png "streams")

### Step 3: Customize application and operator settings


Customize the operators and streams as described in each item below; to do that,
click the individual operator or stream and use the _Operator Inspector_ panel
on the bottom to edit the operator and stream settings as described in the item:

1.  Copy this Sales schema below into the _Event Schema JSON_ field of **Input**
    operator, and the _Configuration Schema JSON_ of the **Compute** and **Store**
    operators.

        {
          "keys": [
            {"name":"channel","type":"string","enumValues":["Mobile","Online","Store"]},
            {"name":"region","type":"string",
             "enumValues":["Atlanta","Boston","Chicago","Cleveland","Dallas","Minneapolis",
                           "New York","Philadelphia","San Francisco","St. Louis"]},
            {"name":"product","type":"string",
             "enumValues":["Laptops","Printers","Routers","Smart Phones","Tablets"]}],
          "timeBuckets":["1m", "1h", "1d"],
          "values": [
            {"name":"sales","type":"double","aggregators":["SUM"]},
            {"name":"discount","type":"double","aggregators":["SUM"]},
            {"name":"tax","type":"double","aggregators":["SUM"]}],
          "dimensions": [
            {"combination":[]},
            {"combination":["channel"]},
            {"combination":["region"]},
            {"combination":["product"]},
            {"combination":["channel","region"]},
            {"combination":["channel","product"]},
            {"combination":["region","product"]},
            {"combination":["channel","region","product"]}]
        }

2.  Set the _Topic_ property for **Query** and **Result** operators to
    `SalesDimensionsQuery` and `SalesDimensionsResult` respectively.

    _Optional_: In the _Building with Java_ section, the **App Data Pub Sub Query (PubSubWebSocketAppDataQuery)** operator was not added to the DAG. Instead, it was embedded into the **store** operator to avoid query delays which may happen when the operator is blocked upstream.

3.  Select the **Store** operator, and edit the _File Store_ property.
    Set _Base Path_ value to `SalesDimensionsDemoStore`. This sets the HDHT
    storage path to write dimensions computation results to
    `/user/<username>/SalesDimensionsDemoStore` on HDFS.
    ![filestore](images/sales_dimensions/image05.png "filestore")
4.  Click the stream, and set the Stream Locality to CONTAINER_LOCAL
    for all the streams between Input and Compute operators.

_Note_: Changing stream locality controls which container operators
get deployed to, and can lead to significant performance improvements
for an application. Once set, the connection will be represented by a
dashed line to indicate the new locality setting.

### Step 4: Launch the application

Once the application is constructed, and validation checks are
satisfied, a launch button will become available at the top left of the
_Application Canvas_ window. Clicking this button to open the application
launch dialog box. You can use this dialog box to perform additional
configuration of the application such as changing its name or modifying
properties.

To launch the Sales Dimension application

1.  Click the launch button at the top left of the application canvas screen.
2.  Type a name for the application in the _Name this application_ box.
3.  (Optional) To configure the application using a configuration file, select
    _Use a configuration file_ checkbox.
4.  (Optional) To specify individual properties, select
    _Specify Launch Properties_ checkbox.
5.  Click Launch.

![Launch](images/sales_dimensions/image21.png "Launch")

Once the application is successfully launched, you can check its
health and view some runtime statistics using the steps below.
Additional details are in the chapter entitled _Monitoring the Sales
Dimensions Application with dtManage_.

1.  Go to the Sales Dimensions application operations page under the _Monitor_ tab.
2.  Confirm that the application is launched successfully by validating that
    the state of the application under the _Application Overview_ section
    is _RUNNING_.
3.  Make sure that all the operators are successfully started under the
    _StramEvents_ widget.
4.  Navigate to the _physical_ tab, observe the Input, Parse, Enrich, or
    Compute operators, and ensure that they are deployed to a single container,
    because of the stream locality setting of CONTAINER_LOCAL.
    ![containers](images/sales_dimensions/image35.png "containers")

_Note_: This is one of the many performance improvement techniques
available with the DataTorrent platform; in this case eliminating data
serialization and networking stack overhead between groups of adjacent
operators.


## Visualizing Application Data


DataTorrent includes powerful data visualization tools, which
allow you to visualize streaming data from multiple sources in real
time. For additional details see the tutorial entitled _dtDashboard
- Application Data Visualization_ at <https://docs.datatorrent.com>.

After the application is started, a visualize button, available in
the Application Overview section, can be used to quickly generate a new
dashboard for the Sales Dimensions application.

### Generate dashboards

![dashboard](images/sales_dimensions/image22.png "dashboard")

If you created dashboards already, the dashboards appear in the
dropdown list. You can select one, or generate a new dashboard by
selecting the generate new dashboard option from the dropdown list.

After the dashboard is created, you can add additional widgets for
displaying dimensions and combinations of the sales data. Here is an
example:

![widgets](images/sales_dimensions/image25.png "widgets")

### Adding widgets

To derive more value out of application dashboards, you can add
widgets to the dashboards. Widgets are charts in addition to the default
charts that you can see on the dashboard. DataTorrent RTS supports five
widgets: `bar chart`, `pie chart`, `horizontal bar chart`, `table`, and
`note`.

To add a widget

1.  Click the add widget button below the name of the dashboard, for example,
    Sales Dimension.
    ![AddWidgetButton](images/sales_dimensions/image24.png "AddWidgetButton")
2.  In the Data Source list, click a data source for your widget.
3.  Select a widget type under _Available Widgets_.
    ![AddWidget.png](images/sales_dimensions/image34.png "AddWidget")
4.  Click _add widget_ button.

The widget is added to your dashboard.

### Edit a widget


After you add a widget to your dashboard, you can update it at any
time. Each widget has a title that appears in gray. If you hover over
the title, the pointer changes to a hand.

To edit a widget

1.  Change the size and position of the widget:
    a. To change the size of the widget, click the
       border of the widget, and resize it.
    b. To move the widget around, click the widget, and
       drag it to the desired location.

2.  Edit the widget:
    a.  In the top-right corner of the widget, click _edit_.
    b.  Type a new title in the _Title_ box.
    c.  Use the remaining options to configure the widget.
    d.  Click _OK_.
    ![WidgetOptions.png](images/sales_dimensions/image26.png)

3.  To remove a widget, in the top-right corner, click the _delete_ button.

## Monitoring the Application

Recall that after the application is built and validated, it can be
launched from the _App Packages_ page as described in an earlier chapter. 
This section describes how you can monitor the running Sales Dimension application
using **dtManage**.

### The Monitor menu option


You can monitor the Sales Dimension application by clicking
Monitor on the menu bar. After you click _Monitor_, you can choose between
4 tabs. Under each tab, you can see multiple widgets, which you can
resize, move around, configure, or remove.

**logical**

This image of the logical tab shows 4 widgets; additional widgets can be
added by clicking the **+** button at the top-left corner and choosing
from the resulting dropdown list.

![Logical.png](images/sales_dimensions/image28.png)

- **Application Overview**

    This widget has the shutdown and kill buttons for shutting down or
    killing an application. This widget also displays the state of the
    application, the window IDs, the number of physical operators,
    containers, allocated memory, and statistics on the number of
    events handled.

- **StramEvents**

    This widget displays all the operators, containers, and nodes that
    are running. This widget also displays additional information,
    such as errors encountered and timestamps.

- **Logical DAG**

    This widget displays operators and their
    connections in the logical dag (as defined in the application)
    without partitions, that is, if an operator is partitioned to run
    multiple copies to increase throughput, only one copy is displayed.
    The Physical DAG (the physical-dag-view) shows the actual
    physical operators. For each operator, you can choose to include
    additional statistics.

    To include additional details

    1.  Click an operator for which you want to display additional details.
    2.  To display a detail on the top of this operator representation,
        click the Top list, and select a metric.
    3.  To display a detail at the bottom of this operator representation,
        click the Bottom list, and select a metric.

- **Logical Operators**

    This widget displays a table of operators
    for: the name, the Java class, status, and additional statistics for
    latency and processed events.

- **Streams**

    This operator displays a table with one row per stream showing:
    the name, locality, source, and sinks.

- **Metrics Chart**

    This widget displays moving averages of tuples processed and latencies.

**physical**

The physical tab displays, in addition to _Application Overview_
and _Metrics Chart_, 2 more widgets:

![Physical.png](images/sales_dimensions/image29.png)

- **Physical Operators**

    This widget displays a table of physical operators for:
    name, status, host, container ID, and some additional statistics. The
    container ID is a numeric value and a clickable link that takes you to a
    page showing additional details about that specific instance of the
    operator.

- **Containers**

    This widget displays a table of containers (the Java Virtual
    Machine processes) and for each process: the ID, the process ID,
    host, the number of hosted operators, and some additional memory
    statistics.

**physical-dag-view**

The physical-dag-view tab displays the Physical DAG widget, which
shows all the partitioned copies of operators and their
interconnections:

![Physical-dag.png](images/sales_dimensions/image30.png)

**metric-view**

The metric-view tab displays only the _Metrics Chart_ widget.

### Monitor Sales Dimension using the Monitor menu

To monitor the application

1.  Click _Monitor_ on the menu bar to open the logical view of the DAG.
    ![monitor](images/sales_dimensions/image31.png "monitor")
2.  Ensure that the _State_ is _Running_, indicating that the application
    is launched successfully.
3.  Under _StramEvents_, ensure that the operators from within the
    application have started.
4.  Click _physical_ tab to open the physical view.
5.  Ensure that the Input, Parse, Enrich, and
    Compute operators are deployed to a single container.
    ![physical](images/sales_dimensions/image32.png "physical")

    Note: This is because we set the corresponding stream locality to
    `CONTAINER_LOCAL` earlier. This parameter is an example of performance
    improvement technique, which eliminates data serialization and
    networking stack overhead between a group of adjacent operators.

### Create additional tabs


You can create custom tabs in addition to logical, physical,
physical-dag-view, and metric-view. Under each tab, you can add
widgets, and customize these widgets according to your requirements.
This enables a deeper insight into how the Sales Dimension application
works. Each tab, default or otherwise, contains the _Application
Overview_ widget.

To create additional tabs

1.  Next to the _metric-view_ tab, look for the plus sign (+) button.
2.  Click this button to create an additional tab.
3.  Provide a name for your tab.
4.  Add widgets to your tab.
