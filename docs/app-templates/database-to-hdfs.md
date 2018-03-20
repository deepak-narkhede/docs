# Database dump to HDFS Sync application

## Summary

Ingest records from a PostgreSQL Database table to hadoop HDFS. This application reads messages from configured PostgreSQL table and writes each record as a comma-separated line in HDFS files.

The source code is available at:
[https://github.com/DataTorrent/app-templates/tree/master/database-to-hdfs](https://github.com/DataTorrent/app-templates/tree/master/database-to-hdfs).

Please send feedback or feature requests to: [feedback@datatorrent.com](mailto:feedback@datatorrent.com)

This document has a step-by-step guide to configure, customize, and launch this application.

## <a name="steps_to_launch">Steps to launch application</a>

1. Click on the AppFactory tab from the top navigation bar.
   ![AppHub link from top navigation bar](images/common/apphub_link.png). Page listing the applications available on AppFactory is displayed.
1. Search for Database to see all applications related to Database.
1. Click on import button for `Database dump to HDFS Sync App.`
Notification is displayed on the top right corner after application package is successfully imported.
   
   ![App import Notification](images/database-to-hdfs/import-notification.png)
   
   

1. Click on the link in the notification which navigates to the page for this application package.

    ![App details page](images/database-to-hdfs/app-details-page.png)

    Detailed information about the application package like version, last modified time, and short description is available on this page. Click the launch button for `Database-to-HDFS-Sync` application. In the confirmation modal, click the Configure button.

1. The <a name="launch-dialogue"></a>`Database-to-HDFS-Sync` application configuration page is displayed. The Required Properties section must be completed before the application can be launched.

    ![Launch dialogue](images/database-to-hdfs/launch.png)

    <a name="property-editor"></a>
    For example, suppose we wish to process all rows from the table `test_event_table` in a
    PostgreSQL database named `testdb` accessible at `database-node.com` port `5432` with credentials
    username=`postgres`, password=`postgres`, and we wish to write the output to the HDFS file
    `/user/appuser/output/output.txt`. Properties should be set as follows:

    |Name|Value|
    |---|---|
    |Jdbc Input Database Url |jdbc:postgresql://database-node.com:5432/testdb|
    |Jdbc Input Store Password |postgres|
    |Jdbc Input Store Username |postgres|
    |Jdbc Input Table Name |test_event_table|
    |Output Directory Path On HDFS |/user/appuser/output|
    |Output File Name On HDFS |output.txt|

    Details about configuration options are available in [Configuration options](#configuration_options) section.

1. When you are finished inputting application configuration properties, click on the `save` button on the top right corner of the page to save the configuration.

1. Click on the `launch` button at the top right corner of the page to launch the
application.
A notification will be displayed on the top right corner after the application is launched successfully and includes the Application ID which can be used to monitor this instance and to find
its logs.
   ![Application launch notification](images/common/app_launch_notification.png)

1. Click on the `Monitor` tab from the top navigation bar.

1. A page listing all running applications is displayed. Search for the current instance based on name or application id or any other relevant field. Click on the application name or id to navigate to the details page.
   ![Apps monitor listing](images/common/apps_monitor_listing.png)
1. Application instance details page shows key metrics for monitoring the application status.
   `logical` tab shows application DAG, StrAM events, operator status based on logical operators, stream status, and a chart with key metrics.
   ![Logical tab](images/database-to-hdfs/logical.png)
   ![Physical tab](images/database-to-hdfs/physical.png)
   1. Click on the `physical` tab to look at the status of physical instances of operators, containers etc.

## <a name="configuration_options">Configuration options</a>

### Mandatory properties
End user must specify the values for these properties.

|Property|Description|Type|Example|
|---|---|---|---|
|dt.operator.JdbcPoller.prop.store.databaseDriver|JDBC driver class. This has to be on CLASSPATH. PostgreSQL driver is added as a dependency.|String|org.postgresql.Driver|
|dt.operator.JdbcPoller.prop.store.databaseUrl|JDBC connection URL| String|<p style="font-size:12px">jdbc:postgresql://database-node.com:5432/testdb|
|dt.operator.JdbcPoller.prop.store.password|Password for Database credentials| String|postgres|
|dt.operator.JdbcPoller.prop.store.userName|Username for Database credentials| String|postgres|
|dt.operator.JdbcPoller.prop.tableName|Table name for input records|String|test_event_table|
|dt.operator.JdbcPoller.prop.whereCondition|Where clause condition (if any) for input records. Keep blank to fetch all records.|String||
|dt.operator.fileOutput.prop.filePath|Output path for HDFS|String|/user/appuser/output|
|dt.operator.fileOutput.prop.outputFileName|Output file name |String|output.txt|

### Advanced properties
There are pre-saved configurations based on the application environment. Recommended settings for [datatorrent sandbox](https://www.datatorrent.com/download/datatorrent-rts-sandbox-edition-download/) are in `sandbox-memory-conf.xml` and for a cluster environment in `cluster-memory-conf.xml` (the first 2 are integers and the rest are strings).
The messages or records emitted are specified by the value of the `TUPLE_CLASS` attribute in the configuration file namely `PojoEvent` in this case.

|Property|Description|Default for<br/> cluster<br/>-memory<br/>- conf.xml|Default for<br/>  sandbox<br/>-memory<br/> -conf.xml|
|---|---|---|---|
|<p style="font-size:12px">dt.operator.JdbcPoller.prop.partitionCount|Number of JDBC input partitions for parallel reading.|4|1|
|<p style="font-size:12px">dt.operator.JdbcPoller.prop.batchSize|Batch size to read data from JDBC.|300|300|
|<p style="font-size:12px">dt.operator.JdbcPoller.prop.key|Key column for the table. This will be used for partitoning of rows.|<p style="font-size:12px">ACCOUNT_NO|<p style="font-size:12px">ACCOUNT_NO|
|<p style="font-size:12px">dt.operator.JdbcPoller.prop.columnsExpression|Key column for the table. This will be used for partitoning of rows.|<p style="font-size:12px">ACCOUNT_NO, NAME, AMOUNT|<p style="font-size:12px">ACCOUNT_NO, NAME, AMOUNT|
|<p style="font-size:10px">dt.operator.JdbcPoller.port.outputPort.attr.TUPLE_CLASS|Fully qualified class name for the tuple class POJO(Plain old java objects) emitted by JDBC input|com.datatorrent.apps.PojoEvent|com.datatorrent.apps.PojoEvent|
|<p style="font-size:12px">dt.operator.JdbcPoller.prop.pollInterval|Poll interval for scanning new records in milisec|1000|1000|
|<p style="font-size:12px">dt.operator.formatter.prop.schema|Schema for CSV formatter|{"separator": "&#124;",<br/>"quoteChar": "\"",<br/>"lineDelimiter": "", "fields": [<br/>{<br/>"name": "accountNumber", <br/>"type": "Integer"<br/>},<br/> {<br/>"name": "name",<br/>"type": "String"<br/>},<br/>{<br/>"name": "amount",<br/>"type": "Integer"<br/>}<br/>]}|{"separator": "&#124;",<br/>"quoteChar": "\"",<br/>"lineDelimiter": "", "fields": [<br/>{<br/>"name": "accountNumber", <br/>"type": "Integer"<br/>},<br/> {<br/>"name": "name",<br/>"type": "String"<br/>},<br/>{<br/>"name": "amount",<br/>"type": "Integer"<br/>}<br/>]}|
|dt.operator.formatter. port.in.attr.TUPLE_CLASS|Fully qualified class name for the tuple class POJO(Plain old java objects) input to CSV formatter|com.datatorrent.apps.PojoEvent|com.datatorrent.apps.PojoEvent|


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

1. Change directory to `examples/tutorials/database-to-hdfs`:

    ```
    cd examples/tutorials/database-to-hdfs
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
