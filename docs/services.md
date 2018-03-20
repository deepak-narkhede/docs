# Overview

Services represent global, shared, and automatically managed processes.  These processes are automatically installed, managed, and monitored by the Gateway, and can be an instance of an Apex application or a Docker container.  Applications can rely on any number of services as their dependencies, and all the required services will be automatically installed and launched as needed when the application starts.

For example when you launch the [Omni Channel Fraud Prevention](http://docs.datatorrent.com/omni_channel_fraud_app/) application for the first time, the following services are automatically installed and launched along with it:

* Online Analytics Service
* Drools Workbench
* OAS Dashboards

Services required by the applications can be defined via JSON service descriptors placed in an application package during the application development.  Users can also add new services and manage existing services via the UI Console using the Services Management or Application Configuration pages.  

Below are three services that are packaged with DT premium applications:

* [Online Analytics Service](oas.md) - This service provides analytic processing of event streams from various source applications in real-time. This is an Apex application backed by a custom Druid implementation which provides fast in-memory OLAP query support.
* [CEP Workbench](cep_workbench.md) - This service is a web application and repository which is used to manage Drools assets. It provides the capability to quickly create, edit, and version Drools rules via a web UI, which can in turn be deployed to applications which implement CEP Engine, such as [Omni Channel Fraud Prevention](http://docs.datatorrent.com/omni_channel_fraud_app/) application.
* [OAS Dashboards](oas_dashboards.md) - This service, based on Apache Supersert, provides a rich set of data visualizations with an easy-to-use interface for exploring and visualizing data available via [OAS](oas.md) or other data sources.

# Managing Services

You can view and manage installed services using the **Services** page. To navigate to the **Services** page, follow the steps below:

1. Click the Settings ![](images/services/cog-wheel.png) icon located on the upper most right section of the DT RTS console.
2. Select the **Services** menu item from the dropdown menu.  The **Services** page is displayed with the list of installed services.

Sample services list:

![](images/services/services-list.png)

Below are the descriptions of the services table columns:

| Column | Description |
| ---- | ----------- |
| name | The service name, which can be clicked to navigate to the service instance page. |
| enabled | The service status should be `RUNNING` if this field is `true` (checked).<br/>The status should be `STOPPED` if this field is `false`.<br/>The Gateway monitors all **enabled** services to make sure they are running.  |
| status | The state of the service. |
| started | The duration since the service was started. |
| uptime | Number of hours the service has been running. |
| type | The service type. Possible values are `docker` and `apex`. |
| active apps | The active Apex applications that depend on the service. |
| memory | Memory allocated by the service. |

<a name="all-service-status"></a>
Below are possible service status:

| Status | Description |
| ------ | ----------- |
| INSTALLING | The service is being installed.  This status is typically shown during service download or installation. |
| STOPPED | The service is installed, but not running. |
| STARTING | The service is installed and is starting up. |
| RUNNING | The service is installed and running. |
| STOPPING | The service is being stopped. |
| REMOVING | The service is being deleted. Once deleted, it should disappear from the table on the **Services** page. |
| FAILED | The service is installed but failed to start or ended unexpectedly. |

The following actions can be performed on this page:

* [Creating new service](#creating-new-service)
* [Importing packaged services](#importing-packaged-service)
* [Viewing service instance](#viewing-service-instance)
* [Starting services](#starting-services)
* [Stopping services](#stopping-services)
* [Cloning a service](#cloning-a-service)
* [Deleting services](#deleting-services)

## Creating New Service

To create a new service, follow the steps below:

1. Navigate to the **Services** page.
2. Click the **create new** button. The **Create Service** dialog is shown.
3. Enter data in the applicable entries.  See sample screen captures below for reference.

Sample Docker create service dialog.

![](images/services/create-service-docker.png)

Sample Apex create service dialog.

![](images/services/create-service-apex.png)

**Create Service Dialog Fields**

| Item | Description |
| ----- | ----------- |
| Name | Enter the name of the service. This must be a unique name. |
| Description | Enter a description about the service.<br/>_(Optional)_ |
| Type | Select a service type.<br/>`docker` - Docker container as a service.<br/>`apex` - Apex application as a service. |
| Source URL | Specify the location of the Docker image or the Apex application image. |
| Docker Run| Enter the Docker command arguments to be used when the Docker service container starts.<br/>**Note**: This entry will only be shown if the service type is `docker`.<br/>_(Optional)_ |
| Docker Exec | Execute the shell command inside the docker container after it is launched.<br/>**Note**: This entry will only be shown if the service type is `docker`.<br/>_(Optional)_ |
| Apex App Name | Enter the application name that exists in the Apex APA image which will be launched when the service starts.<br/>**Note**: This entry will only be shown if the service type is `apex`. |
| Apex Launch Properties | Enter Apex launch properties. Click the **Add** button to add additional properties. Enter the names and corresponding values.<br/>**Note**: This entry will only be shown if the service type is `apex`.<br/>_(Optional)_ |
| Proxy Address | Port or host:port to which the Gateway proxy path forwards requests.<br/>_(Optional)_ |
| Proxy Request Headers | Enter headers to be added to the request made by the Gateway to the proxy destination. Click the **Add** button to add additional headers.<br/>_(Optional)_ |
| Proxy Response Replacements | Enter the response replacement definitions which represents the text replacement processing to be performed on the response body by the Gateway proxy. Click the **Add** button to add additional replacement definitions.<br/>_(Optional)_ |

4. Click the **Create** button to create the new service and install it.

For more details and examples regarding the items in the table above, see the [Services Property](#services-property) section below.

## Importing Packaged Service

Packaged services are pre-defined services included in application packages that are uploaded in the cluster.  These services can be installed as-is or with different settings.

To install a packaged service, follow the steps below:

1. Navigate to the **Services** page.
2. Click the **import** button. The **Import from Packaged Services** page is displayed with the list of available packaged services in application packages.
3. Click the **import** button of a service to be imported. An **Import Packaged Service** dialog is shown.
4. Edit the applicable entries and click the **Import** button to install the service.

## Viewing Service Instance

1. Navigate to the **Services** page.
2. Click the service name to navigate to the service instance page.

Sample service instance page:

![](images/services/service-instance-view.png)

The following sections can be found on the **Service Instance** page:

**Service Status and Actions**

This section shows the **service name**, **type**, **status**, **uptime** and **currently allocated memory** if the service is running.  It also contains the applicable actionable buttons such as **view app**, **start**, **stop**, **edit**, **copy** and **delete**.  Note that the **view app** button is only visible if the service type is `apex` and the service is running.

**Service Details**

This table shows the configuration of the service.  It may also contain the Apex application ID if the service type is `apex` and the service is running and some metadata keys/values if the service provides such data.  The sample service instance above shows `QueryIP` and `QueryPort` with values of `192.168.2.135` and `46620`, respectively.  These metadata keys/values are provided by the service at run time.  This section will also show explicit metadata variables defined in the service descriptor.

**Proxy URL**

This section shows the proxy URL that users can use to access data provided by the service through the Gateway proxy.  The Gateway applies proxy request headers and proxy replace string settings when processing this URL requests.

**Dependent Active Apps**

This section shows the Apex applications that depend on this service.  The table will show the application ID, application name, application status and the application running username.  Users can click on the application ID or name to navigate to the running Apex application instance page.

#### Edit Service

Services are automatically installed when an associated application is launched. However, you can change the settings of the services based on your requirements and restart the services.

**Note**: Only **STOPPED** services can be edited.

To edit a service, follow the steps below:

1. Navigate to the **Services** page.
2. Select a service from the services list and click the **Edit** button. The **Edit Service** dialog is shown.
3. Edit the settings and click the **Save** button. The new settings are saved and will be applied when the service is restarted.

**Note**: You can also edit a service on the service instance page.

## Starting Services

To start a service, follow the steps below:

1. Navigate to the **Services** page.
2. Select a service from the services list and click the **Start** button.

**Note**: You can also start a service on the service instance page.

## Stopping Services

To stop a service, follow the steps below:

1. Navigate to the **Services** page.
2. Select a service from the services list and click the **Stop** button. A **Stop Service** modal is shown.
3. Click the **Stop** button to stop the service.

**Note**: You can also stop a service on the service instance page.

## Cloning a Service

You can clone, edit, and save a service configuration as a new service.

To clone a service, follow the steps below:

1. Navigate to the **Services** page.
2. Select a service to clone and click the **copy** button.  The **Create Service** dialog is shown with the selected service configurations pre-filled.
3. Change the service name and applicable settings.<br/>Service name must be different from the original service name because it must be unique.
4. Click the **Create** button to create the new service.<br/>If the original service is enabled, then the new service will be installed and started.<br/>If the original service isn't enabled, then the new service will be installed, but not started.

**Note**: You can also clone a service on the service instance page.

## Deleting Services

Services can be deleted for an application from the Services management page.

To stop or start the services, follow the steps below:

1. Navigate to the **Services** page.
2. Select a service from the services list and click the **delete** button.  The delete service confirmation modal is shown.
3. Click the **Delete** button to confirm that you want to delete the service.

**Note**: You can also delete a service on the service instance page.

# Configuring Docker

Some applications require services which are run in the Docker containers. For such services, you must install Docker (Version 1.9.1 or greater) on your system. Services can run in Docker installed on a remote system if Docker isn't installed on the system where the Gateway is running.

The Docker version is automatically detected during the DT RTS installation process. That Docker version is shown in the Docker section of the Installation Wizard - Configuration. You can optionally configure the services to run in Docker installed on a remote system.

**Warning: If the system does not have a compatible version of Docker and the remote Docker host isn't configured, then Docker services will not work.**

To configure the remote Docker host, follow the steps below:

1. On the DT RTS console, click the settings icon located on the upper most right section of the page and select **System Configuration**. The **System Configuration** page is displayed.
2. Click the **Installation Wizard** button.
3. On the **Welcome** page, click the **Continue** button.
4. On the **Configuration** page, go to the **Docker** section and set the following:

    | Field | Description |
    | ----- | ----------- |
    | Docker host | Enter the remote Docker host URL.<br/>For example: `unix:///var/run/docker.sock` or `http://127.0.0.1:2376`<br/>_(Optional)_ |

5. Click **Continue** and complete the Installation wizard.

# Packaging Services

Services and dependent applications can be defined and included in the application package.  This service descriptor is defined in the **services.json** file.  This file is located in the **/src/main/resources/resources** directory of your Apex project.  When the project is built and packaged as an APA file, the **services.json** file is placed in the **/resources** directory inside the APA file.

#### Sample Services File

The following is a sample **services.json** file:

<pre><code>{
  "services": [
    {
      "name": "superset-service",
      "description": "Superset application dashboard service.",
      "type": "docker",
      "srcUrl": "johnsmith/superset:1.0.0",
      "docker": {
        "run": "--add-host cluster:<CLUSTER_IP> -e PORT=9090 -p 28088:8088"
      },
      "proxy": {
        "address": "localhost:28088",
        "followRedirect": false,
        "requestHeaders": {
          "X_PROXY_REMOTE_USER": "admin"
        },
        "replaceStrings": [
          {
            "matchMime": ".*text/html.*",
            "matchUrl": ".*",
            "matchText": "href=\"/",
            "replaceText": "href=\"/proxy/services/superset/"
          },
          {
            "matchMime": ".*application/javascript.*",
            "matchUrl": ".*.entry.js",
            "matchText": "\"/superset/",
            "replaceText": "\"/proxy/services/superset/superset/"
          }
        ]
      }
    },
    {
      "name": "drools-workbench",
      "description": "Drools Workbench is the web application and repository to govern Drools assets.",
      "type": "docker",
      "srcUrl": "jshnsmith/drools-workbench:1.0.0",
      "docker": {
        "run": "-d -p 18080:8080 -p 18001:8001"
      },
      "proxy": {
        "address": "localhost:18080/drools-wb",
        "followRedirect": false
      }
    },
    {
      "name": "online-analytics-service",
      "description": "Online Analytics Service.",
      "type": "apex",
      "proxy": {
        "address": "${QueryIP}:${QueryPort}"
      },
      "srcUrl": "${dt.gateway.artifactHubLocation}/ws/v1/artifacts/dt-apoxi-oas/1.4.0/download",
      "apex": {
        "appName": "Online-Analytics-Service",
        "launchArgs": {
          "apex.app-param.kafkaBrokers": "localhost:9092",
          "apex.app-param.kafkaTopic": "analytics"
        }
      }
    }
  ],
  "applications": [
    {
      "name": "MyApexApplication",
      "requiredServices": [
        {
          "name": "online-analytics-service",
          "requiredBeforeLaunch": "true"
        },
        {
          "name": "superset-fpa"
        },
        {
          "name": "drools-workbench"
        }
      ]
    }
  ]
}</code></pre>

The **services.json** file contains two root level properties:

* [Services Property](#services-property)
* [Applications Property](#applications-property)

## Services Property

Service descriptors are defined in the `services` property.  The services property is an array of JSON objects where each object defines a service.

### Service Descriptor Parameters

| Item | Type | Description |
| ---- | ---- | ----------- |
| name | string | Service name, which should be globally unique and only include characters that HDFS file name friendly.<br/>For example: `superset-fpa`, `druid_workbench`, etc. |
| description | string | Short description about the service.<br/>_(Optional)_ |
| type | string | Services type must be one of the following values:<br/>`docker` - service is a Docker container.<br/>`apex` - service is an Apex application. |
| srcUrl | string | Specify the name of the Docker image if the service is Docker based or specify the path of the Apex application package if the service is Apex based.<br/><br/>An example of a Docker srcUrl: `datatorrent/superset-fpa:1.4.0`<br/><br/>An example of an Apex srcUrl:<br/>`${.dt.gateway.artifactHubLocation}/ws/v1/artifacts/com.datatorrent/`<br/>`dt-apoxi-oas/1.4.0-SNAPSHOT/download`<br/><br/>Another example of an Apex URL: `file:///path/to/apppackage.apa` |
| docker | json object | Specify the Docker details for he service.<br/>For example:<pre><code>{<br/>  "run": "-d -p 18080:8080",<br/>  "exec": "nginx -t -c ~/mynginx.conf"<br/>}</code></pre>**Note**: This property is required if the service type is `docker`.<br/>_(Optional)_ |
| apex | json object | Specify the Apex details for the service.<br/>For example:<pre><code>{<br/>  "appName": "OAS",<br/>  "launchArgs": {<br/>    ...<br/>  }<br/>}</code></pre>**Note**: This property is required if the service type is `apex`.<br/>_(Optional)_ |
| proxy | json object | Specify the proxy settings for the service.<br/>For example:<pre><code>{<br/>  "address": "localhost",<br/>  "followRedirect": false,<br/>  "requestHeaders": {<br/>   ...<br/>  },<br/>  "replaceString": [<br/>    ...<br/>  ]<br/>}</code></pre>_(Optional)_ |
| metadata | json object | Specify explicit metadata to use in the service.<br/>For example: <pre><code>{<br/>  "ipaddr" : "localhost",<br/>  "port" : 8080<br/>}</code></pre>With this metadata defined in the service, we can reference them in the service configuration as `${superset-fpa.ipaddr}` and `${superset-fpa.port}`, assuming the service name is `superset-fpa`.<br/>_(Optional)_ |

### Docker Details

| Item | Type | Description |
| ---- | ---- | ----------- | 
| run | string | Specify the Docker run command details.<br/>For example: `--add-host druid_cluster:<GATEWAY_IP> -e OAS=fpa-online-analytics-service -e PORT=9090 -p 28088:8088` |
| exec | string | Specify the Docker shell command to execute after the Docker service is started.<br/>For example: `nginx -t -c ~/mynginx.conf` |

### Apex Details

| Item | Type | Description |
| ---- | ---- | ----------- | 
| appName | string | Specify the Apex application in the APA to launch.<br/>For example: `OA` |
| launchArgs | json object | Arguments to use during the launching of the Apex service.<br/>For example:<pre><code>{</br>  "kafkaBrokers": "localhost:9092",</br>  "kafkaTopic": "analytics"<br/>}</code></pre>_(Optional)_ |

### Proxy Settings

| Item | Type | Description |
| ---- | ---- | ----------- | 
| address | string | Host:port to which the proxy path forwards to.<br/>For example: `localhost:28088`<br/>_(Optional)_ |
| followRedirect | boolean | If this property is true, then the Gateway proxy will perform redirect when it sees the HTTP status code 302 in the HTTP response header from the service.  Therefore, the browser surfing the service proxy URL will never encounter the hTTP status code 302.<br/>**Warning**: Omitting this property or setting it to true may cause a maximum redirect error in the Gateway proxy.<br/>_(Optional, default: true)_ |
| requestHeaders | json object | Headers to be added to the request made by the Gateway to the proxy destination.<br/>For example:<pre><code>{<br/>  "X\_PROXY\_REMOTE\_USER": "dtadmin"<br/>}</code></pre>_(Optional)_ |
| replaceStrings | array of json object | Definitions that represents text replacement processing to be performed on the response body by the Gateway proxy.  Regular expression is supported as described in the [Java Regex Pattern Class](https://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html), which includes capturing group and back references.<pre><code>[<br/>  {<br/>    "matchMime": "text/html",<br/>    "matchUrl": ".*.html",<br/>    "matchText": "\"/static/",<br/>    "replaceText": "\"/proxy/services/superset/static/"<br/>  }</br>  ...</br>]</code></pre>_(Optional)_ |

### Replace Strings Details

| Item | Type | Description |
| ---- | ---- | ----------- | 
| matchMime | string | Process only for this mime-type.<br/>For example: `text/html`<br/>_(Optional)_ |
| matchUrl | string | Process only when the URL matches this regular expression pattern.<br/>For example: `acct*`<br/>_(Optional)_ |
| matchText | string | Text to be matched in the response body.<br/>For example: `href=\"/static/` |
| replaceText | string | Text that replaces the matched-text.<br/>For example: `href=\"/proxy/services/superset-fraud-app/static/`<br/>_(Optional, default: '')_ |

**Note**: Explicit metadata, implicit and global variables such as `${superset-fpa.ipaddr}`, `${superset-fpa._state}`, `${.GATEWAY_CONNECT_ADDRESS}`, etc. are not currently supported in the replace strings definitions.

Example 1:

<pre><code>{
  "matchMime": "text/html",
  "matchUrl": ".*\.html",
  "matchText": "href=\"/static/",
  "replaceText": "href=\"/proxy/services/superset-fraud-app/static/"
}</code></pre>

The above example tells the Gateway proxy to process request URLs ending with `.html` and the response header mime-type equals `text/html`.  Once the URL and mime-type are a match, then the response body is transformed by replacing every occurrence of `href="/static/` with `href="/proxy/services/superset-fraud-app/static/`.

Example 2:

<pre><code>{
  "matchMime": "text/html",
  "matchUrl": ".*",
  "matchText": "num=([0-9]*)",
  "replaceText": "NUM=\"$1\""
}</code></pre>

The above example tells the Gateway to process requests where the response header mime-type equals `text/html`.  Once the mime-type is a match, then the response body is transformed by replacing every occurrence of `num=one or more digits` with `NUM="same digits"`.  For example: `num=25` becomes `NUM="25"`, `num=100` becomes `NUM="100"`, etc.

**Note**: The matchUrl in this case will match any URL so it could have been omitted.

In addition to the explicit metadata variables defined in the services, there are implicit and global variables that can be used in the service configuration also.  Implicit variables are specific to the service while global variables are specific to the Gateway.

**Note**: These variables are only applicable to the following properties: _srcUrl, proxy.address, docker.run, docker.exec and apex.launchArgs values (not names)_

**Implicit Variables**

| Item |  Description |
| ---- |  ----------- | 
| _type | This variable should resolve to the service type such as `docker` or `apex`.  The syntax to reference this variable is `${superset-fpa._type}`, assuming the service name is `superset-fpa`. |
| _state | This variable should resolve to the service status.  For a complete list of service status, see the [service status table](#all-service-status) in the Manage section. The syntax to reference this variable is `${superset-fpa._state}`, assuming the service name is `superset-fpa`. |

**Global Variables**

| Item |  Description |
| ---- |  ----------- | 
| GATEWAY\_CONNECT\_ADDRESS | This is the Gateway connection address.  The syntax to reference this variable is `${.GATEWAY_CONNECT_ADDRESS}`. |
| GATEWAY\_ADMIN\_USER | This is the Unix user that the Gateway runs as. The syntax to reference this variable is `${.GATEWAY_ADMIN_USER}`. |

## Applications Property

Applications depending on services are defined in the `applications` property.  

### Applications Parameters

| Item | Type | Description |
| ---- | ---- | ----------- |
| name | string | Apex application name, which exists in the current APA package. |
| requiredServices | array of json object | List of services in which this application depends on.  If one of the services depends on other services, transitive service dependencies do not need to be specified explicitly.<br/>For example:<pre><code>[<br/>  {<br/>    "name": "superset-fpa",<br/>    "requiredBeforeLaunch": true,<br/>    "transient": true<br/>  }<br/>  ...<br/>]</code></pre> |

`requiredServices` is an array of JSON objects where each object defines a service the application depends on.

### Required Services Parameters

| Item | Type | Description |
| ---- | ---- | ----------- |
| name | string | The service name this application depends on. |
| requiredBeforeLaunch | boolean | If this property is set to true, then the application cannot be launched until this service is started.<br/>_(Optional, default: false)_ |
| transient | boolean | If this property is set to true, then it is deleted when the application is killed or shutdown.<br/>_(Optional, default: false)_ |

