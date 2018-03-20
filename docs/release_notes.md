DataTorrent RTS Release Notes
========================================================================================================================
Version: 3.10
------------------------------------------------------------------------------------------------------------------------

Companies want to gain quick insights and take action on impacting events at the speed of their businesses. DataTorrent's Real-time Streaming (RTS) platform makes it easy to deliver fast data analytics applications that drive business outcomes using the latest innovation in data science and machine learning. It integrates best-of-breed open source technology innovation to provide all the features that a business needs to develop and deliver best-in-class, fast data applications.

DataTorrent RTS 3.10 version includes the following new features, resolved issues, and known issues.

### Features

The key features of DataTorrent RTS 3.10 release are as follows:

- [New RTS Platform features](#RTSPlatform)
- [DataTorrent's RTS Apoxi™ framework with added features](#apoxi)
- [New and enhanced AppFactory applications](#appfactory)
- [Miscellaneous features](#miscellaneous)


<a name="RTSPlatform"></a>

### RTS Platform

The following RTS Platform features are included in this release:

- [Support for OLAP with Druid](#olapwithdruid)
- [Expanded Support for Machine Learning and AI](#machinelearning)

<a name="olapwithdruid"></a>

#### Support for Real-time OLAP with Druid

Provides customers with the ability to slice and dice data in real-time to get the information needed to compute and compare it to historical trends. This capability is delivered as a pre-built component that tightly integrates Apex, Druid, and Superset for real-time plus historical dashboards and visualizations.   Druid is an open-source project that is hardened and delivered as part of the RTS platform so that a separate, dedicated Druid cluster is not required.

<a name="machinelearning"></a>

#### Expanded Support for Machine Learning and AI

DataTorrent RTS 3.10 helps customers capitalize on the value from the latest innovations in machine learning, AI, and data science.

##### Python Support

RTS is extended to support the machine-scoring models that are written in Python.

##### Support for PMML Based Machine Scoring Models

RTS also provides support for machine scoring models based on PMML which is an emerging standard.

<a name="apoxi"></a>

### DataTorrent's RTS Apoxi™ Framework

RTS Apoxi framework gives businesses operational readiness at any scale by providing the tooling required to assemble, manage, and operate fast data applications on any infrastructure. Apoxi is a framework that uniquely binds application building blocks or micro data services to create optimized, pre-built apps. It can also integrate independent applications to allow them to operate as one.

With Apoxi, DataTorrent can combine multiple micro data services, each with its own capability and operability, while also preserving the independence of different services, i.e. ingest and enrich, train and prepare, archive and persist, analyze and act.

For developers and data engineers, Apoxi saves time by providing facilities for streaming data visualization, lifecycle management, what-if data replay, and a built-in backplane for rapid integration.  Apoxi helps DevOps teams push applications to production with confidence by providing the management tooling, enterprise integrations, and operational metrics needed to meet production SLAs 24x7x365.

The following features of RTS Apoxi framework are included in 3.10 release:

- [Store and Replay](#storeandreplay)
- [Drools Workbench](#drools)
- [Application Backplane](#appbackplane)
- [Azure HDI Deployment](#azure)
- [New iFrame Widget](#iframe)
- [Configuration Artifacts for Schemas and Rules](#configartifacts)
- [Enhanced RTS UI for Launch and Application Configuration](#launchandappconfig)

<a name="storeandreplay"></a>

#### Store and Replay

Store and Replay helps customers push to production with confidence. Customers can record and replay data from a specific point in time to evaluate the effectiveness of builds, models, and scenarios before they are put into production thereby removing the guesswork about what outcomes can occur.

<a name="drools"></a>

#### Drools Workbench

Drools Workbench integration makes it easier to modify complex event processing (CEP) rules and push new rules to production. The workbench enables customers to import data schema and visually edit and manage complex rules, easily using an intuitive graphical user interface.

<a name="appbackplane"></a>

#### Application Backplane

Application Backplane enables multiple applications to be simply and consistently integrated to share insights and actions. Combining numerous applications in real-time can result in significantly better outcomes, while still enabling separately managed applications to remain independent and benefit from a network-effect.
For example, you can integrate a fraud prevention application, such as Payment Card Fraud Prevention, with another fraud prevention application so that bothapplications see a net reduction in fraud by alerting each other whenever a fraud is detected in one.

<a name="azure"></a>

#### Azure HDI Deployment

RTS now supports deployment to an Azure HDInsights Hadoop Cluster thereby enabling you to deploy RTS on Microsoft cloud. You can build streaming analytics applications and reduce the time to value with support for Azure Event Hubs as a source of incoming stream data.

<a name="iframe"></a>

#### New iFrame Widget

Now you can create rich dashboards that include visualizations from 3rd sources so that all your insights can be displayed in one, easy-to-use interface for exploring and visualizing data.   You can see this new capability in action as part of the new Online Analytics Service that provides real-time and historical visualizations, drill-down, query, etc.

<a name="configartifacts"></a>

#### Configuration Artifacts for Schemas and Rules

DT RTS UI now allows you to include configuration artifacts which refers to schemas, libraries, rules and custom code that can be provided to an application through an application configuration. These artifacts can be uploaded manually and synchronized automatically from a Maven artifacts directory that is accessible by the Gateway. During the launch of an application, these artifacts are deployed as Application Configuration (\*.apc) files.

<a name="launchandappconfig"></a>

#### Enhanced RTS UI for Launch and Application Configuration

The RTS UI is enhanced to include user-friendly screens for creating application configurations that are composed of multiple, separate services - enabling them to function as one end-to-end application.

### AppFactory <a name="appfactory"></a>

The AppFactory includes an extensive library of popular open-source and proprietary operators for data input/output, enrichment, analytical functions, and more. These operators are further combined into pre-tested, streaming micro data services for common patterns such as data ingestion, real-time synchronization, anomaly detection, machine scoring, etc.

The following features are included in AppFactory for 3.10 release:

- [Omni-Channel Fraud Prevention Application V2](#fpa)
- [Account Takeover Prevention Application](#ato)
- [New Use Case: Retail Recommender PoC](#retail)
- [Micro Data Service (MDS): Online Analytics Service](#oas)
- [Enhanced Drools Operator](#droolsoperator)

<a name="fpa"></a>

#### Omni-Channel Fraud Prevention Application V2

The newest version of DataTorrent's Omni-channel Payment Fraud Prevention application integrates with the Druid OLAP component for real-time online analytical processing and enhanced historical trend analysis. This latest application also includes a reference architecture for integration with a variety of machine-trained analytical models for enhanced fraud prevention.

The improvements in this version of the Fraud Prevention application include the following:

- Support for stateful rules via Drools operator which allows storing and using a state across multiple transactions.
- Integrated with OAS which enables real-time analytics.
- Support for rule editing with CEP Workbench.
- Integrated with Apache Superset UI which lets you visualize and analyze trends on real-time and historical dashboards.

<a name="ato"></a>

#### Online Account Takeover Prevention

RTS introduces **Account Takeover Prevention (ATO) application**, a reference application that enables customers to prevent online account takeover and fraud by processing, enriching, analyzing, and acting on multiple streams of account event information in real-time.

Additional key features in this application include:

- Integration with Online Analytics Service for OLAP trend analysis.
- Support for rule editing with Drools Workbench.
- Integration with Apache Superset UI for visualization.

<a name="retail"></a>

#### New Use Case: Retail Recommender - Reference Architecture

Real-time, personalized product and service recommendations drive additional revenue for retail and ecommerce companies. DataTorrent's Retail Recommender provides a reference architecture that produces product recommendations in real-time by operationalizing the latest innovations in machine-learning.

Key features in this application include:

- Integration with Online Analytics Service for OLAP trend analysis
- Integration of Spark MLlib.
- Integration with Apache Superset UI for visualization

For more details, refer to Retail Recommender Reference Architecture in our [AppFactory](http://www.datatorrent.com/appfactory)

<a name="oas"></a>

#### Online Analytics Service (OAS)

Online Analytics Service (OAS) is delivered as a pre-built component that integrates Apex, Druid, and Superset for real-time BI dashboards and visualizations. OAS provides real-time as well as historical trend analysis, visualization, drill down, and query.

RTS enables OAS to receive event data from multiple data sources into a single Kafka topic while making the data available for analysis. RTS also provides a seamless way for target applications to push the data into Kafka topics for consumption by OAS.

<a name="droolsoperator"></a>

#### Enhanced Drools Operator

The Drools operator is enhanced to provide support for stateful rules execution. The updated Drools operator is used in the latest version of Fraud Prevention application as well as in the Account Takeover Prevention application.

<a name="miscellaneous"></a>

### Miscellaneous Features

The following miscellaneous features are included in this release:

- [Encrypted StreamCodec](#streamcodec)
- [Dynamic Usage Statistics Reporting via Phone Home](#phonehome)

<a name="streamcodec"></a>

#### Encrypted StreamCodec

Encrypted StreamCodec adds multiple implementations of StreamCodec and StatefulStreamCodec, which provides support for encryption of tuples before sending them downstream. All implementations are based on AES and secure RPC when launching operators in the cluster. The shared secret key is distributed to all the operators during deployment.

<a name="phonehome"></a>

#### Dynamic Usage Statistics Reporting via Phone Home

Dynamic usage statistics are reported to DataTorrent via the phone home feature. This aids DataTorrent to provide better support and to analyze when you are running out of data capacity. It also helps you to understand your RTS usage patterns over time.

### Upgrade Information

In case you want to use Services in DataTorrent RTS applications, you must install Docker on your system. However, this is not mandatory for upgrading to RTS 3.10 version.

### Resolved Issues

The following resolved issues are included in this release:

- Added a new recovery mode REUSE\_INSTANCE to reuse operator instance across failures without reloading from checkpoint in certain cases. Now when the upstream operator is killed, the downstream operator does not reload the data from checkpoint from HDFS. Instead it uses the state in memory as-is. (SPOI-11219)
- Support for option to use per user application directory in HDFS in secure mode. (SPOI-12134)
- Out of order window ID was received in the begin window after recovery from a failure.  (SPOI-12633)
- Support is provided for UI Active Directory. (SPOI-12663)
- Container request is not sent, when the node report checks for the memory requested by the container. (SPOI-12708)
- With anti-affinity STRAM, enough containers are not received from the resource manager to run all the operators. (SPOI-12791)
- Files configured by the user were not available after RTS upgrade. (SPOI-12794)
- Provide new permission that is VIEW\_LOGS which determines if user can view the log files of the application instances. (SPOI-12936)
- Authentication for Active Directory failed for domain users. (SPOI-12998)
- Option provided to run snapshot server in stand-alone mode. (SPOI-13031)
- SMTP configuration does not work without SSL. ( SPOI-13256)

### Known Issues

The following known issues are included in RTS 3.10:

- _KafkaExactlyOnceOutputOperator_ does not work with Kerberised cluster. (SPOI-13182)
- Operator in fraud-prevention App dies while attempting to record a sample. (SPOI-13194)
- The java script validation cannot terminate a java script, if it is running longer than the timeout period. (SPOI-12265)
- Application does not shutdown even after consuming the end offset in Kafka. ( SPOI-12955)
- OAS is unable to handle multiple intervals in select query. (SPOI-12865)
- DT services with secure docker setup does not work. (SPOI-13104)
>**Workaround:** Docker in SSL mode requires mutual TLS (MTLS) which is not supported. Make sure your docker daemon uses either UNIX sockets or plain TCP sockets

- Multiple redirections occur when logging into drools workbench through proxy URL. (SPOI-13254)
>**Workaround** : Click the **Back** button on the browser to go to the Drools WorkBench login page. You can also close the current tab and click the Proxy URL once again to go to the login page.

- Transient services are not deleted when the corresponding app is terminated. (SPOI-12983)
- Schema Aware operators should not perform validations in setter methods. (SPOI-13095)
- Proxy URL for newly created Superset service (from UI) does not work. (SPOI-13454)
- GATEWAY\_CONNECT\_ADDRESS parameter is misspelt as GATEWAY\_CONNECT\_ADDRESSS. (SPOI-13449)
- Fraud App: Physical DAG is broken (SPOI-13388)
- Application fails when both replay and archive properties are set to True. ( SPOI-13202)
Release date: Feb 21, 2018


Version: 3.9.2
------------------------------------------------------------------------------------------------------------------------

Release date: Dec 6, 2017

The following issues are fixed in DataTorrent RTS 3.9.2 release:

#### Resolved Issues

**[SPOI-12791]**

In the application when the anti-affinity is enabled, the application master gets containers from the Resource Manager for sometime only.  After this no more containers are received even after periodically requesting the STRAM for containers. Thus the functioning of the application gets disrupted.

**[SPOI-12794]**

While upgrading to RTS 3.9.1 with the latest rpm, the installation do not remain seamless. The LDAP configurations of the user are cleared from conf directory and the configurations had to be manually set up again. 

**[SPOI-12795]**

Metrics platform was not supported with DT-Plus license and was only available with DT_Premium license as part of 3.9.1 release. 

**[SPOI-12832]**

The application exits due to *java.lang.NullPointer* exception in the application master. 

**[SPOI-12855]**

CassandraStore class only supports single node.  The CassandraStore must be enabled to support more than one cassandra nodes.

**[SPOI-12820]**

A new License API must be added to check the license restriction inside the Apex application container.

**[SPOI-12898]**

License is required for deploying RTS 3.9.2 on Sandbox. 

**[SPOI-12843]**

The App Metrics platform must be updated with the new license checking code to support DT Premium or DT Plus license category.

**[SPOI-12842]**

The Drools CEP Rule Engine operator must be updated with the new license checking code to support DT Premium or DT Plus license category.

**[SPOI-12841]**

The Omni-channel Fraud Prevention v1 premium application must be updated with the new license checking code that supports DT Premium or DT Plus license category.

**[SPOI-12932]**

For Alert configurations, an e-mail address with hypen(-) character is not accepted. 

**[SPOI-12888]**

The metrics data is generated even when the platform license was not set.

**[SPOI-12872]**

*isValidLicense API* returns as **True** in cases where the license is not even configured.

**[SPOI-12867]**

The method *context.getAttributes().get()*, that is used in License API, do not function properly in getting the application name property in the Apex Container code. This method must be replaced with *context.getValue()* method.

**[SPOI-12811]**

The filtering of auto complete list in tags do not input correctly.

**[SPOI-12774]**

If the key value contains a space in the key-combination, then that space is converted into hypen(-).
For example: If the key is **Las Vegas**, then it gets converted to **Las-Vegas**.

**[SPOI-12749]**

Nullpointer exception in found in FSWindowDataManager.

Version: 3.9.1
------------------------------------------------------------------------------------------------------------------------

Release date: Oct 10, 2017

### Features
The following features and enhancements are included in the DataTorrent RTS 3.9.1 release:

#### Premium Applications Licensing
DataTorrent applications and operators are now offered under the following license categories:

* DataTorrent Premium Suite®
* DataTorrent Service Plus® 
 
These categories determine the type of access that you have for the premium applications and operators that are available in DataTorrent's AppFactory.

With **DT Premium**, you can access  and download premium applications from the DataTorrent AppFactory such as the Omni-Channel Fraud Prevention application and operators such as Drools-based rule engine for complex event processing. 

With **DT Plus**, you can download only non-premium applications and operators that can be used for data ingestion.  Premium applications, although visible on the AppFactory, can be downloaded only if you subscribe to DataTorrent Premium Suite.

In this release, licensing support is extended to **Metrics module** and to **Omni-Channel Fraud Prevention** application.

#### Python Support
DataTorrent now provides support to Python for building applications in Apex. You can create a DAG with Python as high level API support.

#### Single Value Widget
The Single Value widget can be now added to a dashboard of Application Templates.
 
#### Historical Time Range Results 
The Historical time range selection results now includes the  **From** and **To** values.

#### Enhancements to Import Packaged Dashboards Section
The following enhancements are done to the **Import Packaged Dashboards** section of the **Launch < Application >** dialog box:

* On the UI, the default selection for the replacement application is now the same as the currently launching application.
* The **Name** field is now changed to **Dashboard Name**
* A detailed description is now provided for the **Select Replacement Applications** field. 
* The purpose of the application state can be viewed when you hover over the dashboard name. 
* The name of the user who packaged the dashboards is now no longer visible against the name of the dashboard. 
 
#### Artifact Query API Filter

The artifact query API now supports expansion to all versions, including older ones, as well as specifying exact RTS Version and limiting the results. 

### DataTorrent RTS Defect Fixes 
The following resolved issues are included in the DataTorrent RTS 3.9.1 release:

#### Defects

* [SPOI-11219] - Add a new recovery mode where the operator instance before a failure event can be reused in certain cases without reloading from checkpoint.
* [SPOI-12665] - Autometric values of an operator is showing wrongly in App master.
* [SPOI-12633] - Operator fails with catastrophic error message.


Version: 3.9
------------------------------------------------------------------------------------------------------------------------

Release date: Aug 23, 2017

### Summary
#### Application  Dashboards

These dashboards help to deliver a complete application experience, showcasing the business-relevant metrics customers’ desire.
 
DataTorrent’s Applications Dashboards are 1) easy to create from library of widgets 2) show business relevant, real-time analytics and 3) can be easily associated with one or more streaming application(s). Now customers can construct the specific view that THEY want to see in one place.
 
#### Application Metrics and Visualization
 
Customers can create real-time metrics that are relevant to the overall streaming analytics application, so that business-relevant metrics can be easily computed and visualized. 
 
DataTorrent’s Application Metrics & Visualization capabilities enable customers to define not just operational metrics related to data processing, but now they can capture, store, and show the business relevant metrics too.  This is key to being able to show dashboards that are relevant to specific business problems (for ex: percentage of transactions where fraud occurs, fraud trends in real-time, or fraud breakdown by channels).

 
#### DataTorrent AppFactory
 
DataTorrent has evolved the AppHub, making it even easier for customers to solve problems and understand how real-time streaming analytics can make a difference for their business.  

DataTorrent AppFactory is a centralized marketplace for streaming analytics applications that:
Solve industry specific streaming analytics problems i.e. fraud prevention to prepare the data so that you can make quick/informed business decisions help customers deliver value quickly without requiring incremental DIY work
 
The AppFactory is arranged both by vertical application and Application Suites making it very intuitive for the customer to identify what might be most relevant/critical for their business needs.
 
Additionally, customers can see the Use Cases, Reference Architectures, and pre-built applications for download to get a full view of what’s possible in the DataTorrent AppFactory.
 
At GA, DataTorrent AppFactory contains the following Application Suites:
Omni-channel Payment Fraud Prevention Application Suite
Continuous Big Data Cloud Sync Application Suite
Continuous Big Data Archival Application Suite
Continuous Big Data Preparation Application Suite
Continuous Big Data Sync Application Suite
 
AppFactory is a marketplace of big data streaming analytics use cases, reference architectures, and downloadable applications that help you to make a positive impact on your business as quickly as possible. You can search by industry or technology to quickly find what is most relevant to your needs.
 

#### Omni-channel Payment Fraud Prevention Application Suite

Prevent payment fraud in real-time on all transactions across all your channels.
DataTorrent’s Omni-channel Payment Fraud Prevention Application delivers real-time, data-in-motion analytics built for 24/7/365 production with sub-second latency, self-healing, enterprise-grade reliability and a scale-out architecture built with a complete pipeline that includes real-time business and operational visualizations.


#### Continuous Big Data Cloud Sync Application Suite

Continuous Big Data sync of on-premise and cloud infrastructures for availability, compliance, and archival.
Allows customers to create various data storages within and across on-premise and cloud which can be continuously synced, with no data loss.

 
#### Continuous Big Data Archival Application Suite

Continuous archival of Big Data for compliance and business continuity.
Enables customers fast backup of large volumes of data with low latency, and dynamic scaling features. 
 

#### Continuous Big Data Preparation Application Suite

Streaming Big Data ingestion to prepare your data for insight and action.
Renders your data “decision ready” as close as possible to the time of creation, serving the business with continuous, clean, consistent, enriched data in the desired business template.	

 
#### Continuous Big Data Sync Application Suite

Continuous delivery of Big Data to your Data Lake.
Allows customers to create an Enterprise Data Lake which delivers continuous, clean, and consistent data while ensuring no data loss occurs during data movement. 

### Additional product features that further increase a customer’s time to value include:

#### Operator Library Improvements

With every release, DataTorrent hardens the operators we ship with our applications and templates, continually adding to the Open Source community.

With RTS 3.9, we’ve included the creation of an input operator for the latest version of Kafka so we now support Kafka 0.10.1.
 
Schema Support for Applications
This feature makes it easier to change the fields that are supported in your data.
 
With DataTorrent’s Basic Schema Support for applications, it is easier to change the schema that are supported by the data.  Now users are able to associate fields to the data being processed by a DAG in order to associate this pipeline with a set of fields. When the fields are changed, the whole pipeline is updated accordingly.


#### Licensing

Every customer including eval and free edition users will need a new license file to use the RTS 3.9.0 product.

In 3.9, we have updated our software licensing mechanism. Customers, including those using our Free license, will be required to obtain a new software license file from DataTorrent in order to use or upgrade to version 3.9.  Existing customers can visit Upgrade License to obtain a new license when ready.

Customers who download our sandbox environment or request a free or evaluation license will automatically receive a 3.9-compatible license.


#### Security

Security hardening enhancements in 3.9.0 enable users to configure LDAP Security directly in the product. While available previously, the additional functionality in our User Interface now makes LDAP configuration even easier, saving customers time.


#### Centralized Log Aggregation

Troubleshooting just got easier with this feature that enables a centralized facility for log aggregation.
 
DataTorrent RTS 3.9 Support for 3rd Party Log Aggregation makes it even easier for customers to troubleshoot while in production with indexing, search and correlation, and a centralized facility for log aggregation. You can now integrate Elasticsearch, Logstash, Kibana (ELK) or Splunk with RTS out of the box.  

### Additional Features of RTS 3.9.0

#### Apache Beam Support

This feature is focused on making data processing easier, faster and less costly.
Apache Beam Support, aka Google DataFlow is an open source, unified model and set of language-specific SDKs for defining and executing data processing workflows and also data ingestion and integration flows, supporting EIPs and DSLs. This dataflow pipeline simplifies the mechanics of large-scale batch and streaming processing.
 

#### Basic Batch Processing Support
This feature enables data to be read and processed in batch mode.
DataTorrent’s Batch Processing Support allows customers to use their batch-oriented architectures in order to integrate with support for external scheduling (i.e. through cron, Oozie, etc.).


### Deprecated Features of RTS 3.9.0

This section lists features and capabilities that have been either removed or planned for removal in DataTorrent RTS.

* Application Data Tracker (ADT):  This feature will no longer be supported after the RTS 3.9.0 release.   ADT is determined to be not sufficiently scalable and requires execution of a separate application that is not directly built into the RTS platform.  ADT is replaced with the new Application Metrics feature.  The new Application Metrics feature available in RTS 3.9.0 provides the required scalability, is easier for developers to use, and does not require execution of a separate application.  

### Apex Features
* [APEXCORE-594] Plugin support in Apex
* [APEXCORE-579] Custom control tuple support
* [APEXCORE-563] Have a pointer to container log filename and offset in StrAM events that deliver a container or operator failure event.
* [APEXCORE-655] Support RELEASE as archetype version when creating a project
* [APEXCORE-662] Raise StramEvent for heartbeat miss

### Apex Bugs
* [APEXCORE-674] DTConfiguration utility class ValueEntry access level was changed
* [APEXCORE-663] Application restart not working.
* [APEXCORE-648] Unnecessary byte array copy in DefaultStatefulStreamCodec.toDataStatePair()

### DataTorrent RTS Bug Fixes 
#### Bugs
* [SPOI-8784] - Restarting application with originalAppId for long running app takes long time
* [SPOI-9203] - AppHub "check for updates" option says 'no updated versions' and then displays updated packages
* [SPOI-10409] - Updating app packages using "check for updates" option from AppHub gives wrong notification as undefined
* [SPOI-10786] - Checkbox cannot be unchecked in the Widget Options screen
* [SPOI-10989] - Gateway insists on using IP address for GATEWAY_CONNECT_ADDRESS
* [SPOI-11143] - Launching PiDemoAppData with optional properties throws 500 Server Error
* [SPOI-11235] - Stram Search Event Does Not Return Correct Result
* [SPOI-11239] - Prevent Page Freeze in Monitor Application Page
* [SPOI-11312] - Container log files contain "\t" characters instead of a tab
* [SPOI-11322] - AppMaster node is mentioned as "N/A" in the Failure Message
* [SPOI-11381] - Search for "heap reduction %" column in GC Log Table does not work correctly
* [SPOI-11425] - When operator fails recursively, few StartOperator/StartContainer events are grouped incorrectly
* [SPOI-11446] - Search for status column in "Logical Operators" widget does not work
* [SPOI-11482] - dtDashboard should ask for "save changes" while moving away from unsaved dashboard
* [SPOI-11485] - Cannot switch back to "Name-Value" once clicked on "JSON" on Application Configuration details page
* [SPOI-11498] - After machine reboot, DTGateway fails to get the uploaded license.
* [SPOI-11523] - physical DAG view has become unresponsive
* [SPOI-11580] - Shows the empty long description when uploading the existing app template with different version
* [SPOI-11622] - Fix semantic versioning for ALL Application Templates
* [SPOI-11784] - Getting Javascript error when viewing application summary - "Unable to render dag due to TypeError: Cannot read property 'appInstance' of undefined"
* [SPOI-11791] - Application Package upload fails with "Unexpected EOF reached" error
* [SPOI-11793] - Too many CLOSE_WAIT entries in netstat output when running applications with dashboards
* [SPOI-11805] - AppHub timestamps do not follow App Package timestamp standards
* [SPOI-11809] - Issues with Bar-Charts on Dashboard
* [SPOI-11851] - 'Reset Position' option for DAG on Application details page does not work
* [SPOI-11858] - Incorrect metrics are reported for the application
* [SPOI-11859] - Metrics are not updated in real-time for long running applications
* [SPOI-11860] - 'dt.metrics.baseDir' should default to "DFS Root Directory/metrics" instead of hard coded "datatorrent/metrics"
* [SPOI-11869] - Gateway throws FileNotFoundException for applications without any metrics data stores
* [SPOI-11870] - Issues faced while demoing app template(s)
* [SPOI-11884] - Logical and Physical Dag widgets shrink when clicking on the left and right border
* [SPOI-11889] - DTX-SNAPSHOT build packages apex core jar from different versions.
* [SPOI-11897] - Launching Database to Database Sync App gives SQL syntax error
* [SPOI-11915] - No options are shown under 'Predefined Conditions' dropdown while creating new alert
* [SPOI-11929] - Table widget should not have "Chart Axes" settings
* [SPOI-11930] - Historical App Metrics data in table widget does not get refreshed even when "Load data continuously" option is enabled
* [SPOI-11931] - Table widget issue in selecting check boxes for aggregates
* [SPOI-11932] - Misalignment in "Time Range Selection" option in table widget
* [SPOI-11933] - Time Range Selection option for Table widget returns less number of entries than that of requested
* [SPOI-11934] - Unable to list widgets for "Snapshot :: App Stats" data source
* [SPOI-11936] - Stram events doesn't scroll to bottom on page load
* [SPOI-11939] - "Field to visualize" option in Trend widget does not show any options in dropdown
* [SPOI-11959] - latency:AVG values are not displayed in table widget for Historical :: App Stats
* [SPOI-11961] - Improvement: "failureCount" for 'Historical :: Operator Stats' should be SUM and not LAST
* [SPOI-11962] - Mouseover text in stacked area chart does not change for historical data points
* [SPOI-11968] - Application search from app details page does not work
* [SPOI-11969] - All selected aggregate values for a metric are not displayed on dashboard
* [SPOI-11973] - Chart legends are not shown if number of fields to visualize is more than 12
* [SPOI-11974] - Gateway showing invalid license when server time changed
* [SPOI-11981] - Invalid license due to HDFS not ready in Sandbox.
* [SPOI-12025] - Historical data is not fetched for all the requested minute intervals
* [SPOI-12032] - Required properties are missing
* [SPOI-12046] - Gateway should exclude registering metrics datasource which are not enabled for metrics
* [SPOI-12047] - Gateway throws exceptions while getting restarted after security configuration
* [SPOI-12049] - App Metric Aggregation throws NPE when user code is called
* [SPOI-12076] - Launching application throws FileNotFoundException in gateway log for 'datatorrent/apps/${appId}/permissions.json'
* [SPOI-12079] - Too many NullPointerExceptions in dtgateway log when app connected to dashboard is killed
* [SPOI-12080] - Too many NullPointerExceptions in dtgateway log when time range for historical data is set to 'All'
* [SPOI-12081] - Table widget for historical data should resize to number of rows available for display
* [SPOI-12082] - Grouping by root cause feature is not available
* [SPOI-12086] - 'logicalOperatorName' column is blank for historical OperatorStats table widget
* [SPOI-12089] - Time Format used for displaying and querying table widget data should be same
* [SPOI-12091] - Widget data source selection not working with filtering
* [SPOI-12092] - Obfuscate public key value in RTS jar
* [SPOI-12100] - Specifying which metrics to write throws UnsupportedOperationException
* [SPOI-12102] - Snapshot schema is not refreshing
* [SPOI-12113] - Fix bullet chart
* [SPOI-12115] - Opening hdfs-line-copy app on AppHub gives FileNotFoundException in logs
* [SPOI-12116] - Retention policy for terminated apps does not work on 3.9.0
* [SPOI-12117] - Data sources get sorted only after adding first widget
* [SPOI-12124] - Gateway should not read the list datasources from metrics platform every sec
* [SPOI-12125] - Too many warning messages in gateway log with IOException for changed Blocklist
* [SPOI-12126] - Too many warning messages in gateway logs with InterruptedException while submitting Auto publish executor
* [SPOI-12127] - Issues in HDFSStoreReader and Record Data structure
* [SPOI-12129] - X-axis labels for Stacked Area chart are misaligned
* [SPOI-12140] - App level metric processor delivers empty metrics for an operator
* [SPOI-12141] - Clicking on physical operator details page for hdfs-line-copy app hangs UI
* [SPOI-12152] - Long running apps with metric data give "Too many open files" exception in apex log
* [SPOI-12153] - User should not be allowed to exit the modal when dashboard name is blank
* [SPOI-12159] - 'create new dashboard' option on app details page overwrites existing dashboard with same name
* [SPOI-12161] - Dashboards for restarted apps get stuck at original app data
* [SPOI-12164] - Configuration issues modal text overflow
* [SPOI-12167] - AppMaster fails with OutOfMemoryError for apps with metric data
* [SPOI-12170] - RTS installation fails with NoClassDefFoundError for jackson libraries
* [SPOI-12178] - ConcurrentModificationException in GroupingManager
* [SPOI-12181] - Launching from app builder provides invalid notification
* [SPOI-12186] - Properties for some of the operators are not displayed
* [SPOI-12192] - Unavailable data sources are shown while adding widgets
* [SPOI-12193] - Metrics platform does not honour "dt.write.metrics" property
* [SPOI-12199] - Metrics lib writer should include jackson libraries are runtime dependencies
* [SPOI-12216] - Clicking on logical operators link in breadcrumb does not show any list for searching
* [SPOI-12217] - Clicking on module name in logical DAG gives 404
* [SPOI-12219] - Make sure all dashboard widgets have the debug settings
* [SPOI-12223] - Filtering on data sources should be done on app name and data source name only
* [SPOI-12224] - Historical time range selection gives wrong number of records
* [SPOI-12257] - Date time selection in Control widget has issues
* [SPOI-12258] - ProductDataEnricher Operator gives “Unable to retrieve result ”
* [SPOI-12260] - Application name is altered when control widget settings are applied to more than one applications
* [SPOI-12261] - App Metrics should not expose "appUser" and "appName" keys as selectable dimensions for [HISTORICAL] data sources
* [SPOI-12268] - When "time.from" and "time.to" are specified, "time.latestNumBuckets" should NOT be required.
* [SPOI-12275] - Package Properties - value of a field (long list) is only partially visible.
* [SPOI-12276] - Metrcis plugin throws IllegalStateException
* [SPOI-12286] - Time range selection UI for Historical data is off
* [SPOI-12287] - Querying with Historical time range does not return the data to widget
* [SPOI-12290] - Geo circle widget does not honor custom fields for lon and lat
* [SPOI-12293] - Historical time range selection settings are not preserved on refresh
* [SPOI-12294] - Manually editing the value in Historical time range selection changes datetime format
* [SPOI-12297] - Show all link in notification service causes page error
* [SPOI-12302] - AppFactory - styling issues
* [SPOI-12306] - Wrong sorting order for artifacts listing
* [SPOI-12321] - Unable to view data on dashboards which after import on launch
* [SPOI-12322] - X button to delete chosen application in Import Packaged Dashboard is hidden
* [SPOI-12323] - Historical time range selection settings are not preserved
* [SPOI-12332] - AppFactory - after importing appPackage, buttons should be refreshed automatically
* [SPOI-12339] - Unable to retarget datasource in dashboard settings after adding widget

### Appendix 
#### Known Issues
* [SPOI-11483] -  For FAILED applications, container state is shown as ACTIVE. Yarn returns containers of failed application as active.   
  *Workaround* - Check for app status first.





Version: 3.8.1
------------------------------------------------------------------------------------------------------------------------

Release date: Aug 14, 2017

### Summary
This minor release primarily addresses issues related to installation of DataTorrent RTS on a Hadoop cluster configured for secure mode.

##### RTS Bug Fixes

[SPOI-11694] : Fresh system-wide install fails with "DFS Installation Location failed to load" error
[SPOI-11846] : Gateway fails when launching application in secure mode without authentication enabled
[SPOI-11848] : Installation wizard fails on the hadoop configuration screen in secure mode
[SPOI-11849] : The UI calls to retrieve properties in the wizard fail
[SPOI-12047] : Gateway throws exceptions while getting restarted after security configuration

##### Apache Apex Bug Fixes

[APEXCORE-737] : Buffer server may stop processing tuples when backpressure is enabled
[APEXCORE-745] : AppMaster does not shut down because numRequestedContainers becomes negative





Version: 3.8.0
------------------------------------------------------------------------------------------------------------------------

Release date: Apr 18, 2017

### Summary

#### Application Templates (AppHub)
Pre-built data ingestion templates speed time-to-production
 
Deploy DataTorrent RTS application templates on a Hadoop distribution either on-premises or on the cloud. As part of this release, DataTorrent is providing AWS - EMR deployment script option for each available application template. As a result, development is simplified, enabling developers to more quickly and easily unlock value for customers. DataTorrent is focused on the goals of reducing complexity and removing dependency on Hadoop deployment, and this release represents progress in that direction.   

#### Application Configurations
Simplifying customized application launches
 
Users can start with a single Application Package and create multiple Application Configurations to launch and run the applications on different environments (for instance, in test and development).  And, efficiencies can be realized across business units: one Application Package could have multiple configurations for multiple internal units.  Each Application Configuration introduces a safety feature, which ensures that only one instance of Application Configuration can run at a time.  The status whether Application Configuration is running or not, and controls to launch and stop the application instance are provided in the Application Configuration view.  This set of features improves management, adds safety, and increases transparency when managing and launching applications.

### Debugging
Improving log visualizations to speed up debugging
 
#### StrAM Event Grouping
The StrAM Events widget helps from development and operations perspectives to visualize notable events from the application launch and throughout its ongoing run.  With this release, StrAM events widgets now offers better readability by organizing these events into related groups.  For example, when multiple downstream operators are re-deployed due to a container failure. All events triggered by the system to restore normal function will be grouped under a single root event which caused the restarts.  With this improved readability, the user can quickly identify failure causes and then drill down into the logs for each event.

#### Garbage Collection Widgets
With this release, developers can more easily visualize garbage collection data trends—as opposed to sifting through logs. Three widgets are available for GC visualizations:

* Garbage collection log chart by heap.  Visualizes when memory is allocated and deallocated 
* Garbage collection log table.  List memory allocation and deallocation details
* Garbage collection log chart by duration.  Visualizes how long it takes to deallocate memory 

#### Log Tailing & Search
Users can follow the logs as they are generated (tailing) with the RTS UI Console.  In this release, users can now also perform searches even when tailing to focus on specific events and exclude the noise.
 
#### Alert Templates
Simplifying and expanding alert functionality
 
In 3.7.0, RTS introduced monitoring with alerts that a DevOps engineer could set up based on specific conditions. The 3.8.0 release continues to simplify and expand this functionality by adding:

* Nine predefined system alert templates, including cluster and application memory usage, application status, and active container count, killed container alerts, etc.
* Option to disable alerts without deleting them.
* The ability to configure custom SMTP settings for sending alert emails, instead of relying on Gateway’s local node sendmail facility.
 
#### Security
 
Security enhancement in 3.8.0 applies to RTS deployment on secure Hadoop with Kerberos enabled. User's own Kerberos credentials can now be used directly by RTS to launch applications.  It is better from a security perspective.

The previous model involved using a single system user with Kerberos credential (Hadoop impersonation)  to launch applications. That requires access to the system Kerberos credential in order to refresh tokens before they expire.  With user’s own Kerberos credential, that is no longer the case. 
 
#### Licensing
 
With the release of 3.8.0, DataTorrent is updating and simplifying its licensing policy.  What has changed?  

Starting with 3.8, the Community Edition is no longer available. We are replacing the Community Edition with Free Edition.  Community Edition limited the features available to you, such as security.   Now with Free Edition you have access to all the features and tools of RTS up to a 128GB processing limit.

Please refer to the DataTorrent website for additional details.

#### Licensing FAQ
 
_I have a Community Edition license. Is that edition still available?_  
Starting with 3.8, the Community Edition is no longer available.   You can continue to use the Community Edition with RTS version 3.7.
 
_How is license memory consumption calculated?_  
License memory consumption is the sum of all running applications as can be seen in Configuration - License Information and Monitor.
 
_What will happen when my memory consumption exceed my license limit?_  
You’ll receive a warning, which is shown for 30 minutes before most RTS features will be disabled. All existing applications will continue to run. Should you need to upgrade, you can easily contact DataTorrent for a new license.
 
_How will I know when my license is going to expire and what happens if the license expires?_  
We provide warnings at 30 days and 7 days before expiration date.  When a license expires, most RTS features will be immediately disabled. All existing applications will continue to run. You can easily contact DataTorrent for a new license.  
 
_What can I do once RTS is locked (either because my license memory has been exceeded or its expiration date has passed)?_  
Users can view running applications and enter new license details to unlock RTS. The following capabilities are still accessible:
* Configure - System Configuration is available 
* Configure - License Information is available
* Configure - Installation Wizard is available
* Monitor - Application kill, inspect and shutdown are available
* Monitor - Application Overview (shutdown and kill only) per application is available
* Monitor - Containers (kill only)
* AppHub (download only, no import)
* Learn
 
_Can I reduce the number of applications and return to compliance?_  
Yes, you can do so if you have exceeded your memory capacity, assuming that your license has not expired

_Can I reduce the memory usage of an application and bring it back to license compliance?_  
Yes, assuming that your license has not expired.  Please note that you will have to restart the application.

_I have an enterprise license for my production cluster. Can I use the Free Edition in a non- production cluster?_  
Yes. It’s worth noting that only community support is available for the Free Edition. Please visit the DataTorrent User group for RTS-related questions: https://groups.google.com/forum/#!aboutgroup/dt-users
 
For the Apache Apex mailing list and meetups information, please go to
https://apex.apache.org/community.html#mailing-lists
 
_Can I buy DataTorrent support for Free Edition?_  
Unfortunately, no. DataTorrent support is sold as part of our Enterprise Edition. If you’re seeking support, you may consider upgrading.

_Is Application Master Container memory consumption included in the calculation for processing capacity?_  
Yes. Application Master Container consumes 1 GB by default and every application has its own Application Master. If application is not running, it does not run as well. It grows based on customer application build. Memory requirements increases along with the size of logical and physical DAG. Partitioners of an operator run in AppMaster.

#### Additional Features of 3.8.0
 
##### Multiple gateway support

This allows simultaneous multiple gateway operations and increase fault tolerance due to management console failure. 

When there are multiple gateways (usually for High Availability), different developers may access them at the same time, with different or same user accounts. These activities will often result in simultaneous modification of the same resource stored in HDFS, and invalidate cache entries on each client. For example: When developer A tries to save a configuration package and developer B has edited and saved the same package, developer A will get an error. Developer A would then have to manually merge the differences. This release introduces a new file-based locking mechanism with HTTP ETag header to handle that scenario.
Known limitation: Alerts and visualization works correctly with single gateway only.

##### Retain metric selections when returning to Monitor - Physical/Logical view
Better user experience since RTS will keep what users have selected to view (e.g. metrics) as they go from one screen to another. 
 
#### DataTorrent Apex Core fork
RTS 3.8.0 is bundled with Apache Apex Core 3.5.0 plus forty feature and fixes that will be part of Apache Apex Core 3.6.0. Apex Core commits from Apr 3, 2017 will be included in RTS 3.9.0
 
##### New Feature
* [APEXCORE-579]     	Custom control tuple support
* [APEXCORE-563]     	Have a pointer to container log filename and offset in StrAM events that deliver a container or operator failure event.

##### Improvements
* [APEXCORE-676]     	Show description for DefaultProperties only when user requests it
* [APEXCORE-655]     	Support RELEASE as archetype version when creating a project
* [APEXCORE-611]     	StrAM Event Log Levels
* [APEXCORE-605]     	Suppress bootstrap compiler warning
* [APEXCORE-592]     	Returning description field in defaultProperties during apex cli call get-app-package-info
* [APEXCORE-572]     	Remove dependency on hadoop-common test.jar
* [APEXCORE-570]     	Prevent upstream operators from getting too far ahead when downstream operators are slow
* [APEXCORE-522]     	Promote singleton usage pattern for String2String, Long2String and other StringCodecs
* [APEXCORE-426]     	Support work preserving AM recovery
* [APEXCORE-294]     	Graceful application shutdown
* [APEXCORE-143]     	Graceful shutdown of test applications

##### Task
* [APEXCORE-662]     	Raise StramEvent for heartbeat miss
 
##### Dependency Upgrade
* [APEXCORE-656]     	Upgrade org.apache.httpcomponents.httpclient

##### Bug
* [APEXCORE-674]     	DTConfiguration utility class ValueEntry access level was changed
* [APEXCORE-663]     	Application restart not working.
* [APEXCORE-648]     	Unnecessary byte array copy in DefaultStatefulStreamCodec.toDataStatePair()
* [APEXCORE-645]     	StramLocalCluster does not wait for master thread termination
* [APEXCORE-644]     	get-app-package-operators with parent option does not work
* [APEXCORE-636]     	Ability to refresh tokens using user's own Kerberos credentials in a managed environment where the application is launched using an admin with impersonation
* [APEXCORE-634]     	Apex Platform unable to set unifier attributes for modules in DAG
* [APEXCORE-627]     	Unit test AtMostOnceTest intermittently fails
* [APEXCORE-624]     	Shutdown does not work because of incorrect logic in the AppMaster
* [APEXCORE-617]     	InputNodeTest intermittently fails with ConcurrentModificationException
* [APEXCORE-616]     	Application fails to start Kerberised cluster
* [APEXCORE-610]     	Avoid multiple getBytes() calls in Tuple.writeString
* [APEXCORE-608]     	Streaming Containers use stale RPC proxy after connection is closed
* [APEXCORE-598]     	Embedded mode execution does not use APPLICATION_PATH for checkpointing
* [APEXCORE-597]     	BufferServer needs to shut down all created execution services
* [APEXCORE-596]     	Committed method on operators not called when stream locality is THREAD_LOCAL
* [APEXCORE-595]     	Master incorrectly updates committedWindowId when all partitions are terminated.
* [APEXCORE-593]     	apex cli get-app-package-info could not retrieve properties defined in properties.xml
* [APEXCORE-591]     	SubscribeRequestTuple has wrong buffer size when mask is zero
* [APEXCORE-585]     	Latency should be calculated only after the first window has been complete
* [APEXCORE-583]     	Buffer Server LogicalNode should not be reused by Subscribers
* [APEXCORE-558]     	Do not use yellow color to display command strings in help output
* [APEXCORE-504]     	Possible race condition in StreamingContainerAgent.getStreamCodec()
* [APEXCORE-471]     	Requests for container allocation are not re-submitted

#### DataTorrent RTS Bug Fixes

* [SPOI-10021]	DTX Logical Operator page - BufferServerReadBytesPSMA and BufferServerWriteBytesPSMA to be removed
* [SPOI-10107]	Application service returns DAG which is null
* [SPOI-10118]	Upon launch of application, application details do not show up.
* [SPOI-10153]	Add System Properties "change" button should be warm in color
* [SPOI-10208]	Container state for failed attempt of app is shown as RUNNING
* [SPOI-10266]	"host" information is not available in appattempts API call
* [SPOI-10274]	Moving the mouse over the operator shows it as clickable but nothing happens
* [SPOI-10331]	Delete user modal gives error when clicked outside the frame
* [SPOI-10332]	Cancelling delete user action throws TypeError in developer console
* [SPOI-10335]	Jersey throwing exceptions & excessive logging when WADL is enabled
* [SPOI-10355]	Update Buttons and Text
* [SPOI-10357]	Redirect User to Login Page
* [SPOI-10363]	CheckPermission should not throw exception when auth is not enabled.
* [SPOI-10416]	dtAssemble does not show connection between operators correctly
* [SPOI-10421]	Fix oauth login
* [SPOI-10438]	Hide Top Nav Menu Dropdown When Item is Clicked
* [SPOI-10463]	Enhance Date/Time Picker for StrAM Events Date Range
* [SPOI-10587]	Implement Date/Time Picker for Dashboard Widget
* [SPOI-10588]	Change Button Label to Close During Launching
* [SPOI-10862]	Multiple containers are labelled as AppMaster after dynamic partitioning
* [SPOI-10866]	Time Range Selection Saved Settings Not Loaded Correctly
* [SPOI-10894]	dtAssemble - Inspector contents not showing up consistently
* [SPOI-10911]	determine AppMaster container by id that contains _000001 instead of by including 0 operators
* [SPOI-10963]	appInstance page - fail to show "packagedDashboard" which is included in appPackage that appInstance is launched from
* [SPOI-10970]	AppHub on gateway does not load in HTTPS
* [SPOI-10996]	Subscribers/DataListeners may not be scheduled to execute even when they have data to process
* [SPOI-10997]	BufferServer needs to shut down all created execution services
* [SPOI-11000]	Upgrade org.apache.httpcomponents.httpclient
* [SPOI-11024]	Alerts Icon Issue
* [SPOI-11057]	Restart of the apps are failing
* [SPOI-11108]	DAG View Javascript Error
* [SPOI-11127]	Enhance "lastNbytes" to behave like "tail" command
* [SPOI-11142]	Unable to launch app if another app with default APPLICATION_NAME is already running
* [SPOI-11152]	Avoid usage of Apache Apex engine core class com.datatorrent.stram.client.DTConfiguration.ValueEntry
* [SPOI-11163]	Cannot launch application from application details page
* [SPOI-11164]	"Add default properties" option under "Specify launch properties" is missing
* [SPOI-11168]	License API Does Not Return Latest State Information
* [SPOI-11179]	Update Root Cause Failure to Use Newer Object Structure
* [SPOI-11185]	Invalid license expiration message sent by Gateway
* [SPOI-11186]	AppHub should be visible if license is invalid
* [SPOI-11188]	App Packages search does not work for "format" column
* [SPOI-11190]	Toggling "system apps" option does not show ended system apps
* [SPOI-11192]	Search for "lifetime" column on Monitor screen does not work
* [SPOI-11193]	Search for "memory" column on Monitor screen does not work
* [SPOI-11194]	Search on "state" column on Monitor page is not alphabetical
* [SPOI-11197]	Search on locality/source/sinks columns under Streams widget on logical tab does not work
* [SPOI-11198]	Search for "allocated mem" and "free memory" under Containers widget does not work
* [SPOI-11199]	"download file" option for empty container log files should be disabled
* [SPOI-11200]	Search for "allocated mem" and "started time" under Containers widget  for app attempt does not work
* [SPOI-11208]	DTgateway install screen messed up
* [SPOI-11210]	On entering corrupt license file error message should be a proper one
* [SPOI-11212]	Trailing and non trailing search should have same string
* [SPOI-11213]	Unable to save SMTP configuration using gmail
* [SPOI-11214]	Launching application with ï¿¼"Enable Garbage Collection" throws 404
* [SPOI-11215]	ADMIN_NOT_CONFIGURED warning is only shown to Dev user instead of admin
* [SPOI-11220]	Fresh RTS installation fails because of blank response from "/ws/v2/config" api call
* [SPOI-11222]	StackTrace feature not available from physical tab containers widget
* [SPOI-11223]	Show "Password change" warning for dtadmin only
* [SPOI-11231]	AppHub fails to load previous package versions
* [SPOI-11234]	Show all AppHub package versions option is missing in list view
* [SPOI-11236]	Extend application-level gc.log API to take in new parameter "descendingOrder" (false/true)
* [SPOI-11237]	Angular not resolving certain dtText-wrapped expressions in Console modals
* [SPOI-11238]	AppHub Check for Updates Does Not Show In All Cases
* [SPOI-11242]	"Upload package" option on Application Packages should not be available with invalid/no license
* [SPOI-11265]	Invalid message displayed when no license is uploaded
* [SPOI-11266]	Alert notification is delayed
* [SPOI-11270]	System Alert history is empty after relogin
* [SPOI-11271]	Developer user cannot create system alert
* [SPOI-11281]	.class file generated by tuple schema manager is invalid
* [SPOI-11291]	Creating clone of JSON application gives 500 Server Error
* [SPOI-11303]	Creating clone of JSON application gives 500 Server Error (UI)
* [SPOI-11304]	App package load errors after migrating from 3.7 to 3.8
* [SPOI-11307]	Search for "lifetime" column on Monitor screen does not work
* [SPOI-11318]	Copy To Clipboard option from Failure Message modal does not work
* [SPOI-11323]	Upgrade from 3.7.0 evaluation edition to 3.8.0 retains old license
* [SPOI-11325]	Selecting KILLED applications and then disabling ended apps, shows shutdown/kill options
* [SPOI-11326]	Clean install of 3.8.0 comes with no license
* [SPOI-11327]	StramEvents are grouped incorrectly
* [SPOI-11366]	Copy to clipboard not working when viewing stram event stack trace
* [SPOI-11367]	Wrong 'uptime' value in Application Overview
* [SPOI-11368]	Log and info icons should be right aligned in stram events
* [SPOI-11369]	Socket is unsubscribed by Console when critical path is not checked
* [SPOI-11371]	"source package" column in Application Configurations table is not sortable
* [SPOI-11372]	Unable to view gc.log on UI
* [SPOI-11375]	Wrong stream locality is shown in Physical DAG widget
* [SPOI-11377]	Incorrect GC stats for logical operators if they are connected by CONTAINER_LOCAL stream
* [SPOI-11379]	Heap reduction percentage is negative for some GC events
* [SPOI-11382]	UI hangs when trying to change settings for GC Log Chart widgets
* [SPOI-11383]	Selecting a container in GC Log Chart widgets throws error in Developer console
* [SPOI-11417]	Memory usage of App Data Tracker is not counted against license
* [SPOI-11418]	Event grouping: UI should ignore groupId 0 & null
* [SPOI-11421]	Unable to use Security Configuration feature with free license
* [SPOI-11422]	Admin user should not be able to delete its own user account
* [SPOI-11424]	Show tooltip for version string in application overview widget
* [SPOI-7887]  	PUT /ws/v2/appPackages/{owner}/{packageName}/{packageVersion}/applications/{applicationName}[?errorIfExists={true/false}] should return error instead of success where there is error "Failed to load"
* [SPOI-8248]  	Packaged dashboards do not reconnect with new app instances
* [SPOI-8477]  	Upgrade License Opens in dtManage window, it should be in opened up in new window
* [SPOI-8610]  	Disable editing operator properties which are of Object type
* [SPOI-9375]  	Uptime values shown on UI are out of whack immediately after app is launched
* [SPOI-9474]  	Failed to restart DT application in MapR secure cluster
* [SPOI-9921]  	Delete widgets on default pane of physical operators needs to have warm colors
* [SPOI-9945]  	Top navigation menu is wrapping into two lines


Version: 3.7.1
------------------------------------------------------------------------------------------------------------------------

Release date: Feb 28, 2017

### Summary
This is primarily for users who install RTS in a Kerberized cluster as application fails to launch in 3.7.0. This release fixes the issue. 

Other issues that are also fixed:

* In 3.6.0, users have the option to override certain properties from the config file. This ability was missing in 3.7.0.
* Gateway fails to recognize AppDataTracker application and it continuously relaunched on a Kerberized cluster.
* On a Kerberized cluster, when the configuration parameters are specified in the `dt-site.xml` file in the user's home directory, the installation wizard does not allow the user to continue with the installation.

### Appendix

#### Bug Fixes
* [SPOI-10698] - Allow Custom Properties with Config XML file while launching an application
* [SPOI-10737] - AppDataTracker application relaunches continuously and fails in a Kerberized cluster.
* [SPOI-10932] - Installation Wizard does not allow to complete gateway configuration
* [SPOI-10773] - Application fails to run in fully enabled Kerberized mode (APEXCORE-616 - https://issues.apache.org/jira/browse/APEXCORE-616)

Version: 3.7.0
------------------------------------------------------------------------------------------------------------------------

Release date: Dec 30, 2016

### Summary
The new features on this release are functionalities that will ease debugging an application and administering application alerts in production. 

Operation related features for a Dev Ops role:  

* Manage and see a history of previous alerts so that users can be aware of potential issues before they become critical. 
* View operator ID(s) and name(s) in the dtManage-Physical-Container list table to quickly identify what operators are in each container. 
* Filter matching tuple recordings by searching across tuple recording data.

Debugging features: When trying to troubleshoot or debug a distributed system, these capabilities allow users to quickly identify problem areas and easily drill down into relevant details (i.e. logs). 

* Notify users when log files have been removed
* New Application Attempts section under Monitor. It is located along other views such as logical and physical
* New Application Master logs in Application Overview section
* New log button shortcut in Stram Events and Physical Operator section
* Show dead container logs in Running applications. That is to show history of physical operator containers and logs in the physical operator view. For each previous incarnation, there are start time, end time, link to corresponding logs, root cause with error code, and recovery window id.
* Show the same details for killed or finished application like running application view.
* Show container history as default in Physical Operator view
* New historic count field in Physical Operator view
* Get thread dump from a container. It is useful to analyze issues such as "stuck operator", and obtain statistics from the running JVM. In production environments users often don't have direct access to the machines, thus making it available through the REST API will help. 
* Option to auto tail container logs. When viewing a container log via the UI, there is an option to periodically poll for more data (i.e. "tail -f" effect).

dtAssemble

* New validate button so that user can validate DAG without having to save. 
* Remove auto save function. Save will be initiated by user only.
* Support custom JSON input for tuple schema creation. This is particularly useful when user needs to add a large number of fields. 

dtDashboard

* New gauge widget

AppHub

* Continued to refine application templates in AppHub (introduced in RTS 3.6.0).  

RTS 3.7.0 is based on Apache Apex Core 3.5.0 (released Dec 19, 2016) and Apache Apex Malhar 3.6.0 (released Dec 8, 2016).

### Apache Apex Core 3.5.0
This release upgrades the Apache Hadoop YARN dependency from 2.2 to 2.6. The community determined that current users run on versions equal or higher than 2.6 and Apex can now take advantage of more recent capabilities of YARN. The release contains a number of important bug fixes and operability improvements. 
Change log: https://github.com/apache/apex-core/blob/v3.5.0/CHANGELOG.md

### Apache Apex Malhar 3.6.0 
The release adds first iteration of SQL support via Apache Calcite. Features include SELECT, INSERT, INNER JOIN with non-empty equi join condition, WHERE clause, SCALAR functions that are implemented in Calcite, custom scalar functions. Endpoint can be file, Kafka or internal streaming port for both input and output. CSV format is implemented for both input and output. See examples for usage of the new API.

The windowed state management has been improved (WindowedOperator). There is now an option to use spillable data structures for the state storage. This enables the operator to store large states and perform efficient checkpointing.

There was also benchmarking on WindowedOperator with the spillable data structures. From the result, the community significantly improved how objects are serialized and reduced garbage collection considerably in the Managed State layer. Work is still in progress for purging state that is not needed any more and further improving the performance of Managed State that the spillable data structures depend on. More information about the windowing support can be found at http://apex.apache.org/docs/malhar/operators/windowedOperator/.

This release also adds a new, alternative Cassandra output operator (non-transactional, upsert based) and support for fixed length file format to the enrichment operator. 
Change log: https://github.com/apache/apex-malhar/blob/v3.6.0/CHANGELOG.md

### Appendix

#### Known Issues
* [SPOI-9921]	Delete widgets on default pane of physical operators needs to have warm colors
* [SPOI-9923]	Custom panes' on operator monitoring page should have character limits for titles
* [SPOI-9924]	Can not escape the "custom" pane name
* [SPOI-9925]	Limit number of custom panes
* [SPOI-9947]	JDBC Poll Input operator processes extra records when its container is killed
* [SPOI-9948]	JDBC Poll Input operator does not process new records when they are inserted while the app is processing the existing records
* [SPOI-9965]	Restarting the KILLED application with JDBC Poll Input operator plays the duplicate data
* [SPOI-10046]	Deleting a property directly creates tuple schema with remaining properties
* [SPOI-10049]	Limit the number of characters in role name 
* [SPOI-10107]	Application service returns dag which is null
* [SPOI-10151]	Add System Properties modal should validate the properties
* [SPOI-10153]	Add System Properties "change" button should be warm in color
* [SPOI-10154]	Rerun Install wizard allows extension of trial
* [SPOI-10158]	Logical/Physical plan view does not retain metric selections in drop-down
* [SPOI-10165]	Container logs, dt.log files produced by chklogs.py have HTML escapes
* [SPOI-10202]	About API call gives out information without authentication.
* [SPOI-10203]	User can set any non existent package name 
* [SPOI-10208]	Container state for failed attempt of app is shown as RUNNING
* [SPOI-10267]	If number of alerts are huge, gateway starts slowing down
* [SPOI-10274]	Moving the mouse over the operator shows it as clickable but nothing happens
* [SPOI-10275]	Alert contains an exception trace
* [SPOI-10292]	Delay in cluster metrics when the authentication is enabled
* [SPOI-10315]	"requires Apex version" information is missing for latest app packages on AppHub
* [SPOI-10332]	Canceling delete user action throws TypeError in developer console
* [SPOI-10333]	Configuration issue modal content goes out of modal and is not scrollable
* [SPOI-10334]	App restart doesn't take to new page
* [SPOI-10373]	FinishedTime/EndTime information is available only after application if killed/shutdown for CDH
* [SPOI-10379]	Enable Reporting button should have cool colors
* [SPOI-10385]	The app name field should not be editable at launch time
* [SPOI-10389]	UI Console should not allow creation of config pkg with special characters
* [SPOI-10396]	Application configuration should require save before launch
* [SPOI-10398]	UI says "An error occurred while fetching data" immediately after launching apps (intermittent)
* [SPOI-10399]	New permission do not reflect unless user logs out
* [SPOI-10401]	Deleted user can do any operations
* [SPOI-10406]	Application Configurations upload modal title should say "Application Configuration Upload"
* [SPOI-10409]	Updating app packages using "check for updates" option from AppHub gives wrong notification
* [SPOI-10410]	Deleting a property while creating tuple schema gives error in developer console

#### New Feature
* [SPOI-7720]	DT Hub shows just one version of an application
* [SPOI-10182]	dtAssemble - if there is unsaved change, keep launch button enabled which will pop up a dialog box asking save-and-launch when being clicked.
* [SPOI-8879]	Support custom JSON input for tuple schema creation
* [SPOI-9877]	Alerts History
* [SPOI-9876]	Alerts Notification
* [SPOI-9875]	Alerts Management
* [SPOI-8570]	Ability to filter tuple recording
* [SPOI-9525]	UI for dtDebug - Logs
* [SPOI-8499]	Create diagnostic tool for analyzing RM and container logs
* [SPOI-10364]	Update launch and configuration package views for simplified properties
* [SPOI-9772]	App Launch properties
* [SPOI-8764]	UI Console Configuration Packages support
* [SPOI-8611]	Support gateway configuration changes in UI
* [SPOI-10323]	Always show User profile even when license type is not enterprise

#### Improvement
* [SPOI-9785]	send GA events instead of page views for apphub page events
* [SPOI-10290]	Certification tool - RTS Installer Support for tool
* [SPOI-10179]	dtAssemble should warn about the unsaved changes when navigating away
* [SPOI-8989]	Show operator names under Physical -> Containers
* [SPOI-10163]	dtDebug utilities README should have list of requirements  
* [SPOI-9881]	appAttempt page - Containers table - "containerLogsUrl" column - change it from showing a hyperlink to "logs" button.
* [SPOI-7343]	Ability to obtain a thread dump from a container
* [SPOI-3553]	Option to auto-tail container logs
* [SPOI-9133]	Gateway restart modal and button has soothing colors
* [SPOI-9132]	Gateway restart UI button has soothing colors
* [SPOI-9105]	Refactor security validation in console (consolidate resolve:{} from many places into one place)
* [SPOI-9047]	Make Package Upload Message clickable
* [SPOI-8766]	Make Physical DAG has the same metric selection (Top dropdown, Bottom dropdown) like Logical DAG does.
* [SPOI-8645]	Logical DAG, Physical DAG - show spinner in panel instead of blank panel before graph has been rendered and displayed.
* [SPOI-8644]	Do not show graph options(Show/Hide Stream Locality, Reset Position, Top dropdown, Bottom dropdown) until graph has been rendered and displayed.
* [SPOI-7810]	dtManage: Number of failures for an operator should have 'number search' option instead of 'string search'
* [SPOI-7277]	Ability to upload configuration file during app launch ( like -conf in dtcli )
* [SPOI-9418]	ConfigPackages backend support
* [SPOI-9400]	Change licensing for RTS to be managed/displayed in GB instead of MB
* [SPOI-9086]	Add support for DIGEST enabled Hadoop web services environment
* [SPOI-7963]	Show container stack trace in dtManage
* [SPOI-10230]	containerLogsUrl shown in appattempt table can be pretty-printed

#### Task
* [SPOI-9291]	Calcite
* [SPOI-8027]	TBD: Apex Java high level API - Aggregation Part 1
* [SPOI-9769]	Tiles for apps on AppHub
* [SPOI-7965]	Productize certification tool to size RTS
* [SPOI-6350]	Gauge widget
* [SPOI-7433]	Update all relevant docs with AppHub
* [SPOI-9693]	Add Validate button in dtAssemble
* [SPOI-9688]	Remove autosave from dtAssemble
* [SPOI-9971]	Verify that alerts can only be sent by mail
* [SPOI-9364]	dtDebug Logs backend feature
* [SPOI-9695]	Launch application not using config package name
* [SPOI-9413]	Permission changes for tenancy 
* [SPOI-7966]	Provide user ability to configure security through dtManage UI (only password option)
* [SPOI-8736]	dtManage should alert user when there's a potential Hadoop config issue
* [SPOI-9575]	Create demo app
* [SPOI-9021]	State management benchmark
* [SPOI-8933]	Change Megh repository to ASL  
* [SPOI-8865]	Operator Maturity Framework - Cassandra Output
* [SPOI-8788]	Operator Maturity Framework - Enhancement of FS Output Operator
* [SPOI-9966]	App-templates misc 
* [SPOI-9774]	Update Database to HDFS app template 
* [SPOI-9234]	AppHub - App Pipeline creation with continuous iteration
* [SPOI-10063]	Create new apex core build based on master
* [SPOI-9859]	Log retrieval tool
* [SPOI-9043]	Requirements discussion on Batch Support - Definition of Batch, Scheduling of Batch DAG, State of Batch, Replay of Batch and Monitoring of Batch  
* [SPOI-8990]	DAG Editor - unable to drag a connection stream from a port if having restriction DISABLE_APP_EDIT_STRUCTURE
* [SPOI-9972]	Document DT Gateway System Alerts
* [SPOI-9970]	Modify access to allow Admin (and ONLY admin) to set alerts
* [SPOI-9653]	Plan and implement (1 item in v1)for Gateway Alerts
* [SPOI-10261]	Show friendly message when user logs files have been removed.
* [SPOI-9163]	Refactor configPackages to configurations
* [SPOI-8223]	Troubleshooting improvements in dtManage
* [SPOI-9382]	QA - Operator Maturity Framework - AbstractFileInputOperator
* [SPOI-8885]	Operator Testing (Operator Maturity Framework)
* [SPOI-9483]	Superuser role and oAuth cleanups
* [SPOI-8996]	Add authentication configuration web services spc to gateway REST api doc

#### Bug Fixes
* [SPOI-5852]	App Package page has a single word "ago" for modification time after importing pi demo
* [SPOI-6651]	Launching App from UI ignores APPLICATION_NAME attribute defined in properties.xml file
* [SPOI-7062]	dtHub UI - tags column - filter - searching from the beginning of a tag.
* [SPOI-7652]	AppDataTracker does not show up under "Choose apps to visualize" in dashboard settings
* [SPOI-8039]	UI says "An error occurred fetching data." after launching the application
* [SPOI-8349]	User should not be able to delete the default apps in ingestion-solution package
* [SPOI-8379]	Property editor for array of enum is not rendered correctly
* [SPOI-8489]	Application_Name attribute from the config file is not honored.
* [SPOI-8507]	Unable to launch an AppDataTracker application imported from dtHub
* [SPOI-8516]	DataTorrent rpm version inconsistency
* [SPOI-8522]	Unable to set roles while creating user in secure environment
* [SPOI-8523]	Users can kill the app even if privileges get revoked in secure environment 
* [SPOI-8531]	Multiple MachineData demos are available at dtHub
* [SPOI-8534]	README.html for sandbox contains references to 'malhar-users'
* [SPOI-8536]	DT RTS gateway log floods with WARN message
* [SPOI-8542]	Installation: User home directory is not created by default
* [SPOI-8566]	Tuple Recording Modal Fixes
* [SPOI-8622]	Exception in retrieving app state in certification when application has not yet reached running state
* [SPOI-8630]	"merge" configurations option for appPackages also creates new applications
* [SPOI-8717]	Updating sandbox generates errors
* [SPOI-8781]	Buffer server metrics not available for physical operator in Metrics Chart
* [SPOI-8827]	"Check for updates" option keeps loading the page when no updates are available
* [SPOI-8888]	Unable to see imported/uploaded/running applications on DT UI in SSL enable envornment 
* [SPOI-8995]	Running through the unit tests in dtx creates a residual file
* [SPOI-9007]	Kryo Exception while re-deploying the DimensionsComputationFlexibleSingleSchemaPOJO operator
* [SPOI-9127]	Wrong notification provided by dtConsole when package upload is failed
* [SPOI-9134]	Gateway restart modal has incorrect focus
* [SPOI-9135]	Gateway restart modal should be horizontally and vertically aligned
* [SPOI-9140]	dtConsole shows "Failed to parse" error when 'Monitor' tab is refreshed
* [SPOI-9152]	Application package link is not working
* [SPOI-9153]	Hyperlink not required on AppPackage tab
* [SPOI-9161]	Recordings rest API gives wrong number of totalTuples
* [SPOI-9199]	Error running application due to YARN API exception
* [SPOI-9200]	dt-site.xml has a misguiding warning
* [SPOI-9245]	*Set logging level* cannot delete the set logs
* [SPOI-9431]	Disable tenant option in TenancyFilter
* [SPOI-9496]	Use the AppPackageOwner field instead of logged in user, while working with configPackages.
* [SPOI-9503]	AbstractFileInputOperator does not honor filePatternRegexp parameter
* [SPOI-9580]	APEXMALHAR-2314 Improper functioning in partitioning of sequentialFileRead property of FSRecordReader
* [SPOI-9658]	Apps are not filtered correctly using tags column on AppHub 
* [SPOI-9660]	AppHub navigation tab is still seen as dtHub
* [SPOI-9696]	Prevent Navigation in DAG Diagram When Dragging Image Around
* [SPOI-9738]	DAG Diagram Doesn't Display Sometimes
* [SPOI-9783]	Operators stay in PENDING_DEPLOY
* [SPOI-9787]	Configuration package spelling error
* [SPOI-9790]	Recording Tuple Dialog Display Bug
* [SPOI-9791]	Fix log line format
* [SPOI-9793]	Can not start gateway after installation
* [SPOI-9794]	Can not start dtcli after installation 
* [SPOI-9908]	Container StackTrace is not functioning
* [SPOI-9914]	Container buttons should be contextual based on state
* [SPOI-9916]	Kafka Input Operator (0.9) validation app is missing from QA/test-apps repository
* [SPOI-9933]	Unable to run JDBC Poll app on latest SNAPSHOT build (3.7.0)
* [SPOI-9934]	Notification History links, when clicked modal doesn't get closed
* [SPOI-9939]	Links to log files should not be restricted to enterprise edition
* [SPOI-9941]	Gateway password security errors
* [SPOI-9974]	Unable to upload packages to the gateway
* [SPOI-9977]	Unable to launch applications using apex CLI, gives ClassNotFoundException
* [SPOI-10002]	Config Package Page Not Showing Saved Properties
* [SPOI-10016]	Config package upload fails
* [SPOI-10018]	Unnecessary check boxes present for applications under Develop tab
* [SPOI-10020]	Tuple recording feature is not working
* [SPOI-10036]	Last modified time for imported packages is always shown with additional 2 minutes.
* [SPOI-10043]	User should not be allowed to save tupleSchema with blank values
* [SPOI-10044]	Editing existing tuple schema gives TypeError
* [SPOI-10046]	Deleting a property while creating tuple schema directly creates final schema with remaining properties
* [SPOI-10047]	Tuple schema created using JSON input does not take latest JSON as input
* [SPOI-10050]	Can not record samples
* [SPOI-10051]	Delete roles modal should have warm colors
* [SPOI-10052]	Restore roles modal should have warm colors
* [SPOI-10054]	Launch application for configuration package not using local settings for application naming
* [SPOI-10056]	Malhar-angular-table temporary fix for application packages and app properties lists
* [SPOI-10065]	User is allowed to "Add System Property" with blank value
* [SPOI-10068]	dtGateway script doesn't return correct status when gateway is down
* [SPOI-10080]	Issues with containers table from UI console
* [SPOI-10110]	AppPackage get info should not be used to show the configPackage apps
* [SPOI-10143]	StramEvents API gives 500 error
* [SPOI-10147]	"cluster/metrics" API gives 500 error
* [SPOI-10148]	Add system properties has weird titles
* [SPOI-10150]	Change system properties modal button should not be in cool colors
* [SPOI-10152]	Disable appdatatracker modal buttons should be in warm color
* [SPOI-10155]	AppDataTracker can not be enabled
* [SPOI-10156]	Clicking on "ended apps" and "system apps" multiple times shows multiple shadows of "system apps"
* [SPOI-10157]	Inspect port UI hangs
* [SPOI-10159]	Can not upload application packages
* [SPOI-10181]	killed applications - (1) "AM Logs" dropdown is empty. (2) AppMaster container does not have purple label in id column. 
* [SPOI-10195]	Selected schema doesn't show the fields in the schema
* [SPOI-10200]	Button for "Delete logging level" is misaligned
* [SPOI-10209]	Link is missing for "originalTrackingUrl" field on currently running app attempt
* [SPOI-10228]	Sorting by *host* in the Physical Plan -> Containers tab is not working
* [SPOI-10229]	"attempts" tab for dtDebug is available in community edition
* [SPOI-10233]	Application attempts API does not return startedTime and finishedTime for FAILED attempts
* [SPOI-10235]	Kill Application Master container modal should have warm colors
* [SPOI-10236]	Kill selected container title has unwanted text
* [SPOI-10242]	Configuration Packages missing
* [SPOI-10257]	An error is shown for a while while launching Application Configurations
* [SPOI-10258]	Application package launch modal shows wrong "Use configuration file" option instead of "Use configuration package" 
* [SPOI-10259]	Security configuration page on console has illegible content
* [SPOI-10260]	Links in Alert configuration modal are broken
* [SPOI-10277]	Stacktrace is not fully shown in alerts detail
* [SPOI-10279]	Update app hub description.
* [SPOI-10300]	ValidateApplication & PutApplication should have CheckViewPermission instead of checkModifyPermission
* [SPOI-10343]	UI errors while displaying containers in Physical tab
* [SPOI-10350]	Jackson jars are missing from the RTS after Hadoop upgrade to 2.6 causing API failures
* [SPOI-10356]	Update Buttons Labels
* [SPOI-10358]	Schemas in ConfigPackages
* [SPOI-10359]	Schema in ConfigPackage Permission on 2 APIs should be reduced to view
* [SPOI-10361]	Upload of configPackage failed
* [SPOI-10381]	Unable to create configPackage from java application
* [SPOI-10387]	Unable to launch application configurations from "Application Configuration details" page
* [SPOI-10390]	Use Configuration Package Should be Enabled


Version: 3.6.0
------------------------------------------------------------------------------------------------------------------------

Release date: Nov 9, 2016

### Summary
DataTorrent RTS releases AppHub, a repository of application templates for various Big Data use cases. The key of this release is that RTS now have an infrastructure to distribute application templates easily. Developers can reduce the time to develop Big Data applications using templates. There are five templates in this release with many more to come. 

* HDFS Sync 
* Amazon S3 to HDFS Sync
* Kafka to HDFS Sync
* HDFS to HDFS Line Copy
* HDFS to Kafka Sync

### Appendix

#### Improvement
* [SPOI-9136] - Enforce DefaultOutputPort.emit() or Sink.put() thread affinity

#### Task
* [SPOI-9118] - Publish App Templates for Ingestion on AppHub
* [SPOI-9419] - Update AppHub API to include the markdown content
* [SPOI-9432] - Update AppHub back end to extract markdown from apa

#### Sub-task
* [SPOI-3277] - Show app master logs on UI for applications that fail at launch when we upgrade to Hadoop 2.4 or above
* [SPOI-9079] - Creation of example application for transform operator
* [SPOI-9235] - Allow users to create new configurations from Application Configurations view
* [SPOI-9240] - Create individual package view for AppHub artifacts
* [SPOI-9464] - Rename all references of AppHub on console UI to AppHub
* [SPOI-9574] - Rename title on AppHub list page
* [SPOI-9612] - Upgrade AppHub server deployment

#### Bug Fixes
* [SPOI-9140] - dtManage shows "Failed to parse" error when 'Monitor' tab is refreshed
* [SPOI-9522] - DELETE call to /ws/v2/config/properties/{name} returns 500
* [SPOI-9727] - DTINSTALL_SOURCE incorrectly assumes file name


Version 3.5.0 
------------------------------------------------------------------------------------------------------------------------
Release date: Sep 26, 2016

### Summary
DataTorrent RTS continues to deliver features that sets it apart in bringing operability in running an enterprise grade big data-in-motion platform. This particular release brought new features such as

* Allowing users to analyze "stuck operator" by obtaining stats from the running JVM (i.e. GC stats and thread dump)
* Ability to show/hide critical path in both logical and physical DAG

### Apache Apex Malhar
The other important part of going to production is a library of operators that is more than just functional. They need to be fault tolerant, partitionable, support idempotency, and dynamically scalable. The recent release of Apache Apex Malhar 3.5.0 provides new and updated operators and APIs to bring those enterprise features. 

* Windowed Operator that supports the windowing semantics outlined by Apache Beam and Google Cloud DataFlow, including the concepts of event time windows, session windows, watermarks, allowed lateness, and triggering.
* High level Java stream API now uses the aforementioned Windowed Operator to support stateful transformation with Apache Beam style windowing semantics.
* Introduction of Spillable Data Structures that make use of Managed State.
* Deduper Operator to process  whether a given record is a duplicate or not
* Enricher Operator to join a stream with a lookup source and operate on any POJO object
* HBase input operator. Improve HBasePOJOInputOperator with support for threaded read
* File Record reader module. It is useful for reading from files "line by line" in parallel and emit each line as seperate * tuple.
* JDBC Poll Input Operator

For the full release note, please go to
https://blogs.apache.org/apex/entry/apache_apex_malhar_3_5

### Appendix

#### Known Issues
* [SPOI-9232] Dedup with manage state operator marking all impression as duplicate
* [SPOI-9203]	"check for updates" option says 'no updated versions' and then displays updated packages
* [SPOI-9183]	Nested operator properties should follow order specified in the ORB on dtAssemble UI
* [SPOI-8827]	"Check for updates" option keeps loading the page when no updates are available

#### Improvement
* [SPOI-7343] - Ability to obtain a thread dump from a container
* [SPOI-8191] - Operator properties should follow order specified in the ORB on dtAssemble UI
* [SPOI-8352] - Warning message while restarting app should be changed
* [SPOI-8450] - Dedup ports connected to console should not write to log
* [SPOI-8722] - Logical DAG, Physical DAG - change "Show/Hide String Locality", "Show/Hide Critical Path" to checkbox.

#### Story
* [SPOI-6794] - HBase Input Operator
* [SPOI-6795] - Creation of Concrete Cassandra Output
* [SPOI-6932] - Module to read from HDFS Input record by record and emit it downstream
* [SPOI-7948] - JDBC Input Operator

#### Bug Fixes
* [SPOI-7836] - Trend widget fails after dashboard save/reload with PiDemo app
* [SPOI-7886] - Duplicate ports show up in the UI for POJO operators
* [SPOI-8222] - Operator/module names under Operator Library, dtAssemble canvas and right side panel should be same
* [SPOI-8552] - App Package cache throws uncaught exception when package is not found, resulting in http status 500
* [SPOI-8721] - Column labeled buffer service size is showing bytes per second
* [SPOI-9084] - Refresh tokens failing in some scenarios with a login failure message
* [SPOI-9130] - dtConsole shows no applications on monitor tab
* [SPOI-9131] - gateway REST and WebSocket APIs for cluster metrics fail to report stats

#### Task
* [SPOI-8411] - Deduper operator using Managed State
* [SPOI-9004] - Deduper Documentation

#### Sub-task
* [SPOI-8389] - ORB defaults for FileSystem related operators
* [SPOI-8390] - Added operator default values in Application.json for user visibility
* [SPOI-8410] - Kafka Input Operator Unit test failed
* [SPOI-8461] - AbstractKafkaInputOperator problems

Version 3.4.0 
------------------------------------------------------------------------------------------------------------------------
### Summary
Affinity rules provides a way to specify hints on how operators should be deployed in a Hadoop cluster. There are two types of rules: affinity and anti-affinity rules. Affinity rule indicates that the group of operators in the rule should be allocated together. Anti-affinity rule, the new feature in Apache Apex 3.4.0, indicates that the group of operators should be allocated separately.

This release also includes a lot of bug fixes. Please see appendix for full list. 

### dtManage
* User can restart a killed application from dtManage
* "Retrieve Ended Apps" button changes to "Hide Ended Apps" after dtManage retrieves killed apps.
* User can use mouse scroll to zoom in/out of physical DAG view

### Apache Apex 3.4.0
* Blacklist problem nodes from future container requests
* Support adding module to application using property file API.
* Ability to obtain a thread dump from a container
* RPC timeout is now configurable
* When an operator is blocked, it nows print out a warning instead of debug

### Appendix

#### Known Issues
* [SPOI-8518] - Support links from Dashboard to Application instance pages
* [SPOI-8516] - Datatorrent rpm version inconsistency
* [SPOI-8470] - Check for already existing app package should be done before uploading the whole package
* [SPOI-8436] - Documentation is needed on "How to use Transform operators in ingestion solution app package"
* [SPOI-8434] - Documentation is needed on "How to use Generic JDBC/PostgreSQL operators in ingestion solution app package"
* [SPOI-8433] - Documentation is needed on "How to use Enrichment operator in ingestion solution app package"
* [SPOI-8414] - Drop down is not shown for "Fields to copy" property of "POJO Enricher" unless output schema is not specified
* [SPOI-8352] - Warning message while restarting app should be changed
* [SPOI-8296] - "File Path" and "Output File Name" properties for HDFS File Output Operator should be clubbed together
* [SPOI-8295] - "Include Fields" parameter for "POJO Enricher" has misleading description
* [SPOI-8294] - Operator Class Name for "Delimited Parser" operator should not be "CSV Parser"
* [SPOI-8293] - File permission property is not working properly for HDFS File Output Operator
* [SPOI-8291] - Parameters on dtAssemble should be logically ordered
* [SPOI-8224] - Providing Field Infos value for JDBC POJO Input Operator is too complex
* [SPOI-8192] - Clicking on edit option for apps throws validation errors in activity panel
* [SPOI-8158] - Options to modify property values should be closer to the property name on dtAssemble canvas
* [SPOI-8144] - "Tuple Schemas" link at top right corner of dtAssemble canvas should open in new tab
* [SPOI-8143] - Tuple Schema page not available directly from Develop tab
* [SPOI-8133] - When stream is added in dtAssemble, user should be notified if schema is required
* [SPOI-8131] - Couple of parameters for Kafka Input Operator should have dropdown selection in dtAssemble
* [SPOI-8130] - Documentation for ingestion beta operators need to be improved
* [SPOI-8128] - Port names for operators are not intuitive when displayed on dtAssemble canvas
* [SPOI-8087] - JDBC input operator query should not require explicit ordering of column names
* [SPOI-8038] - Output file names for HDFS output should not contain timestamp and '.tmp' extension
* [SPOI-8522] - Unable to set role while creating user in a secure environment.  There is a workaround by create user with no role and then assign the role
* [SPOI-8523] - User can kill app even though privileges got revoked.  This applies to secure environment only.  
* [SPOI-8552] -	App Package cache throws uncaught exception when package is not found, resulting in http status 500
* [SPOI-8536] -	DT RTS gateway log floods with WARN message
* [SPOI-8535] -	Need to restart dtgateway for enabling password authentication in sandbox
* [SPOI-8534] -	README.html for sandbox contains references to 'malhar-users'
* [SPOI-8533] -	Importing 'Apache Apex Malhar Iteration Demo' throws error for 'property' tag in properties.xml
* [SPOI-8532] -	Importing packages from dtHub sometimes gives ZipException
* [SPOI-8531] -	Multiple MachineData demos are available at dtHub
* [SPOI-8524] -	Clicking on "generate new dashboard" first navigates to 'Learn' tab on the dtConsole
* [SPOI-8523] -	Users can kill the app even if privileges get revoked in secure environment
* [SPOI-8522] -	Unable to set roles while creating user in secure environment
* [SPOI-8519] -	Ingestion application on dtHub still shows 'requires Apex version' with "-incubating"
* [SPOI-8511] -	Gateway Websocket API leaks information while unauthorized
* [SPOI-8509] -	dtAssemble operator documentation shows '@link' markers
* [SPOI-8507] -	Unable to launch an AppDataTracker application imported from dtHub
* [SPOI-8491] -	UI mixes the order and ids of tuple recording ports
* [SPOI-8490] -	gateway issues in SSL enabled cluster
* [SPOI-8479] -	Uninstall does not work even though the install was successful previously
* [SPOI-8477] -	Upgrade License Opens in dtManage window, it should be in opened up in new window
* [SPOI-8476] -	Hadoop-common-tests library shouldn't be part of RTS build
* [SPOI-8474] -	On addition of huge role name, non-specific errors are shown
* [SPOI-8473] -	Gateway, console allows impractially longer user roles additions
* [SPOI-8472] -	Visually ugly error presentation
* [SPOI-8469] -	If Kerberos tickets are changed, you have to refresh whole UI
* [SPOI-8467] -	installation script provides incorrect information
* [SPOI-8432] -	JDBC input operator is failing with exception "fetching metadata"
* [SPOI-8424] -	Dedup does not honor the expiryPeriod when error tuple is introduced in between two valid tuples
* [SPOI-8422] -	Time properties for operators should have units mentioned for them
* [SPOI-8416] -	dtAssemble Can't change application name
* [SPOI-8365] -	HDFS sync app : Unable to sync 500 GB file
* [SPOI-8358] -	Uptime and latency values are very high exactly after app is launched
* [SPOI-8317] -	dtIngest 1.1.0 (Compiled against 3.2.0) can not be launched
* [SPOI-8222] -	Operator/module names under Operator Library, dtAssemble canvas and right side panel should be same
* [SPOI-8213] -	Application DAG is not displayed when clicked on app link
* [SPOI-8202] -	Unable to add custom properties while launching apps
* [SPOI-8197] -	Default values for "Field Infos" and "Bucket Manager" properties should be set appropriately
* [SPOI-7986] -	Gateway proxy feature is not working
* [SPOI-7934] -	Kafka-dedup-HDFS-solution: Ahead in time messages are lost from Dedup operator

#### Bug Fixes
* [SPOI-7939] -	Dynamic repartition causes application to hang
* [SPOI-8468] -	Can't assign roles for users in secure environment
* [SPOI-8464] -	"Disable Reporting" option on System Configuration page gives NullPointerException
* [SPOI-8024] -	Gateway is leaving behind dtcheck temp files in HDFS
* [SPOI-7640] -	Changing dashboard name in dashboard settings modal and then canceling does not revert dashboard name
* [SPOI-8077] -	Gateway logs NPE if an app master is misbehaving
* [SPOI-8046] -	Kerberos Cluster: Installation Wizard can not get past beyond Hadoop Configuration screen
* [SPOI-8055] -	Console references to dt-text-tooltip no longer produce a tool tip
* [SPOI-7898] -	Default JAAS support classes duplicated in dt-library
* [SPOI-7929] -	Update log4j.properties in the DTX/dist/install to set debug level for org.apache.apex
* [SPOI-7943] -	The demo applications fails due to numberOfBuckets is less than 1
* [SPOI-8092] -	Problems in launching jobs with authentication enabled on secure cluster
* [SPOI-7794] -	Monitor page not refreshing properly
* [SPOI-7889] -	Cannot read property 'hideBreadcrumbs' of undefined
* [SPOI-7856] -	Modify application packages dtHub import/update paths
* [SPOI-7907] -	Downloads of AppPackages result in corrupted files during local testing
* [SPOI-7971] -	After dynamic repartition application appears blocked

#### Apache Apex 3.4.0

#### New Feature
* [APEXCORE-10] - Enable non-affinity of operators per node (not containers)
* [APEXCORE-359] - Add clean-app-directories command to CLI to clean up data of terminated apps
* [APEXCORE-411] - Restart app without specifying app package

#### Improvement
* [APEXCORE-92] - Blacklist problem nodes from future container requests
* [APEXCORE-107] - Support adding module to application using property file API.
* [APEXCORE-304] - Ability to add jars to classpath in populateDAG
* [APEXCORE-328] - CLI tests should not rely on default maven repository or mvn being on the PATH
* [APEXCORE-330] - Ability to obtain a thread dump from a container
* [APEXCORE-358] - Make RPC timeout configurable
* [APEXCORE-380] - Idle time sleep time should increase from 0 to a configurable max value
* [APEXCORE-383] - Time to sleep while reservoirs are full should increase from 0 to a configurable max value
* [APEXCORE-384] - For smaller InlineStream port queue size use ArrayBlockingQueueReservoir as default
* [APEXCORE-399] - Need better debug information in stram web service filter initializer
* [APEXCORE-400] - Create documentation for security
* [APEXCORE-401] - Create a separate artifact for checkstyle and other common configurations
* [APEXCORE-407] - Adaptive SPIN_MILLIS for input operators
* [APEXCORE-409] - Document json application format
* [APEXCORE-419] - When operator is blocked, print out a warning instead of debug
* [APEXCORE-447] - Document: update AutoMetrics with AppDataTracker link

#### Bug
* [APEXCORE-130] - Throwing A Runtime Exception In Setup Causes The Operator To Block
* [APEXCORE-201] - Reported latency is wrong when a downstream operator is behind more than 1000 windows
* [APEXCORE-326] - Iteration causes problems when there are multiple streams between two operators
* [APEXCORE-335] - StramLocalCluster should teardown StreaminContainerManager after run is complete
* [APEXCORE-349] - Application/operator/port attributes should be returned using string codec in REST service
* [APEXCORE-350] - STRAM's REST service sometimes returns duplicate and conflicting Content-Type headers
* [APEXCORE-352] - Temp directories/files not created in temp directory specified by system property java.io.tmpdir
* [APEXCORE-353] - Buffer server may stop processing data
* [APEXCORE-355] - CLI list-*-attributes command name change
* [APEXCORE-362] - NPE in StreamingContainerManager
* [APEXCORE-363] - NPE in StreamingContainerManager
* [APEXCORE-374] - Block with positive reference count is found during buffer server purge
* [APEXCORE-375] - Container killed because of Out of Sequence tuple error.
* [APEXCORE-376] - CLI command 'dump-properties-file' does not work when connected to an app
* [APEXCORE-385] - Temp directories/files not always cleaned up when launching applications
* [APEXCORE-391] - AsyncFSStorageAgent creates tmp directory unnecessarily
* [APEXCORE-393] - Reset failure count when consecutive failed node is removed from blacklist
* [APEXCORE-397] - Allow configurability of stram web services authentication
* [APEXCORE-398] - Ack may not be delivered from buffer server to it's client
* [APEXCORE-403] - DelayOperator unit test fails intermittently
* [APEXCORE-413] - Collision between Sink.getCount() and SweepableReservoir.getCount()
* [APEXCORE-415] - Input Operator double checkpoint
* [APEXCORE-421] - Double Checkpointing May Happen In Input Node On Shutdown
* [APEXCORE-422] - Checkstyle rule related to allowSamelineParameterizedAnnotation suppression
* [APEXCORE-434] - ClassCastException when making webservice calls to STRAM in secure mode
* [APEXCORE-436] - Update log4j.properties in archetype test resources to set debug level for org.apache.apex
* [APEXCORE-439] - After dynamic repartition application appears blocked
* [APEXCORE-444] - 401 authentication errors when making webservice calls to STRAM in secure mode
* [APEXCORE-445] - Race condition in AsynFSStorageAgent.save()

#### Task
* [APEXCORE-293] - Add core and malhar documentation to project web site
* [APEXCORE-319] - Document backward compatibility guidelines
* [APEXCORE-340] - Rename dtcli script to apex
* [APEXCORE-345] - Upgrade to 0.7.0 japicmp
* [APEXCORE-381] - Upgrade async-http-client dependency version because of security issue
* [APEXCORE-410] - Upgrade to netlet 1.2.1
* [APEXCORE-423] - Fix style violations in Apex Core
* [APEXCORE-446] - Add source jar in the shaded-ning build

#### Sub-task
* [APEXCORE-254] - Introduce Abstract and Forwarding Reservoir classes
* [APEXCORE-269] - Provide concrete implementation of AbstractReservoir based on SpscArrayQueue
* [APEXCORE-365] - Buffer server handling for tuple length that exceeds data list block size
* [APEXCORE-369] - Fix timeout in AbstractReservoirTest.performanceTest
* [APEXCORE-402] - SpscArrayQueue to notify publishing thread on not full condition

Version 3.3.0 
------------------------------------------------------------------------------------------------------------------------
### Summary

#### dtHub
DataTorrent RTS allows companies to quickly build low latency real time Big Data application that can scale and fault tolerant. With the introduction of dtHub, DataTorrent now host and maintain an application distributor. You can access it through dtManage and easily install or update application without having to upgrade the whole RTS platform. Prior to dtHub, RTS installer packaged both platform and applications. In 3.3, they are decoupled with significantly reduced installer size. You can independently choose when to upgrade the platform and when to install/upgrade applications.

#### dtManage
* Troubleshooting is made easier now that user can view the containers where physical operators have lived
* RTS Community Edition user can now view container logs and set log levels via dtManage. API for runtime DAG and property change are also available
* RTS Enterprise Edition is changed from 30 days to 60 days
* When an application is killed, RTS will delete the app directory according to policy  in dt-site.xml

#### dtDasbhoard
* New widgets for the dashboard: Geo coordinates with circles, Geo regions with gradient fill and single Value 

#### dtAssemble (beta)
* Top level “Develop” takes users directly to Application Page
* Navigation changes on how user get to Tuple Schema. User goes to It is now "Edit Application" then "Tuple Schema"
* Development (breadcrumb link)

#### Documentation 
* FileSplitter: http://docs.datatorrent.com/operators/file_splitter/
* Block Reader: http://docs.datatorrent.com/operators/block_reader/

#### Apache Apex 3.3 
* Support for iterative processing. It is a building block to support machine learning
* Ability to populate DAG at application launch time
* Pre checkpoint operator callback so that it can execute a logic before the operator gets checkpointed (e.g. flush file to HDFS)
* Provide the option for operator to do checkpointing in a distribute in-memory store. It is faster than HDFS due to disk i/o latency
* Add group ID information in an applicatin package.  It is visible for application grouping in dtHub.

#### Known Issues in 3.3 
* [SPOI-7696] - Community edition (which gets activated after expired license) does not have newly added community features
* [SPOI-7471] - Temp directories/files not cleaned up in Gateway
* [SPOI-7697] - "Set Logging Levels" option on application details page does not show initial target/loglevel fields
* [SPOI-7668] - If AppDataTracker is disabled, changing the YARN queue does not restart it
* [SPOI-7652] - AppDataTracker does not show up under "Choose apps to visualize" in dashboard settings
* [SPOI-7678] - On configuration complete, summary page should populate RTS version
* [SPOI-7479] - dtHub "check for updates" option says 'no updated versions' and then displays updated packages
* [SPOI-7626] - Stacked Area Chart widget shows NaN values on Firefox

### Appendix

#### dtHub
* [SPOI-6787] - dtHub UI - explore, import, download
* [SPOI-7023] - dtHub UI - check for updates
* [SPOI-3643] - Remove import default packages from Application Packages page
* [SPOI-7451] - Add options summary to Application Packages screen
* [SPOI-6968] - Please make API return a new property that indicates whether gateway has internet access or not (for dtHub feature)
* [SPOI-7059] - add "tags" to import list

#### dtManage
* [SPOI-3549] - dtManage - Ability to view container history where physical operator has lived
* [SPOI-7382] - UI evaluation license expiration message colour update
* [SPOI-7418] - Visualize AppDataTracker data
* [SPOI-7129] - Add countdown and links to enterprise evaluation in dtManage
* [SPOI-7226] - Remove choice of community edition and enterprise evaluation in install wizard

#### dtDashboard
* [SPOI-6522] - Geo coordinates with weighted circles widget
* [SPOI-6523] - Geo regions with gradient fill widget
* [SPOI-7247] - Create dimensional single value widget
* [SPOI-7258] - Persist label changes in trend and single value widgets
* [SPOI-6023] - dtDashboard - Widgets that support dimension schema can support multi-value keys 
* [SPOI-6021] - Support tag for  snapshot server and dimension store
* [SPOI-6331] - Notify user when widget is unable to automatically load data
* [SPOI-6658] - UI says "no rows testing" when no data available to display in tables
* [SPOI-6887] - Changing choropleth map class does not remove previously selected map
* [SPOI-7246] - Change default widget colors to be websafe
* [SPOI-7257] - add tags-based dimension query settings in trend widget 

#### dtAssemble (beta)
* [SPOI-7133] - Tuple Schemas change and Develop on top navigation bar change

#### Megh
* [SPOI-7665] - Megh enhancements for TelecomDemo
* [SPOI-7230] - Add group id information to all megh app packages
* [SPOI-7251] - Add directory structure for modules in megh
* [SPOI-7693] - Add Telecom Demo To Megh

#### Docs
* [SPOI-6471] - Documentation: FileSplitter
* [SPOI-6472] - Documentation: BlockReader

#### RTS Community Edition
* [SPOI-7670] - Removing dtManage restrictions from community edition
* [SPOI-7682] - Lock down all auth/security features in community edition
* [SPOI-7130] - Community edition to have an upgrade button to Enterprise eval
* [SPOI-7243] - make all locked-feature places(e.g. Visualize link, logs button, new application button) to have the same effect of "upgrade to enterprise                " link in community edition, and to have a key icon instead of being crossing out

#### RTS Enterprise Edition
* [SPOI-7127] - Change enterprise evaluation days from 30 days to 60 days

#### Bug Fixes
* [SPOI-5622] - dtcli: Command 'show-physical-plan' fails with "Failed web service request" error
* [SPOI-6352] - Gateway's RM Proxy REST calls don't work with HA-enabled
* [SPOI-6424] - Gateway cannot determine its own local address to the cluster when RM HA is enabled
* [SPOI-6555] - Add Missing datatorrent.apppackage.classpath property to dt-demos
* [SPOI-6624] - ADT issues impacting dtingest Dashboard
* [SPOI-6674] - AbstractFileOuptutOperator refactoring and fixes
* [SPOI-6834] - fixing scope of jars in Megh
* [SPOI-6837] - Gateway has a lot of blocked threads under heavy load
* [SPOI-6886] - Selected map feature / object should be persisted
* [SPOI-6949] - Collation in BucketManager incurs a performance hit while writing to HDFS and is not an optimization
* [SPOI-6999] - Gateway stops updating application information after problems with YARN or HDFS
* [SPOI-7026] - only lists the ones that have different versions in update section
* [SPOI-7027] - fix a bug that loading is forever when there is no updates in check for updates
* [SPOI-7028] - compare version number and only list packages whose dtHub version is higher than installed version in update section
* [SPOI-7037] - support sorting, filter in string-type columns in import pkgs, update pkgs
* [SPOI-7040] - optimize visual layout of import pkgs page
* [SPOI-7042] - only shows packages that are compatible with the APEX version in check for update list
* [SPOI-7080] - remove bar chart widget that is not in use
* [SPOI-7106] - Update Megh japi version and fix the broken build because of semantic version
* [SPOI-7138] - Dimension unifier return empty results 
* [SPOI-7236] - Console build fails due to jsHint issues after updating version
* [SPOI-7293] - Post installation links no longer available on datatorrent.com
* [SPOI-7296] - gateway spills out error trying to write to /var/log/datatorrent/ in local install
* [SPOI-7297] - Local install fails in secure mode
* [SPOI-7309] - HDHT Broken and Hangs After Wall And Purge Changes
* [SPOI-7338] - After changing configuration "dt.appDataTracker.queue" (e.g. to "root.ashwin") and kill system application AppDataTracker, AppDataTracker                 incorrectly starts with the default queue ("root.dtadmin").
* [SPOI-7350] - Installation wizard final step refers to invalid developers URL
* [SPOI-7361] - get-operator-attributes fails on CDH
* [SPOI-7383] - Update invalid links in UI console info section
* [SPOI-7447] - dtHub UI - check for updates - when there is no newer version for any installed package, loading image will be hanging forever
* [SPOI-7460] - On Visualize tab, link for documentation does not work
* [SPOI-7469] - Remove "in HDHT" from System Configuration page
* [SPOI-7471] - Temp directories/files not cleaned up in Gateway
* [SPOI-7474] - "Disable App Data Tracker" option does not work
* [SPOI-7481] - Launch macros for demo apps should be removed in dtcli
* [SPOI-7482] - Cloning/deleting application under Application package does not refresh the list
* [SPOI-7498] - Verify dtingest download link change on datatorrent website
* [SPOI-7502] - Lock mishandling in App Package local cache code
* [SPOI-7503] - Changing "dt.appDataTracker.enable=true/false" using REST API calls doesn't take effect unless gateway restarts
* [SPOI-7510] - Application launch notifications no longer show up
* [SPOI-7523] - Kill only AppDataTracker whose user is the current login user when App Data Tracker queue is changed.
* [SPOI-7542] - Unable to import app package from dtHub
* [SPOI-7574] - dtcli command 'dump-properties-file' does not work when connected to an app
* [SPOI-7577] - For 3.3.0 release, RTS version is shown as 3.3.1 in System Configuration
* [SPOI-7604] - HDHT bucket meta class is obfuscated incorrectly
* [SPOI-7615] - dtHub intermittently throws error as "Failed to import" while importing multiple pkgs at the same time 
* [SPOI-7619] - specify bower link malhar-angular-dashboard to version 1.0.1
* [SPOI-7644] - Need to update installer script
* [SPOI-7679] - Unable to access newly added features for Community edition.

### Apache Apex 3.3 Change Logs
https://github.com/apache/incubator-apex-core/blob/v3.3.0-incubating/CHANGELOG.md

* [SPOI-7061] - Implement retention policy for terminated apps
* [SPOI-7492] - DT_GATEWAY_CLIENT_OPTS overrides all JVM options and there is no way to supply additional options to the default options
* [SPOI-5735] - Create local file cache for app package
* [SPOI-6981] - Move orderedOutput feature to AbstractDeduper. Rename AbstractDeduperOptimized to AbstractBloomFilterDeduper
* [SPOI-7448] - Work around the attribute bug detailed in APEXCORE-349 so that ADT still works
* [SPOI-7470] - Work around namenode NPE bug in hadoop 2.7.x to avoid throwing NPE to the user. https://issues.apache.org/jira/browse/APEXCORE-45 and https://issues.apache.org/jira/browse/HDFS-9851
* [SPOI-6381] - Support Dynamically Updating Enum Values For Keys In The Dimensions Store
* [SPOI-6545] - Allow Gateway to directly contact dtHub to install app packages


### New Feature
* [APEXCORE-3] - Ability for an operator to populate DAG at launch time
* [APEXCORE-60] - Iterative processing support
* [APEXCORE-78] - Pre-Checkpoint Operator Callback
* [APEXCORE-276] - Make App Data Push transport pluggable and configurable
* [APEXCORE-283] - Operator checkpointing in distributed in-memory store
* [APEXCORE-288] - Add group id information to apex app package

### Improvement
* [APEXCORE-40] - Semver dependencies should be in Maven Central
* [APEXCORE-162] - Enhance StramTestSupport.TestMeta API
* [APEXCORE-181] - Expose methods in StramWSFilterInitializer to get the RM webapp address
* [APEXCORE-188] - Make type graph lazy load
* [APEXCORE-199] - CLI should check for version compatibility when launching app package
* [APEXCORE-228] - Add maven 3.0.5 as prerequisites to the Apex parent pom
* [APEXCORE-229] - Upgrade checkstyle maven plugin (2.17) and checkstyle dependency (6.11.2)
* [APEXCORE-291] - Provide a way for an operator to specify its metric aggregator instance
* [APEXCORE-305] - Enable checkstyle violations logging to console during maven build

### Bug
* [APEXCORE-58] - endWindow is being called even when the operator is being undeployed
* [APEXCORE-83] - beginWindow not called on recovery
* [APEXCORE-193] - apex-app-archetype has extraneous entry that generates a warning when running it
* [APEXCORE-204] - Update checkstyle and codestyle to be the same
* [APEXCORE-211] - Brace placement after static blocks in checkstyle configuration
* [APEXCORE-263] - Checkpoint can be performed twice for same window
* [APEXCORE-274] - removeTerminatedPartition fails for Unifier operator
* [APEXCORE-275] - Two threads can try to reconnect to websocket server upon disconnection
* [APEXCORE-278] - GenericNodeTest clutters test logs with unnecessary statement
* [APEXCORE-296] - Memory leak in operator stats processing
* [APEXCORE-300] - Fix checkstyle regular expression
* [APEXCORE-303] - Launch properties not evaluated

### Task
* [APEXCORE-24] - Takes out usage of Rhino as it is GPL 2.0
* [APEXCORE-186] - Enable license check in Travis CI
* [APEXCORE-253] - Apex archetype includes dependencies which do not belong to org.apache.apex
* [APEXCORE-298] - Reduce the severity of  line length check
* [APEXCORE-301] - Add "io" as a separate import to checkstyle rules
* [APEXCORE-302] - Update NOTICE copyright year
* [APEXCORE-308] - Implement findbugs plugin reporting
* [APEXCORE-317] - Run performance benchmark for the Apex Core 3.3.0 release

### Sub-task
* [APEXCORE-104] - Expand Module DAG
* [APEXCORE-105] - Support injecting properties through xml file on modules.
* [APEXCORE-144] - Provide REST api for listing information about module.
* [APEXCORE-151] - Provide code style templates for major IDEs (Eclipse, IntelliJ and NetBeans)
* [APEXCORE-182] - Add Apache copyright to IntelliJ
* [APEXCORE-194] - Add support for ProxyPorts in Modules
* [APEXCORE-226] - Strictly enforce wrapping indentation in checkstyle
* [APEXCORE-227] - Enforce left brace placement for anonymous class on the next line
* [APEXCORE-230] - Limit line lengths to be 120
* [APEXCORE-239] - Upgrade checkstyle to 6.12 from 6.11.2
* [APEXCORE-248] - Increase wrapping indentation from 2 to 4.
* [APEXCORE-249] - Enforce class, method, constructor annotations on a separate line
* [APEXCORE-250] - Exclude DtCli from System.out checks
* [APEXCORE-267] - Fix existing checkstyle violations in api
* [APEXCORE-270] - Enforce checkstyle validations on test classes
* [APEXCORE-272] - Attributes added to operator inside Module is not preserved.
* [APEXCORE-273] - Fix existing checkstyle violations in bufferserver module
* [APEXCORE-306] - Recovery checkpoint handing in iteration loops

Version 3.2.1
------------------------------------------------------------------------------------------------------------------------

### Summary
This release bundles a few fixes and features for customers who are on 3.2.0 and not ready to upgrade to 3.3.0  

#### Improvement
* [SPOI-7900] add default role to first time login user
* [SPOI-7061] Implement retention policy for terminated apps

#### Bug Fixes
* [SPOI-6999] Gateway stops updating application information after problems with YARN or HDFS
* [SPOI-7471] Temp directories/files not cleaned up in Gateway
* [SPOI-7971] After dynamic repartition application appears blocked

#### Known Issues
* [SPOI-6999] Gateway stops updating application information after problems with YARN or HDFS
* [SPOI-7061] Implement retention policy for terminated apps
* [SPOI-7471] Temp directories/files not cleaned up in Gateway
* [SPOI-7971]After dynamic repartition application appears blocked

#### Apache Apex 
* [APEXCORE-327] - Implement proper semantic version checks in patch release branches
* [APEXCORE-358] - Make RPC timeout configurable
* [APEXCORE-410] - Upgrade to Netlet 1.2.1
* [APEXCORE-365] - Buffer server handling for tuple length that exceeds data list block size

#### Apache Apex Bug Fixes
* [APEXCORE-130] - Throwing A Runtime Exception In Setup Causes The Operator To Block
* [APEXCORE-274] - removeTerminatedPartition fails for unifier operator
* [APEXCORE-275] - Two threads can try to reconnect to websocket server upon disconnection
* [APEXCORE-350] - STRAM's REST service sometimes returns duplicate and conflicting Content-Type headers
* [APEXCORE-353] - Buffer server may stop processing data
* [APEXCORE-362] - NPE in StreamingContainerManager
* [APEXCORE-363] - NPE in StreamingContainerManager
* [APEXCORE-374] - Block with positive reference count is found during buffer server purge
* [APEXCORE-375] - Container killed because of Out of Sequence tuple error.
* [APEXCORE-385] - Temp directories/files not always cleaned up when launching applications
* [APEXCORE-391] - AsyncFSStorageAgent creates tmp directory unnecessarily
* [APEXCORE-398] - Ack may not be delivered from buffer server to it's client

Version 3.2.0
------------------------------------------------------------------------------------------------------------------------

### New Feature

* [SPOI-6351] - Add feature to REST API to get queue information from cluster

### Improvement

* [SPOI-5777] - Kafka start offset should have user option to read from latest or earliest
* [SPOI-5828] - Stackstraces should not be shown on errors
* [SPOI-6641] - Implement "forever" bucket in DimensionComputation
* [DTIN-40] - Observed unused variables in SplunkBytesInputOperator
* [DTIN-69] - Move Query Operators implementation to newer one
* [DTIN-50] - [dtIngest] add parameter "parallel readers"

### Bug

* [SPOI-5104] - Ingestion: Failed to copy data when inputs include a directory and a subdirectory
* [SPOI-5216] - FileSplitter fails with ConcurrentModificationException
* [SPOI-5571] - S3 : Copying data failed with RuntimeException saying 'Unable to move file'
* [SPOI-5809] - Kryo Exception In Stateful Stream Codec When Operator Is Killed From UI and Comes Back Up
* [SPOI-5823] - Downstream container falling behind when buffer spooling is enabled
* [SPOI-5899] - Ability to retrieve schemas from an app package
* [SPOI-6053] - Schema Generator - bool getter should be isBool and not getBool
* [SPOI-6073] - AbstractFileOutputOperator not finalizing the file after the recovery
* [SPOI-6079] - Installation wizard: 'continue' button is misplaced in last step of installation
* [SPOI-6098] - 'single run' doesnt work
* [SPOI-6202] - Sandbox 3.1 has community license instead of enterprise
* [SPOI-6204] - Sandbox 3.1 loses uploaded license after reboot
* [SPOI-6222] - HDFS recovery in sandbox causes license to degrade to community
* [SPOI-6236] - Add 1s aggregations to App Data Tracker
* [SPOI-6298] - Dimensions Store Can Become Blocked
* [SPOI-6383] - Sometimes expired query is still executed.
* [SPOI-6393] - Markdown code blocks render with invalid syntax highlights in console
* [SPOI-6446] - Merge PojoEnrichment and TupleEnrichment
* [SPOI-6505] - Exceptions from asm when uploading apps
* [SPOI-6603] - Warning messages shown on console are not completely visible
* [SPOI-6709] - Temporarily Remove Methods Which Override Their Return Type In MEGH From Semver Checks
* [SPOI-6846] - DT dashboard guide link is not working
* [SPOI-6855] - Broken links observed on summary page while DT RTS configuration 
* [SPOI-6856] - Correct docs index.html links and title
* [DTIN-51] - bandwidth option was removed during merge
* [DTIN-101] - For message-based-input to message-based-output, compression & encryption options should not be visible on config UI
* [DTIN-102] - [Ingestion UI] If kafka as output type, then Brokerlist is the configuration parameter, not zookeeper quorum
* [DTIN-112] - Message based input to FTP output fails with IOException while appending the data
* [DTIN-113] - Kafka input to kafka output fails in MessageWriter with EOFException while fetching output topic metadata
* [DTIN-123] - All files are not getting copied when bandwidth option is specified
* [DTIN-124] - For kafka to hdfs, if offset is set to 'Earliest', messages are not consumed from the beginning
* [DTIN-126] - 'Compact files' option should be disabled for message based Input type
* [DTIN-129] - StreamCorruptedException while decrypting AES/PKI encrypted file
* [DTIN-130] - Text box for 'Bandwidth to use' should accept integer values only
* [DTIN-155] - Messages are dropped when bandwidth option is enabled
* [DTIN-160] - Copying data from S3 to HDFS fails with NoSuchMethodError
* [DTIN-161] - Message based input to S3N output fails with IOException while appending the data
* [DTIN-162] - JMS messages are not fully consumed in case of JMS to kafka
* [DTIN-164] - Data values in 'Table' widget flicker when encryption is enabled
* [DTIN-165] - Data source names for dtingest should not contain 'null'
* [DTIN-174] - Append doesn't work for S3, FTP filesystems and ObjectOutputStream
* [DTIN-176] - Parallel read is not working in case of FTP and S3 as input
* [DTIN-186] - FileMerger failed with unable to merge file exception

### Task

* [SPOI-5173] - DAG validation: Attribute values Serializable
* [SPOI-5403] - Ingestion Splunk integration
* [SPOI-5801] - Make a MapR partner (datatorrent) sandbox
* [SPOI-5958] - dtView Integration for ingestion metric visualization
* [SPOI-6241] - Change in enterprise license
* [SPOI-6439] - Run benchmark for 3.2.0 release
* [SPOI-6691] - Decouple malhar version from dt version in dtingest pom dependancies
* [DTIN-20] - Accept bandwidth limit in units other than byes/s in dtingest script
* [DTIN-38] - Needs to check the Query frequency option is available for Splunk Input Operator
* [DTIN-47] - Merge code from release-1.0.1 branch to ingegration-1.1.0 branch
* [DTIN-54] - Disabling the splunk from dtIngest script
* [DTIN-71] - Integrate release 1.0.1 branch with integration-1.1.0


### Sub-task

* [SPOI-5369] - Integrate schema support in Cassandra Input/Output
* [SPOI-5437] - Create Jdbc Pojo input operator and integrate schema support in Jdbc POJO input/output
* [SPOI-5819] - Bandwidth control for file based sources
* [SPOI-5820] - Bandwidth control for message based sources
* [SPOI-5959] - Metrics for compression, encryption
* [SPOI-6337] - Expose bandwidth metrics
* [SPOI-6441] - Change console home page to be welcome screen instead of operations summary



Version 3.1.1
------------------------------------------------------------------------------------------------------------------------

### Improvement

* [SPOI-5828] - Stackstraces should not be shown on errors

### Bug

* [SPOI-5786] - AppDataTracker Custom Metric Store Deadlock
* [SPOI-6032] - App Builder should not show property from super class
* [SPOI-6049] - DimensionStoreHDHT Should always set meta data on aggregates in processEvent, even if the aggregate is received in a committed window.
* [SPOI-6073] - AbstractFileOutputOperator not finalizing the file after the recovery
* [SPOI-6090] - Ingestion: Error decrypting files for message based sources
* [SPOI-6147] - Launch issue with "Starter Application Pack"
* [SPOI-6202] - Sandbox 3.1 has community license instead of enterprise
* [SPOI-6203] - -ve Memory reported for Application Master
* [SPOI-6204] - Sandbox 3.1 loses uploaded license after reboot
* [SPOI-6222] - HDFS recovery in sandbox causes license to degrade to community
* [SPOI-6286] - App Data Tracker Number Format Exception In Idempotent Storage Manager
* [SPOI-6304] - Fix netlet dependency
* [SPOI-6313] - Work Around APEX-129
* [SPOI-6333] - RandomNumberGenerator in apex-app-archetype does not use numTuples property

### Task

* [SPOI-5755] - Gateway should show "HDFS is not up yet"
* [SPOI-6148] - Update website with release 3.1
* [SPOI-6241] - Change in enterprise license


Version 3.1.0
------------------------------------------------------------------------------------------------------------------------

### New Feature
* [SPOI-4670] - Enable message schema management in App Builder
* [SPOI-5844] - Retrieve older versions of schemas

### Improvement
* [SPOI-5611] - Simplify PubSub operators to supply Gateway connect address URI by default

### Bug
* [SPOI-4380] - MxN unifier not removed when partition is removed from physical plan.
* [SPOI-5338] - Cleanup OperatorDiscoverer class to remove reflection and use ASM
* [SPOI-5582] - Ingestion: Fails with "Unable to merge file" with FTP as destination
* [SPOI-5697] - Unable to launch ingestion app through Ingestion wizard
* [SPOI-5743] - App package import also needs to do the typegraph stuff as upload
* [SPOI-5831] - Add getter for properties for Twitter Demo
* [SPOI-5833] - Schema class not loaded during validation
* [SPOI-5841] - e2e files being added to app/index.html with gulp inject:scripts
* [SPOI-5857] - Gateway has trouble getting to STRAM until after restart
* [SPOI-5943] - chicken and egg problem for entering kerberos credentials data to dt-site.xml
* [SPOI-5946] - Port compatibility when port require schemas
* [SPOI-6002] - AppBuilder fails to load operator due to NullPointerException

### Task
* [SPOI-5307] - Mocha based tests for Gateway API calls
* [SPOI-5749] - Certify MapR sandbox
* [SPOI-5750] - Create Splunk forwarder operators
* [SPOI-5751] - Create splunk forwarder input operator
* [SPOI-5752] - Create splunk forwarder output operator
* [SPOI-5753] - Create splunk forwarder configuration specification
* [SPOI-5754] - Change node1 twitter demos settings to 5 mins in node1 conf demo conf file
* [SPOI-5755] - Gateway should show "HDFS is not up yet"
* [SPOI-5756] - Test license expiry on sandbox as part of sandbox testing
* [SPOI-5764] - Gateway to show better error messages on all 500 errors
* [SPOI-5803] - Support of custom aggregation for ADT
* [SPOI-5893] - Changes for retrieving container and operator history information

### Sub-task
* [SPOI-4946] - Handle new @useSchema and @description property metadata in UI
* [SPOI-4980] - Schema Management in the UI
* [SPOI-5505] - handle Object-to-Object port compatibility with and without schema
* [SPOI-5506] - handle Object-to-Pojo port compat with schema
* [SPOI-5513] - handle port compatibility with generic type ports
* [SPOI-5747] - Automatically generate new eval license when sandbox starts up


Version 3.0.0
------------------------------------------------------------------------------------------------------------------------

### Sub-task
* [SPOI-1901] - Dynamic property changes lost on AM restart 
* [SPOI-4820] - Add an api call to retrieve all the application, operator and port attributes available for the app-package
* [SPOI-4891] - Example for schema meta data and property doclet tag
* [SPOI-4968] - Capture @useSchema and @description doclet tags from docblocks
* [SPOI-4972] - Design Schema API for managing schemas
* [SPOI-4973] - Create a Schema resource which will contain schema calls
* [SPOI-4987] - Generate pojo class using schema provided in json
* [SPOI-4999] - Implement the rest call to save schema on the backend
* [SPOI-5211] - Support custom visualization link
* [SPOI-5237] - Type of attributes are wrong when it is an inner class or enum
* [SPOI-5357] - LogicalNode may swallow END_STREAM message in catchUp
* [SPOI-5361] - Button for dt.phoneHome.enable property on system config page
* [SPOI-5527] - Implement Queue Option


### Bug
* [SPOI-4321] - Datatorrent Core Trigger Jenkings Job hangs
* [SPOI-4633] - Resolve type variable across the type hierarchy 
* [SPOI-4789] - Time calculated from window Id using WindowGenerator.getMillis is incorrect at times 
* [SPOI-4884] - Intermittent failure for CustomMetricTest
* [SPOI-4896] - Kafka operator stop consuming from kafka cluster after it is restarted.
* [SPOI-4941] - For kafka operator in app builder certain properties need to be set twice
* [SPOI-5006] - If incompatible change made in platform, we need to recompute the typegraph automatically
* [SPOI-5074] - Code/fix code that leads to classloader leaks in Gateway
* [SPOI-5087] - Bucket ID Tagger In app data tracker has very high latency
* [SPOI-5323] - Malhar operators are not packaged with distribution for 3.0
* [SPOI-5359] - License Type, License ID, and Features should not just be empty on LicenseInfo page
* [SPOI-5360] - When license upload fails with no message, install wizard should not have an unaddressed colon
* [SPOI-5379] - NoClassDefFoundError due to indirect reference to dt-common classes
* [SPOI-5385] - No error message is returned when DTCli gets an NPE
* [SPOI-5389] - Support for RM and HDFS delegation token renewal in secure HA environments
* [SPOI-5433] - Asm code not working for jdk 1.8
* [SPOI-5469] - Datatorrent DTX trigger Jenkins Job fails on timeout
* [SPOI-5472] - Undeploy heartbeat requests are not processes if container is idle
* [SPOI-5484] - Ingestion FTP as output does not work with vsftpd
* [SPOI-5497] - Could not open pi demo in 3.0.0 RC2
* [SPOI-5498] - Typegraph exception with 3.0.0 RC2
* [SPOI-5500] - Saving an app whose streams have an assigned schema (not handwritten java class) fails with 404
* [SPOI-5504] - Make temporary file names unique to avoid lease expiry
* [SPOI-5530] - Failed to edit pidemo JSON based application
* [SPOI-5536] - App jar is missing from typegraph
* [SPOI-5552] - Non-concrete classes being returned with assignableClasses call
* [SPOI-5562] - Boolean Operator Property Values Are Blank In the Operator Properties Table
* [SPOI-5569] - Launching AdsDimensionsDemoGeneric fails with ClassNotFoundException 
* [SPOI-5577] - Sometimes CustomMetrics Store Returns No Data When There is Data
* [SPOI-5578] - Sometimes Custom Metrics Data Source Is Not Accessible From Widgets
* [SPOI-5582] - Ingestion: Fails with "Unable to merge file" with FTP as destination
* [SPOI-5583] - DFS root directory check is failing on MapR cluster
* [SPOI-5593] - App Builder search tooltip
* [SPOI-5597] - Bad log level WARNING in UI
* [SPOI-5604] - Pressing "Enter" in newDashboardModal closes the modal
* [SPOI-5607] - Sales Enrichment operator needs to be recovered and added to Sales Dimensions demo
* [SPOI-5612] - AppBuilder can not deserialize instance of java.net.URI with PubSubWebSocketAppData operators
* [SPOI-5627] - error message from install script from 3.0.0-RC4 
* [SPOI-5628] - Update dt-site of sandbox for new Sales demo enrichment operator
* [SPOI-5629] - Data visualization links broken with APPLICATION_DATA_LINK 
* [SPOI-5632] - If there are no uncategorized operators, dont show an uncategorized group
* [SPOI-5636] - dtcp is not getting packaged in installation (RC4)
* [SPOI-5637] - Allatori Configuration errors in ingestion pom.xml
* [SPOI-5640] - dtcp: When invalid value is provided for scan interval no error is thrown by dtcp, just exits out
* [SPOI-5643] - When An Application Is Restarted Under A Different User Name Custom Metrics Data is Not Saved.
* [SPOI-5644] - isChar validation should strip \u000 character
* [SPOI-5646] - Megh demos is failing release build
* [SPOI-5647] - launchPkgApplicationDropdown tries to push an alert to scope.alerts, which is undefined
* [SPOI-5653] - When Gateway Restarts App Data Tracker It Should Do It Using HA Mode
* [SPOI-5655] - If gateway fails to launch (e.g., port 9090 is in use), installer should inform user
* [SPOI-5656] - Update Bucket ID Tagger To use only user name for determining bucket Ids
* [SPOI-5661] - Set default store in HDHTReader
* [SPOI-5662] - Improve defaults of Enrichment Operator In Sales Demo
* [SPOI-5664] - Omit Aggregator Registry From UI
* [SPOI-5672] - App Data Tracker Compliation is failing
* [SPOI-5673] - Unable to launch ingestion app with JMS as input source 
* [SPOI-5675] - Kafka keys population error
* [SPOI-5676] - Fix API doc generation
* [SPOI-5685] - Complete App Builder category and property name fixes
* [SPOI-5688] - Correct interactive demo tutorials available in the Learn section
* [SPOI-5689] - Installer produces error message about removing docs directory
* [SPOI-5690] - Images missing from lean section tutorials after installing release build
* [SPOI-5693] - Console does not upload default DT application packages
* [SPOI-5697] - Unable to launch ingestion app through Ingestion wizard
* [SPOI-5704] - App package references in docs
* [SPOI-5705] - Build version incorrect
* [SPOI-5706] - api and user docs not viewable through gateway
* [SPOI-5707] - Packaging utilities jar in Ingestion
* [SPOI-5708] - Update netlet dependency to release for 3.0
* [SPOI-5712] - Unable to launch dtingest app using dtingest command line utility but able to launch via UI


### Improvement
* [SPOI-4513] - Expose app data tracker stats as "pseudo-datasource" for each application
* [SPOI-4889] - Make BucketIdTagger fault tolerant
* [SPOI-5320] - License URL should open in new window 
* [SPOI-5494] - Support "queue" query parameters from launch app modal
* [SPOI-5535] - Console should validate duplicate app name in the same app package
* [SPOI-5548] - Check compaction keys from UI
* [SPOI-5603] - Add syntax highlighting to Markdown code blocks
* [SPOI-5611] - Simplify PubSub operators to supply Gateway connect address URI by default
* [SPOI-5623] - License upgrade link should open in separate tab
* [SPOI-5633] - Improve markdown content display styles
* [SPOI-5657] - Redirect to welcome screen of the Learn section after install
* [SPOI-5694] - Ingestion default app-config should populate meaningful defaults


### New Feature
* [SPOI-4672] - Support for secure HA environments
* [SPOI-5288] - Add "launch" button to each item in the list of app packages
* [SPOI-5304] - Support ingestion install mode
* [SPOI-5313] - Obfuscate ADT in the distribution build
* [SPOI-5561] - Markdown documentation support in the Console


### Task
* [SPOI-4228] - The location of App Data Tracker from installation and from devel mode
* [SPOI-4658] - App Data Tracker Technical Doc
* [SPOI-4879] - Hide operators that have no input ports from App builder
* [SPOI-4983] - Installer for Ingestion app
* [SPOI-4984] - Obfuscate ingestion jar
* [SPOI-5029] - Move new x-java dependencies in appDataFramework branch to core
* [SPOI-5032] - Review comparison for appDataFramework pull request to the master
* [SPOI-5050] - Licensing-related changes to the UI for 3.0
* [SPOI-5255] - Support enhancements to uiTypes
* [SPOI-5314] - Include obfuscated App Data Tracker in the install bundle
* [SPOI-5370] - Megh obfuscation
* [SPOI-5502] - Allatori obfuscates operator class names even config has keep-name on class * implements com.datatorrent.api.Operator
* [SPOI-5555] - [dtcp] set default app package for ingestion
* [SPOI-5574] - Update installer README
* [SPOI-5608] - Docs for backward compatibility in 3.0 
* [SPOI-5610] - Add testing to Markdown support models, pages, directives
* [SPOI-5621] - Include Ingestion utilities in DT installer
* [SPOI-5624] - [Ingestion] Hide message output destination when input is file source
* [SPOI-5635] - Changing product name to dtIngest
* [SPOI-5638] - Post ingestion packge to central DT maven repository
* [SPOI-5639] - App Data Tracker Release Job
* [SPOI-5645] - support "short" primitive type in app builder
* [SPOI-5658] - Dummy ticket for Apex-17 - Change CustomMetric annotation to AutoMetric and enhancements


### Bug
* [MLHR-1726] - Bug in PojoUtils
* [MLHR-1742] - Create a wrapper method in POJOUtils that returns the appropriate getter for primitives
* [MLHR-1752] - PojoUtils create/constructSetter does not handle boxing/unboxing
* [MLHR-1756] - Exclude hadoop-common and other hadoop libraries from application
* [MLHR-1789] - Complete Category and property name fixes


### Improvement
* [MLHR-1725] - Add Support for Setters to PojoUtils
* [MLHR-1757] - change scope of dt-engine in maven build
