# Kafka to HDFS Sync Application

## Summary

Ingest messages from kafka to hadoop HDFS for continuous ingestion to hadoop. The source code is available at: [https://github.com/DataTorrent/app-templates/tree/master/kafka-to-hdfs-sync.](https://github.com/DataTorrent/app-templates/tree/master/kafka-to-hdfs-sync)

Please send feedback or feature requests to: [feedback@datatorrent.com](mailto:feedback@datatorrent.com)

This document has a step-by-step guide to configure, customize, and launch this application.

## <a name="steps_to_launch">Steps to launch application</a>

1. Click on the AppFactory tab from the top navigation bar. 
   ![AppHub link from top navigation bar](images/common/apphub_link.png) 
   Page listing the applications available on AppFactory is displayed.

1. Search for Kafka to view all the applications related to Kafka.
1. Click on import button for `Kafka to HDFS Sync App`. 
Notification is displayed on the top right corner after application package is successfully
   imported.
   ![App import Notification](images/kafka-to-hdfs-sync/import-notification.png)

1. Click on the link in the notification which navigates to the page for this application package.

    ![App details page](images/kafka-to-hdfs-sync/app-details-page.png)

    Detailed information about the application package like version, last modified time, and short description is available on this page. Click on launch button for `Kafka-to-HDFS-Sync` application. In the confirmation modal, click the Configure button.

1. The <a name="launch-dialogue"></a>`Kafka-to-HDFS-Sync` application configuration page is displayed. The Required Properties section must be completed before the application can be launched.

    ![Launch dialogue](images/kafka-to-hdfs-sync/launch.png)

    <a name="property-editor"></a>
    For example, suppose we wish to process all messages from topic `transactions` at the kafka server running on localhost port 9092
    and write them to `output.txt` under `/user/appuser/output` on HDFS. Properties should be set as follows:

    |name|value|
    |---|---|
    |Kafka Broker List |kafka-server-node:9092|
    |Kafka Topic Name |test|
    |Output Directory Path |/user/appuser/input|
    |Output File Name |output.txt|

    Details about configuration options are available in [Configuration options](#configuration_options) section.

1. When you are finished inputting application configuration properties, click on the `save` button on the top right corner of the page to save the configuration.

1. Click on the `launch` button at the top right corner of the page to launch the application.
A notification will be displayed on the top right corner after application is launched successfully and includes the Application ID which can be used to monitor this instance and find its logs.
   ![Application launch no tification](images/common/app_launch_notification.png)

1. Click on the `Monitor` tab from the top navigation bar.

1. A page listing all running applications is displayed. Search for current application based on name or application id or any other relevant field. Click on the application name or id to navigate to application instance details page.
   ![Apps monitor listing](images/common/apps_monitor_listing.png)

1. Application instance details page shows key metrics for monitoring the application status.
   `logical` tab shows application DAG, Stram events, operator status based on logical operators, stream status, and a chart with key metrics.
   ![Logical tab](images/kafka-to-hdfs-sync/logical.png)

1. Click on the `physical` tab to look at the status of physical instances of the operator, containers etc.
   ![Physical tab](images/kafka-to-hdfs-sync/physical.png)

## <a name="configuration_options">Configuration options</a>

### Mandatory properties
End user must specify the values for these properties.

|Property|Description|Type|Example|
|---|---|---|---|
|dt.operator.fileOutput.prop.filePath|Output path for HDFS|String|/user/appuser/output|
|dt.operator.fileOutput.prop.outputFileName|Output file name |String|output.txt|
|dt.operator.kafkaInput.prop.clusters|Comma separated list of kafka-brokers |String|node1.company.com:9098, node2.company.com:9098, node3.company.com:9098|
|dt.operator.kafkaInput.prop.initialOffset|Initial offset to read from Kafka |String|<ul><li>EARLIEST</li><li>LATEST</li><li>APPLICATION_OR_EARLIEST</li><li>APPLICATION_OR_LATEST</li></ul>|
|dt.operator.kafkaInput.prop.topics|Topics to read from Kafka |String|event_data|


### Advanced properties
There are pre-saved configurations based on the application environment. Recommended settings for [datatorrent sandbox](https://www.datatorrent.com/download/) are in `sandbox-memory-conf.xml` and for a cluster environment in `cluster-memory-conf.xml`.

|Property|Description|Type|Default for<br/> cluster-<br/>memory<br/>- conf.xml|Default for<br/> sandbox-<br/>memory<br/> -conf.xml|
|---|---|---|---|---|
|dt.operator.fileOutput.prop.maxLength|Maximum length for output file after which file is rotated|long|Long.MAX_VALUE|Long.MAX_VALUE|

You can override default values for advanced properties by specifying custom values for these properties in the [specify custom property](#property-editor) step within [steps to launch application](#steps_to_launch).

## Steps to customize the application

1. Make sure you have following utilities installed on your machine and available on `PATH` in environment variables
    - [Java](https://www.java.com/en/download/manual.jsp) : 1.7.x
    - [maven](http://maven.apache.org/download.cgi) : 3.0 +
    - [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) : 1.7 +
    - [Hadoop]( http://www.michael-noll.com/tutorials/running-hadoop-on-ubuntu-linux-single-node-cluster/) (Apache-2.2)+

1.  Use following command to clone the examples repository:

     ```
     git clone git@github.com:DataTorrent/app-templates.git
     ```

1. Change directory to 'examples/tutorials/kafka-to-hdfs-sync':

    ```
    cd examples/tutorials/kafka-to-hdfs-sync
    ```

1. Import this maven project in your favorite IDE (e.g. eclipse).

1. Change the source code as per your requirements. Some tips are given as commented blocks in the Application.java for this project

1. Make respective changes in the test case and `properties.xml` based on your environment.

1. Compile this project using maven:

    ```
    mvn clean package
    ```

    This will generate the application package with `.apa` extension in the `target` directory.

1. Go to DataTorrent UI Management console on web browser. Click on the `Develop` tab from the top navigation bar.

1. Click on `Application Packages` from the list.

1. Click on `upload package` button and upload the generated `.apa` file.
   ![Upload](images/common/upload.png)

1. Application package page is shown with the listing of all packages.
Click on the `Launch` button for the uploaded application package.    
Follow the [steps](#launch-dialogue) for launching an application.
