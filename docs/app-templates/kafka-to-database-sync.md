# Kafka To Database Sync application

## Summary

Ingest string messages seperated by '|' from configured kafka topic and writes each message as a record in DataBase. This application uses PoJoEvent as an example schema, this can be customized to use custom schema based on specific needs.

The source code is available at:
[https://github.com/DataTorrent/app-templates/tree/master/kafka-to-database-sync](https://github.com/DataTorrent/app-templates/tree/master/kafka-to-database-sync).

Please send feedback or feature requests to: [feedback@datatorrent.com](mailto:feedback@datatorrent.com)

This document has a step-by-step guide to configure, customize, and launch this application.

## <a name="steps_to_launch">Steps to launch application</a>

1. Click on the AppFactory tab from the top navigation bar.
   ![AppHub link from top navigation bar](images/common/apphub_link.png)
Page listing the applications available on AppFactory is displayed.
1. Search for Database to see all applications related to Database.
1. Click on import button for `Kafka to Database Sync App`\Notification is displayed on the top right corner after application package is successfully
   imported.
   ![App import Notification](images/kafka-to-database-sync/import-notification.png)

1. Click on the link in the notification which navigates to the page for this application package.

    ![App details page](images/kafka-to-database-sync/app-details-page.png)

    Detailed information about the application package like version, last modified time, and short description is available on this page. Click on launch button for `Kafka-to-Database-Sync` application. In the confirmation modal, click the Configure button.

1. The <a name="launch-dialogue"></a>`Kafka-to-Database-Sync` application configuration page is displayed. The Required Properties section must be completed before the application can be launched.

    ![Launch dialogue](images/kafka-to-database-sync/launch.png)

    <a name="property-editor"></a>
    For example, suppose we wish string messages seperated with '|' to the table `test_event_table` in a
    PostgreSQL database named `testdb` accessible at `target-database.node.com` port `5432` with credentials
    username=`postgres`, password=`postgres`. Properties should be set as follows:

    |Name|Value|
    |---|---|
    |Csv Parser Schema |{ "separator": "\|", "quoteChar": "\"", "fields": [ { "name": "accountNumber", "type": "Integer" }, { "name": "name", "type": "String" }, { "name": "amount", "type": "Integer" } ] }|
    |Jdbc Output Database Url |jdbc:postgresql://target-database.node.com:5432/testdb|
    |Jdbc Output Store Password |postgres|
    |Jdbc Output Store Username |postgres|
    |Jdbc Output Table Name |test_event_output_table|
    |Kafka Broker List|node1.company.com:9098, node2.company.com:9098, node3.company.com:9098|
    |Kafka Topic Name |transactions|

    Details about configuration options are available in [Configuration options](#configuration_options) section.

1. When you are finished inputting application configuration properties, click on the `save` button on the top right corner of the page to save the configuration.

1. Click on the `launch` button at the top right corner of the page to launch the
application.
A notification will be displayed on the top right corner after the application is launched successfully and includes the Application ID which can be used to monitor this instance and to find
its logs.
   ![Application launch notification](images/common/app_launch_notification.png)

1. Click on the `Monitor` tab from the top navigation bar.
   ![Monitor tab](images/common/monitor_link.png)

1. A page listing all running applications is displayed. Search for the current instance based on name or application id or any other relevant field. Click on the application name or id to navigate to the details page.
   ![Apps monitor listing](images/common/apps_monitor_listing.png)
1. Application instance details page shows key metrics for monitoring the application status.
   `logical` tab shows application DAG, StrAM events, operator status based on logical operators, stream status, and a chart with key metrics.
   ![Logical tab](images/kafka-to-database-sync/logical.png)
1. Click on the `physical` tab to look at the status of physical instances of operators, containers etc.
   ![Physical tab](images/kafka-to-database-sync/physical.png)


## <a name="configuration_options">Configuration options</a>
### Prerequistes
1. Kafka configured with version 0.9.
2. `Meta-data` table is required for Jdbc Output operator for transactional data and application consistency.

|Table Name|Column Names|
|---|------|
|dt_meta|<br/>dt_app_id (VARCHAR)<br/>dt_operator_id (INT) <br/>dt_window (BIGINT)|

Query for `Meta-data` table creation:

`CREATE TABLE dt_meta (dt_app_id varchar(100) NOT NULL,
dt_operator_id int NOT NULL, dt_window bigint NOT NULL,
CONSTRAINT dt_app_id UNIQUE (dt_app_id,dt_operator_id,dt_window));`

### Mandatory properties
End user must specify the values for these properties.

|Property|Description|Type|Example|
|---|---|---|---|
|<p style="font-size:12px">dt.operator.kafkaInput.prop.clusters|List of Brokers for kafka input|String|node1.company.com:9098, node2.company.com:9098, node3.company.com:9098|
|<p style="font-size:12px">dt.operator.kafkaInput.prop.topics|Kafka topics for input|String|transactions|
|<p style="font-size:11px">dt.operator.kafkaInput.prop.initialOffset|Kafka input offset|String|<ul><li><p style="font-size:12px">EARLIEST</li><li><p style="font-size:12px">LATEST</li><li><p style="font-size:12px">APPLICATION_OR_EARLIEST</li><li><p style="font-size:12px">APPLICATION_OR_LATEST</li></ul>|
|<p style="font-size:12px">dt.operator.JdbcOuput.prop.store.databaseDriver|JDBC driver class. This has to be on CLASSPATH. PostgreSQL driver is added as a dependency.|String|org.postgresql.Driver|
|<p style="font-size:12px">dt.operator.JdbcOuput.prop.store.databaseUrl|JDBC connection URL| String|jdbc:postgresql://target-database.node.com:5432/testdb|
|<p style="font-size:12px">dt.operator.JdbcOuput.prop.store.password|Password for Database credentials| String|postgres|
|<p style="font-size:12px">dt.operator.JdbcOuput.prop.store.userName|Username for Database credentials| String|postgres|
|<p style="font-size:12px">dt.operator.JdbcOuput.prop.tableName|Table name for output records|String|test_event_output_table|


### Advanced properties
There are pre-saved configurations based on the application environment. Recommended settings for [datatorrent sandbox](https://www.datatorrent.com/download/datatorrent-rts-sandbox-edition-download/) are in `sandbox-memory-conf.xml` and for a cluster environment in `cluster-memory-conf.xml` (the first 2 are integers and the rest are strings).
The messages or records emitted are specified by the value of the `TUPLE_CLASS` attribute in the configuration file namely `PojoEvent` in this case.

|Property|Description|Default for<br/> cluster<br/>-memory<br/>- conf.xml|Default for<br/>  sandbox<br/>-memory<br/> -conf.xml|
|---|---|---|---|
|<p style="font-size:12px">dt.operator.csvParser.port.out.attr.TUPLE_CLASS|Fully qualified class name for the tuple class POJO(Plain old java objects) emitted by JDBC input|com.datatorrent.apps.PojoEvent|com.datatorrent.apps.PojoEvent|
|<p style="font-size:12px">dt.operator.JdbcOutput.port.input.attr.TUPLE_CLASS|Fully qualified class name for the tuple class POJO(Plain old java objects) emitted by Kafka input|com.datatorrent.apps.PojoEvent|com.datatorrent.apps.PojoEvent|
|<p style="font-size:12px">dt.operator.csvParser.prop.schema|Schema for CSV parser|<p style="font-size:12px">{"separator": "&#124;",<br/>"quoteChar": "\"",<br/>"lineDelimiter": "", "fields": [<br/>{<br/>"name": "accountNumber", <br/>"type": "Integer"<br/>},<br/> {<br/>"name": "name",<br/>"type": "String"<br/>},<br/>{<br/>"name": "amount",<br/>"type": "Integer"<br/>}<br/>]}|<p style="font-size:12px">{"separator": "&#124;",<br/>"quoteChar": "\"",<br/>"lineDelimiter": "", "fields": [<br/>{<br/>"name": "accountNumber", <br/>"type": "Integer"<br/>},<br/> {<br/>"name": "name",<br/>"type": "String"<br/>},<br/>{<br/>"name": "amount",<br/>"type": "Integer"<br/>}<br/>]}|

You can override default values for advanced properties by specifying custom values for these properties in the step [specify custom property](#property-editor) step mentioned in [steps](#steps_to_launch) to launch an application.

## Steps to customize the application

1. Make sure you have following utilities installed on your machine and available on `PATH` in environment variable:
    - [Java](https://www.java.com/en/download/manual.jsp) : 1.7.x
    - [maven](http://maven.apache.org/download.cgi) : 3.0 +
    - [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) : 1.7 +
    - [Hadoop]( http://www.michael-noll.com/tutorials/running-hadoop-on-ubuntu-linux-single-node-cluster/) (Apache-2.2)+

1.  Use following command to clone the examples repository:

     ```
     git clone git@github.com:DataTorrent/app-templates.git
     ```

1. Change directory to `examples/tutorials/kafka-to-database-sync`:

    ```
    cd examples/tutorials/kafka-to-database-sync
    ```

1. Import this maven project in your favorite IDE (e.g. eclipse).

1. Change the source code as per your requirements. Some tips are given as commented blocks in the `Application.java` for this project.

1. Make respective changes in the test case and `properties.xml` based on your environment.

1. Compile this project using maven:

    ```
    mvn clean package
    ```

    This will generate the application package file with `.apa` extension in the `target` directory.

1. Go to DataTorrent UI Management console on web browser. Click on the `Develop` tab from the top navigation bar.

1. Click on `Application Packages` from the list.

1. Click on `upload package` button and upload the generated `.apa` file.
    ![Upload](images/common/upload.png)

1. Application package page is shown with the listing of all packages. Click on the `Launch` button for the uploaded application package. Follow the [steps](#launch-dialogue) for launching an application.
