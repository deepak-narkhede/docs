# About Store and Replay Feature

The Store and Replay Feature enables a user to simulate and view the outcomes of what-if scenarios by storing incoming data that is used later to evaluate and visualize this same data with different rules and business logic. Applications with the capability to store and replay can store the incoming data from the Kafka input operators and then replay the stored data with a different set of rules to visualize the outcome.

The store and replay functions can be enabled by adding specific properties to an application configuration. To prevent potential complications, it is recommended that only one instance of the application be launched for storing data, while a separate instance of the application is then launched to replay a certain time frame of the data stored by the prior application instance. The separate instances can use different configurations and rules to achieve the what-if analysis. When the store-and-replay related configuration properties are specified, the "storing" part of the feature is enabled to store the input data to an application's HDFS path.

# Enabling Data Storage

To store incoming data, you must create an application configuration, add the applicable properties, and launch the application with this configuration. Follow these steps:

1. Create an [application configuration](application_configurations.md).
2. Open this application configuration and add the following optional properties with their corresponding values. Though the UI displays optional properties, these properties are required for enabling the data storage for replay:

    | **Property Name** | **Value** |
    | --- | --- |
    | dt.operator.TransactionReceiver.prop.enableArchive | true |
    | dt.operator.TransactionReceiver.prop.enableReplay | false |

    **Note** : In the above example, _dt.operator.TransactionReceiver_ is the name of the Kafka input operator. Change this name to the Kafka input operator your application DAG uses.
    
3. Click **Save** and then click **Launch**.

# Creating Rules

This step is optional and is used to create alternative rules for your what-if analysis. Please see [Creating Rules using CEP Workbench](cep_workbench.md).

# Enabling Replay

To replay data, you must create an application configuration, add the applicable properties, apply the required rules, and launch the application with this configuration.  Using the properties, you specify the following:

- **enableReplay**: The store function is set to false and the replay is set to true.
- **srcArchiveAppName**: Kafka time-offset mapping is read from DB related to SrcArchiveAppName. SrcArchiveAppName is the name of the separate instance of the application that stores the Kafka topic offset in HDFS.

  **Note**: The "Instance name" is usually a different configured name of the same application.

- **Start time/endtime**
Specify the start time and end time to begin and stop the replay.

To enable replay, do the following:

1. Create an [application configuration](application_configurations.md).
2. Open this configuration and add the following optional properties with their corresponding properties:

    | **Property Name** | **Value** |
    | --- | --- |
    | dt.operator.TransactionReceiver.prop.enableArchive | false |
    | dt.operator.TransactionReceiver.prop.enableReplay | true |
    | dt.operator.TransactionReceiver.prop.srcArchiveAppName | DetectionApp."DetectionApp" is the example name of another app with enableArchive turned on, which has been launched or is running.  |
    | dt.operator.TransactionReceiver.prop.replayStartTime | yyyy-MM-ddTHH:mm:ss.  (For example: 2017-11-20T08:11:00) |
    | dt.operator.TransactionReceiver.prop.replayEndTime | yyyy-MM-ddTHH:mm:ss. (For example: 2017-11-20T18:11:00) |

    **Note** : In the above example, **dt.operator.TransactionReceiver** is the name of the Kafka input operator. Change this name to the Kafka input operator your application DAG uses.
    
3. Click **Save** and then click **Launch**. You can view the outcome from the **Visualize** tab by importing a dashboard for the application instance.

# Visualizing Replay of Data

To visualize replay of data after applying various rules, you can either configure dashboards for this application using [application configuration](application_configurations.md) or import [dashboards](dtdashboard.md) for the application where you have enabled replay.
