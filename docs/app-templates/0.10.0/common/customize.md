# How to customize an app-template

This document describes how to customize an app-template.

## <a name="customization-steps">Steps to customize the application</a>

1. Make sure you have following utilities installed on your machine and available on `PATH` in environment variable:
    - [Java](https://www.java.com/en/download/manual.jsp) : 1.7.x
    - [maven](http://maven.apache.org/download.cgi) : 3.0.5 +
    - [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) : 1.7 +
    - [Hadoop]( http://www.michael-noll.com/tutorials/running-hadoop-on-ubuntu-linux-single-node-cluster/) (Apache-2.6.0)+

1.  Use following command to clone the repository:

     ```
     git clone git@github.com:DataTorrent/moodI.git
     ```

1. Change directory to containing app-template you wish to customize:

    ```
    cd moodI/app-templates/kafka-to-hdfs-filter-transform/
    ```

1. Import this maven project in your favorite IDE (e.g. eclipse).

1. Change the source code as per your requirements.

1. Make respective changes in the test case and `properties.xml` based on your environment.

1. Compile this project using maven:

    ```
    mvn clean package
    ```

    This will generate the application package file with `.apa` extension in the `target` directory.

1. Go to DataTorrent UI Management console on web browser. Click on the `Develop` tab from the top navigation bar.
    ![Develop tab](../../images/common/develop_link.png)
1. Click on `upload package` button and upload the generated `.apa` file.
    ![Upload](../../images/common/upload.png)

1. Application package page is shown with the listing of all packages. Click on the `Launch` button for the uploaded application package. Follow the [steps](../import-launch/#launch-dialogue) for launching an application.

## Note on customization


1.  `Application.java` defines the Application class which defines the application pipeline. Application is represented as directed acyclic graph (DAG). Vertices of the graph represents operators or computational units. Edges represents data flow or streams.

1. `Application` class implements `StreamingApplication` interface by defining implementation for `populateDAG` method .

1. `populateDAG` methods receives an argument with an instance of DAG object. App developers can add operators, streams to this dag object to define the pipeline based on the need.

1. Second argument to `populateDAG` method is an instance of Configuration object.
All the properties specified in `properties.xml` will be available through this configuration object.

1. Most of the commonly used functionality, connectors are available in [moodI](https://github.com/DataTorrent/moodI), [malhar](https://github.com/apache/apex-malhar/) operator library. If required functionality is not available in the operator library; one can implement own operators for custom computations.

1. Add the operators to the DAG using `dag.addOperator()` API and connect the operators with upstream, downstream operators using `dag.addStream()` API.

    For example, suppose one needs to modify `kafka-to-hdfs-filter-transform` such that count of tuples discarded by the filter operator should be displayed on the console. This can be achived by adding following code to `populateDAG` method in `Application.java`:

```java

Counter counter = dag.addOperator("counter", Counter.class);
ConsoleOutputOperator console = dag.addOperator("console", ConsoleOutputOperator.class);
dag.addStream("FilteredOut", filterOperator.falsePort, counter.input);
dag.addStream("FilteredOutToConsole", counter.output, console.input);
```
Follow the [customization steps](#customization-steps) for applying your changes.
