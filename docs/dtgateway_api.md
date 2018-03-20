DataTorrent dtGateway API v2 Specification
==========================================

# REST API

## Return codes

*  *200*: OK
*  *400*: The request is not in the format that the server expects
*  *404*: The resource is not found
*  *500*: Something is wrong on the server side

## REST URI Specification

### GET /ws/v2/applications/{appid}/metrics

Function: List all available metrics for an application.

Example: 

```json
{
    "applicationId": "{applicationId}",
    "metrics": [
        {
            "name": "{metrcName}",
            "type": "{metricType}",
            "values": "{value}"
        },
        ...
    ]
}
```
### GET /ws/v2/applications/{appid}

Function: 

Example:

```json
{
    "id": "{appId}",
    "name": "{name}",
    "queue": "{queue}",
    "state": "{applicationState}",
    "finalStatus": "{finalStatus}",
    "startedTime": "{applicationStartedTime}",
    "finishedTime": "{applicationFinishedTime}",
    "diagnostics": "{diagnostics}",
    "applicationType": "{applicationType}",
    "trackingUrl": "{trackingUrl}",
    "elapsedTime": "{elapsedTime}",
    "user": "{user}",
    "currentAttemptId": "{currentAttemptId}",
    "runningContainers": "{runningContainers}",
    "allocatedMB": "{allocatedMB}",
    "allocatedVCores": "{allocatedVCores}",
    "canWrite": "true/false",
    "appPath": "{appPath}",
    "gatewayAddress": "{gatewayAddress}",
    "gatewayConnected": "true/false",
    "appDataSources": [
        {
            "query":
            {
                "operatorName": "{operatorName-1}",
                "url": "{url-1}",
                "topic": "{topic-1}"
            },
            "result":
            {
                "operatorName": "{operatorName-1}",
                "url": "{url-1}",
                "topic": "{topic-1}",
                "appendQIDToTopic": "true/false"
            },
            "type": "{type}",
            "name": "{dataSourceName}"
        },
        ...
    ],
    "metrics":
    {
        "Operator1":
        {
            "{metricName1}": "{value}",
            "{metricName2}": "{value}"
                ...
        },
        "Operator2":
        {
            "{metricName1}": "{value}",
            "{metricName2}": "{value}"
                ...
        },
        ...
    },
    "attributes":
    {
        "{attributeName}": "{attributeValue}",
        ...
        "{attributeName-n}": "{attributeValue-n}"
    },
    "appMasterTrackingUrl": "{appMasterTrackingUrl}",
    "version": "{apex version}",
    "stats":
    {
        "latency": "{latency}",
        "plannedContainers": "{plannedContainers}",
        "failedContainers": "{failedContainers}",
        "numOperators": "{numOperators}",
        "windowStartMillis": "{windowStartMillis}",
        "criticalPath": [
            "{criticalPathNumber-1}",
            ...
            "{criticalPathNumber-n}"
        ],
        "currentWindowId": "{min of operators:currentWindowId}",
        "recoveryWindowId": "{min of operators:recoveryWindowId}",
        "tuplesProcessedPSMA": "{sum of operators:tuplesProcessedPSMA}",
        "totalTuplesProcessed": "{sum of operators:totalTuplesProcessed}",
        "tuplesEmittedPSMA": "{sum of operators:tuplesEmittedPSMA}",
        "totalTuplesEmitted": "{sum of operators:totalTuplesEmitted}",
        "totalMemoryAllocated": "{totalMemoryAllocated}",
        "memoryRequired": "{memoryRequired}",
        "totalVCoresAllocated": "{totalVCoresAllocated}",
        "vcoresRequired": "{vcoresRequired}",
        "totalBufferServerReadBytesPSMA": "{totalBufferServerReadBytesPSMA}",
        "totalBufferServerWriteBytesPSMA": "{totalBufferServerWriteBytesPSMA}",
        "allocatedContainers": "{numberOfAllocatedContainers}"
    },
    "connectedToThisGateway": "true/false",
    "appPackageSource":
    {
        "user": "{user}",
        "name": "{appPackageName}",
        "version": "{appPackageVersion}",
        "appName": "{appName}",
        "configPackage":
        {
            "user": "{user}",
            "name": "{configPackageName}",
            "version": "{configPackageVersion}"
        }
    },
    "launchDisabled": "true/false",
    "services": [
        {
            "name": "{serviceName}",
            "state": "{state}",
            "type": "docker/apex",
            "requiredServices": ["{requiredService1}", "{requiredServices}", ...],
            "proxy":
            {
                "name": "{proxyName}",
                "address": "proxyAddress"
            },
            "installedTime": "{installTime}",
            "startedTime": "{startTime}",
            "enabled": "true/false",
            "memoryMB": "{memoryMB}",
            "srcUrl": "{srcUrl}",
            "docker/apex property name-1": "{value-1}",
            ...
            "docker/apex property name-n": "{value-n}"
        },
        ...
    ]
}
```

### GET /ws/v2/applications/{appid}/failureRootCause

Function: Return the root cause of why an application failed to run.

Example:

```json
{
    "title": "FC_ERROROUTPUT",
    "type": "markdown",
    "content": "{root cause of why the application {appid} failed}"
}
```

### GET /ws/v2/applications/{appid}/physicalPlan/containers[?states={NEW,ALLOCATED,ACTIVE,KILLED}&types={all,appmaster}]

Function:

Example: 

```json
{
    "containers": [
        {
            "id": "{id}",
            "host": "{host}",
            "state": "{NEW,ALLOCATED,ACTIVE,KILLED}",
            "jvmName": "{jvmName}",
            "lastHeartbeat": {lastHeartbeat},
            "numOperators": {numOperators},
            "operators:" {
                "id1": "name1",
                "id2": "name2",
                "id3": "name3"
            },
            "memoryMBAllocated": "{memoryMBAllocated}",
            "memoryMBFree": "{memoryMBFree}",
            "gcCollectionTime": "{gcCollectionTime}",
            "gcCollectionCount": "{gcCollectionCount}",
            "containerLogsUrl": "{containerLogsUrl}",
            "startedTime": "{containerStartTime}",
            "finishedTime": "{containerFinishedTime}",
            "rawContainerLogsUrl": "{rawContainerLogsUrl}",
            "containerType": "APP_MASTER|STREAMING"
        },
        ...
    ]
}
```
### GET /ws/v2/applications/{appid}/physicalPlan/containers/{containerId}

Function:

Example:

```json
{
    "id": "{id}",
    "host": "{host}",
    "state": "{NEW,ALLOCATED,ACTIVE,KILLED}",
    "jvmName": "{jvmName}",
    "lastHeartbeat":
    {
        lastHeartbeat
    },
    "numOperators":
    {
        numOperators
    },
    "operators:"
    {
        "id1": "name1",
        "id2": "name2",
        "id3": "name3"
    },
    "memoryMBAllocated": "{memoryMBAllocated}",
    "memoryMBFree": "{memoryMBFree}",
    "gcCollectionTime": "{gcCollectionTime}",
    "gcCollectionCount": "{gcCollectionCount}",
    "containerLogsUrl": "{containerLogsUrl}",
    "startedTime": "{containerStartTime}",
    "finishedTime": "{containerFinishedTime}",
    "rawContainerLogsUrl": "{rawContainerLogsUrl}",
    "containerType": "APP_MASTER|STREAMING"
}
```
### GET /ws/v2/applications/{appid}/physicalPlan/containers/{containerId}/logs

Function:

Example: 

```json
{
    "logs": [
        {
            "name": "logName-1",
            "length": "{length}",
            "rawUrl": "{urlToLog}"
        },
        {
            "name": "logName-2",
            "length": "{length}",
            "rawUrl": "{urlToLog}"
        },
        ...
    ]
}
```
### GET /ws/v2/applications/{appid}/physicalPlan/containers/{containerId}/logs/{logName}[?start={startPos}&end={endPos}&grep={regexp}&includeOffset={true/false}&lastNBytes={numberOfBytes}]

Function: Return the raw log, or the last N bytes of the log if lastNBytes is given.

Return: if includeOffset=false or not provided, return raw log content (Content-Type: text/plain). Otherwise (Content-Type: application/json):

Example: 

```json
{
    "lines": [
        {
            "byteOffset": "{byteOffsetFromStartOfTheLog}",
            "line": "{one line from {logName}}"
        },
        {
            "byteOffset": "{byteOffsetFromStartOfTheLog}",
            "line": "{the next line from {logName}}}"
        },
        ...
    ]
}
```

### GET /ws/v2/applications/{appid}/physicalPlan/containers/logs/{logName}[?grep={regexp}&descendingOrder={true/false}&includeOffset={true/false}&lastNBytes={numberOfBytes}]

Function: Return GC events for the application in sorted order.

Return: if includeOffset=false or not provided, return raw log content (Content-Type: text/plain). Otherwise (Content-Type: application/json):

Example: 

```json
{
    "lines": [
        {
            "byteOffset": "{byteOffset}",
            "line": "{GC event}",
            "startTime": "{eventStartTime}",
            "type": "GC",
            "occupiedHeapMemoryBefore": "{occupiedHeapMemoryBefore}",
            "occupiedHeapMemoryAfter": "{occupiedHeapMemoryAfter}",
            "heapCapacity": "{heapCapacity}",
            "heapReductionPercentage": "{heapReductionPercentage}",
            "duration": "{duration}",
            "container": "{containerId}"
        },
        ...
    ]
}
```
### GET /ws/v2/applications/{appid}/logicalPlan/operators/{operatorName}/logs/{logName}[?grep={regexp}&descendingOrder={true/false}&lastNBytes={numberOfBytes}]

Function: Return GC events for the an logical operator in sorted order. A logical operator maps to one or more physical operator(s). 
Each physical operator belongs to a container and all the GC events from all such containers are collected and returned.

Example: 

```json
{
    "lines": [
        {
            "byteOffset": "{byteOffset}",
            "line": "{GC event}",
            "startTime": "{eventStartTime}",
            "type": "GC",
            "occupiedHeapMemoryBefore": "{occupiedHeapMemoryBefore}",
            "occupiedHeapMemoryAfter": "{occupiedHeapMemoryAfter}",
            "heapCapacity": "{heapCapacity}",
            "heapReductionPercentage": "{heapReductionPercentage}",
            "duration": "{duration}",
            "container": "{containerId}"
        },
        ...
    ]
}
```
### GET /ws/v2/applications/{appid}/issues

Function: Return list of issues of the applicaiton.

```json
{
    "issues": [
        {
            "key": "{issueKey}",
            "propertyName": "{PROPERTY_NAME}",
            "description": "{ISSUE_DESCRIPTION}",
            "severity": "error"|"warning"
        },
        ...
    ]    
}
```
### GET /ws/v2/appPackages?hasServices={true/false}&hasUI={true/false}

Function: 

Example: 
```json
{
    "appPackages": [
        {
            "owner": "{owner}",
            "modificationTime": "{modificationTime}",
            "appPackageName": "{appPackageName}",
            "appPackageVersion": "{appPackageVersion}",
            "appPackageDisplayName": "{appPackageDisplayName}",
            "appPackageDescription": "{appPackageDescription}",
            "applications": [
                {
                    "name": "{application-1}",
                    "displayName": "{applicationDisplayName-1}",
                    "type": "class/json",
                    "launchDisabled": "true/false"
                },
                ...
            ],
            "canWrite": "true/false",
            "ui": {
                "dashboards": [
                    {
                        "name": "{dashboardName-1}",
                        "file": "{dashboardFile-1}",
                        "appNames": [
                            "{applicationUsingThisDashborad-1}",
                            "{applicationUsingThisDashborad-2}",
                            ...
                        ]
                    },
                    ...
                ]
            },
            "services": {
                "services": [
                    {
                        // Sample docker service
                        "name": "{serviceName}",
                        "type": "docker",
                        "srcUrl": "{srcUrl}",
                        "docker": {
                            "run": "{options and arguments to run docker service}"
                        },
                        "proxy": {
                            "name": "{proxyName}",
                            "address": "{proxyAddress}"
                        },
                        "requiredServices": [
                            "{requiredServiceName-1}",
                            "{requiredServiceName-2}",
                            ...
                        ]
                    },
                    {
                        // Sample Apex service
                        "name": "{serviceName}",
                        "type": "apex",
                        "srcUrl": "{srcUrl}",
                        "apex": {
                            "appName": "ApexApplicationName",
                            "launchArgs": {
                                "{launchArgName}": "{launchArgValue}"
                            }
                        },
                        "proxy": {
                            "name": "{proxyName}",
                            "address": "{proxyAddress}"
                        },
                        "metadata": {
                            "QueryIP": "{queryIP}",
                            "QueryPort": "{queryPort}"
                        }
                    }
                ],
                "applications": [
                    {
                        "name": "{applicationUsesService}",
                        "requiredServices": [
                            {
                                "name": "requiredServiceName",
                                "{servivePropertyName-1}": "{serviceProperty}",
                                "{servivePropertyName-2}": "{serviceProperty}",
                                ...
                            },
                            ...
                        ]
                    }
                ]
            }
        },
        ...
    ]
}
```

### GET /ws/v2/appPackages/{owner}/{packageName}/{packageVersion}?includeDescription={true/false}

Function: Gets the meta information of the app package
                    
Returns: If **includeDescription** is set to be false or not provided, return meta data for such app package with properties as simple name-value pairs. If **includeDescription** is true, properties will also include description information as well.

Example: 

```json
{
    "appPackageName": "{appPackageName}",
    "appPackageVersion": "{appPackageVersion}",
    "appPackageGroupId": "{appPackageGroupId}",
    "dtEngineVersion": "{dtEngineVersion}",
    "appPackageDescription": "{appPackageDescription}",
    "appPackageDisplayName": "{appPackageDisplayName}",
    "classPath": [
        "{classPath}"
    ],
    "applications": [
        {applicationMetaData-1},
        {applicationMetaData-2},
        ...
    ],
    "appJars": [
        "{appJar-1}",
        "{appJar-2}"
        ...
    ],
    "appJsonFiles": [
        {"appJsonFile-1"},
        {"appJsonFile-2"},
        ...
    ],
    "appPropertiesFiles": [],
    "requiredProperties": [
        // when includeDescription=false
        {"propertyName-1"},
        {"propertyName-2"},
        ...

        // When includeDescription=true
        {"propertyName-1"}: {
            "value": null,
            "description": "{descriptionOfProperty}"
        },
        ...
    ],
    "defaultProperties": {
        // when includeDescription=false
        {"propertyName-1"}: {defaultValueOfProperty-1},
        {"propertyName-2"}: {defaultValueOfProperty-2},
        ...

        // When includeDescription=true
        {"propertyName-1"}: {
            "value": "{defaultValueOfProperty}",
            "description": "{descriptionOfProperty}"
        },
        ...
    },
    "configs": [
        {"config-1"},
        {"config-2"},
        ...
    ],
    "owner": "{owner}",
    "modificationTime": "{modificationTime}",
    "canWrite": "true/false"
}
```
### GET /ws/v2/appPackages/{owner}/{packageName}/{packageVersion}/applications

Function: 

Example: 

```json
{
    "applications": [
        {
            "name": "{name}",
            "file": "{fileName}",
            "type": "{type}",
            "displayName": "{displayName}",
            "dag": {dag in json format},
            "error": "{error}",
            "errorStackTrace": "{errorStackTrace}",
            "requiredProperties": [
                {"propertyName-1"},
                {"propertyName-2"},
                ...
            ],
            "defaultProperties": {
                {"propertyName-1"}: {defaultValueOfProperty-1},
                {"propertyName-2"}: {defaultValueOfProperty-2},
                ...
            }
        },
        ...
    ]
}
```
### GET /ws/v2/appPackages/{owner}/{packageName}/{packageVersion}/applications/{appName}[?includeDescription={true/false}]

Function: Gets the meta data for that application

Example: 

```json
{
    "name": "{name}",
    "file": "{fileName}",
    "type": "{type}",
    "displayName": "{displayName}",
    "dag":{dag in json format},
    "error": "{error}",
    "errorStackTrace": "{errorStackTrace}",
    "requiredProperties": [
        // when includeDescription=false
        {"propertyName-1"},
        {"propertyName-2"},
        ...

        // When includeDescription=true
        {"propertyName-1"}: {
            "value": null,
            "description": "{descriptionOfProperty}"
        },
        ...
    ],
    "defaultProperties": {
        // when includeDescription=false
        {"propertyName-1"}: {defaultValueOfProperty-1},
        {"propertyName-2"}: {defaultValueOfProperty-2},
        ...

        // When includeDescription=true
        {"propertyName-1"}: {
            "value": "{defaultValueOfProperty}",
            "description": "{descriptionOfProperty}"
        },
        ...
    }
}
```


### GET /ws/v2/appPackages/{owner}/{packageName}/{packageVersion}/classSchemas

Function: This is deprecated.

Return:

### GET /ws/v2/appPackages/{owner}/{packageName}/{packageVersion}/classSchemas/{classSchemasName}[?version={version}]

Function: This is deprecated.

Return:
	
### GET /ws/v2/cluster/config

Function: Get the list of all configurations on cluster.

Example: 
```json
{
    "{configName-1}": "{configValue-1}",
    "{configName-2}": "{configValue-2}",
    ...
}
```
### GET /ws/v2/cluster/queues

Function: Get the list of queues on cluster..

Example: 
```json
    "queues": [
        {
            "capacity": "{Capacity of the queue}",
            "currentCapacity": "{Current capacity of the queue}",
            "maxCapacity": "{Maximum capacity of the queue}",
            "name": "{Queue name}",
            "state": "{State of the Queue}"
        },
        ...
    ]
}
```
### GET /ws/v2/config/properties

Function: Returns the list of all configuration properties defined in the configuration files.

Example: 
```json
   {
    "{name}":
    {
        "value": "{PROPERTY_VALUE}",
        "description": "{PROPERTY_DESCRIPTION}",
        "scope": "{scope}"
    },
    ...
}
```
### GET /ws/v2/config/docker

Function: Get docker configuration status

Example: 
```json
{
  "isFound": "true/false", 
  “version”: “{version}”,
  "isCompatible": "true/false",
  "dt.dockerHost": "{dockerHostAddress}"
}
```
### PUT /ws/v2/config/docker

Function: Set docker configuration

Payload:
{
    "dt.dockerHost": ""{dockerHostAddress}"
}

### POST /ws/v2/licenses?filename={license-name}

Function: The request payload of the API is the content of the license.

Example: 
```json
Returns:
{
    "currentTime": "{currentTimeMills}",
    "startDate": "{startTimeMills}",
    "expireTime": "{expireTimeMills}",
    "memoryMBAllowed": "{memoryMBAllowed}",
    "memoryMBUsed": "{memoryMBUsed}",
    "issuedTo": "{issuedTo}",
    "issuedBy": "{issuedBy}",
    "issuerWebsite": "{issuerWebsite}",
    "supportedBy": "{supportedBy}",
    "supportURL": "{supportURL}",
    "category": "DT Premium/DT PLUS",
    "exceedGracePeriod": "{exceedGracePeriod}",
    "valid": {true/false},
    "id": "{licenseId}",
    "licenseType": "{licenseType}"
}
```
### GET /ws/v2/licenses

Function: This is deprecated. Use the API `GET /v2/licenses/current` instead.

Example: 
```json
 "licenses": [
    {
        "currentTime": "{currentTimeMills}",
        "startDate": "{startTimeMills}",
        "expireTime": "{expireTimeMills}",
        "memoryMBAllowed": "{memoryMBAllowed}",
        "memoryMBUsed": "{memoryMBUsed}",
        "issuedTo": "{issuedTo}",
        "issuedBy": "{issuedBy}",
        "issuerWebsite": "{issuerWebsite}",
        "supportedBy": "{supportedBy}",
        "supportURL": "{supportURL}",
        "category": "DT Premium/DT PLUS",
        "exceedGracePeriod": "{exceedGracePeriod}",
        "valid": {true/false},
        "id": "{licenseId}",
        "licenseType": "{licenseType}"
    }]
}
```
### GET /ws/v2/licenses/{id}

Function: Get the selected license. The parameter 'id' can be the string "current" or the valid current license id.

Example:
```json
{
    "currentTime": "{currentTimeMills}",
    "startDate": "{startTimeMills}",
    "expireTime": "{expireTimeMills}",
    "memoryMBAllowed": "{memoryMBAllowed}",
    "memoryMBUsed": "{memoryMBUsed}",
    "issuedTo": "{issuedTo}",
    "issuedBy": "{issuedBy}",
    "issuerWebsite": "{issuerWebsite}",
    "supportedBy": "{supportedBy}",
    "supportURL": "{supportURL}",
    "category": "DT Premium/DT PLUS",
    "exceedGracePeriod": "{exceedGracePeriod}",
    "valid": {true/false},
    "id": "{licenseId}",
    "licenseType": "{licenseType}"
}
```

### GET /ws/v2/phoneHome/report[?period={total/previous/current}]

Function: Get a report which is in the same format of the usage report gateway is generating and sending back to DataTorrent. When the query parameter "period" is omitted, by default it will return stats from the total period.

Example:

```json
{
    "licenseId": "{licenseId}",
    "numNodesInCluster": "{numberOfNodesInCluster}",
    "license":
    {
        "currentTime": "{currentTimeMills}",
        "startDate": "{startTimeMills}",
        "expireTime": "{expireTimeMills}",
        "memoryMBAllowed": "{memoryMBAllowed}",
        "memoryMBUsed": "{memoryMBUsed}",
        "issuedBy": "{issuedBy}",
        "issuerWebsite": "{issuerWebsite}",
        "supportedBy": "{supportedBy}",
        "supportURL": "{supportURL}",
        "category": "{DT Premium/DT PLUS}",
        "exceedGracePeriod": "{exceedGracePeriod}",
        "valid": {true/false},
        "expirationTimeNotificationLevel": "{INFO/WARN/ERROR}",
        "id": "{licenseId}",
        "licenseType": "{licenseType}"
    },
    "rts.version": "{rtsVersion}",
    "apex.version": "{apexVersion}",
    "java.vendor": "{javaVendor}",
    "java.version": "{javaVersion}",
    "os.arch": "{operatingSystemArchitecture}",
    "os.name": "{operatingSystemName}",
    "os.version": "{operatingSystemVersion}",
    "hadoop.version": "{hadoopVersion}",
    "metrics":
    {
        "tuplesProcessedPSMA": "{tuplesProcessedPSMA}",
        "tuplesEmittedPSMA": "{tuplesEmittedPSMA}",
        "cpuPercentage": "{cpuPercentage}",
        "gatewayUpTimeMills": "{gatewayUpTimeMills}",
        "currentMemoryAllocatedMB": "{currentMemoryAllocatedMB}",
        "period": "{total/previous/current}",
        "startTime": "{startTimeOfThePeriod}",
        "appsRunningMax": "{appsRunningMaxInThePeriod}",
        "ageOfAppsAvg": "{ageOfAppsAvgInThePeriod}",
        "appsRunningAvg": "{appsRunningAvgInThePeriod}",
        "memMBMax": "{memMBMaxInThePeriod}",
        "memMBMin": "{memMBMinInThePeriod}",
        "numAppsFinished": "{numAppsFinishedInThePeriod}",
        "numOfContainersAvg": "{numOfContainersAvgInThePeriod}",
        "endTime": "{endTimeOfThePeriod}",
        "appsRunningMin": "{appsRunningMinInThePeriod}",
        "numOfOperatorsAvg": "{numOfOperatorsAvgInThePeriod}"
    }
}
```
### GET /ws/v2/services

Function:  list of all the currently installed services and their statuses.

Example:

```json

{
    "services": [
    {
        "name": "{serviceName}",
        "state": "{serviceState}",
        "startedTime": {serviceStartTime},
        "installedTime": {serviceInstallTime},
        "enabled": {true / false},
        "type": "{docker/apex}",
        "dependentApps": [
        {
            appId: "{appId}",
            appName: "{appName}",
            state: "{appState}",
            user: "{user}"
        }],
        "memoryMB": {memoryMB},
        "requiredServices": [
            "{requiredService-1}",
            ...
        ],
        "srcUrl": "{srcUrl}",
        "docker":
        {
            "run": "{options and arguments to run docker service}",
            "exec": "{optional exec command to run after the container is started}"
        },
        "proxy":
        {
            "name": "{proxyName}",
            "address": "{proxyAddress}",
	    "followRedirect": {true/false}
        },
        "containerId":{containerId}
    },
    {
        "name": "{serviceName}",
        "type": "apex",
        "srcUrl": "{srcUrl}",
        "apex":
        {
            "appName": "ApexApplicationName",
            "launchArgs":
            {
                "{launchArgName}": "{launchArgValue}"
            }
        },
        "proxy":
        {
            "name": "{proxyName}",
            "address": "{proxyAddress}",
	    "followRedirect": {true/false}
        },
        "metadata":
        {
            "var-name": "{value}"
        }
    }]
}
```

### GET /ws/v2/services/{name}

Function: Get details for a specific service

Example: 
```json
    {
        "name": "{serviceName}",
        "state": "{serviceState}",
        "startedTime": {serviceStartTime},
        "installedTime": {serviceInstallTime},
        "enabled": {true / false},
        "type": "{docker/apex}",
        "dependentApps": [
        {
            appId: "{appId}",
            appName: "{appName}",
            state: "{appState}",
            user: "{user}"
        }],
        "memoryMB": {memoryMB},
        "requiredServices": [
            "{requiredService-1}",
            ...
        ],
        "srcUrl": "{srcUrl}",
        "docker":
        {
            "run": "{options and arguments to run docker service}",
            "exec": "{optional exec command to run after the container is started}"
        },
        "proxy":
        {
            "name": "{proxyName}",
            "address": "{proxyAddress}",
	    "followRedirect": {true/false}
        },
        "containerId":{containerId}
    }
```
### PUT /ws/v2/services/{name}

Function: Install a new service with specified JSON params

Payload:
```json
{
    "name": "{serviceName}",
    "enabled":
    {
        true / false
    },
    "type": "{docker/apex}",
    "requiredServices": [
        "{requiredService-1}",
        ...
    ],
    "srcUrl": "{srcUrl}",
    "docker":
    {
        "run": "{options and arguments to run docker service}"
    },
    "proxy":
    {
        "name": "{proxyName}",
        "address": "{proxyAddress}"
    }
}
```
### DELETE /ws/v2/services/{name}

Function: Delete specified service

### POST /ws/v2/services/{name}

Function: Update specified service

Payload:

```json
{
    "name": "{serviceName}",
    "enabled":
    {
        true / false
    },
    "type": "{docker/apex}",
    "requiredServices": [
        "{requiredService-1}",
        ...
    ],
    "srcUrl": "{srcUrl}",
    "docker":
    {
        "run": "{options and arguments to run docker service}"
    },
    "proxy":
    {
        "name": "{proxyName}",
        "address": "{proxyAddress}"
    }
}
```
### POST /ws/v2/services/{name}/start

Function: Start the specified service.

### POST /ws/v2/services/{name}/stop

Function: Stop the specified service

### POST /ws/v2/services/install[?async={true/false}]

Function: Installs multiple services based on JSON params array.  Services are launched after install. hasAppDataSources is an optional flag, if set to true will cause service to respond immediately with 200 or error without waiting for download, installation and launch to complete

Payload:
```json
[
    {
        "name": "{serviceName}",
        "type": "docker",
        "srcUrl": "{dockerAddress}",
        "docker":
        {
            "run": "{run options}",
            "exec": "echo optional command and args"
        },
        "proxy":
        {
            "name": "{proxyName}",
            "address": "{proxyAddress}"
        },
        "requiredServices": ["{requiredService-1}"],
        "enabled": true //enabled by default
    }
]
```
### GET /ws/v2/about

Example:
```json

    "version": "{Apex version}",
    "buildDate": "{Apex build date and time}",
    "buildRevision": "{Apex revision}",
    "buildVersion": "{Apex build version}",
    "buildUser": "{Apex build user}",
    // above 5 fields are deprecated and will be removed in 4.0
    "apexVersion": "{Apex version}",
    "apexBuildDate": "{Apex build date and time}",
    "apexBuildRevision": "{Apex revision}",
    "apexBuildVersion": "{Apex build version}",
    "apexBuildUser": "{Apex build user}",
    "hadoopVersion": "{Hadoop version}",
    "hadoopBuildDate": "{Hadoop build date and time}",
    "hadoopBuildRevision": "{Hadoop build revision}",
    "hadoopBuildVersion": "{Hadoop build version}",
    "hadoopBuildUser": "{Hadoop build user}",
    "rtsVersion": "{RTS version}",
    "rtsBuildDate": "{RTS build date and time}",
    "rtsBuildRevision": "{RTS revision}",
    "rtsBuildVersion": "{RTS build version}",
    "rtsBuildUser": "{RTS build user}",
    "os.arch": "{operating system architecture}",
    "os.name": "{operating system name}",
    "os.version": "{operating system version}",
    "javaVendor": "{java vendor}",
    "javaVersion": "{java version}",
    "gatewayUser": "{user}",
    "hadoopLocation": "{Hadoop location}",
    "jvmName": "{pid}@{hostname}",
    "configDirectory": "{configDir}",
    "hadoopIsSecurityEnabled": {true/false},
    "haEnabled": {true/false},
    "timeZone": "{time zone}",
    "hostname": "{hostname}"
}

```

### GET /ws/v2/about

Function:

Return:

```json
{
    "buildVersion": "{Apex build version}",
    "buildDate": "{Apex build date and time}",
    "buildRevision": "{Apex revision}",
    "buildUser": "{Apex build user}",
    "version": "{Apex version}",
    "rtsBuildVersion": "{RTS build version}",
    "rtsBuildDate": "{RTS build date and time}",
    "rtsBuildRevision": "{RTS revision}",
    "rtsBuildUser": "{RTS build user}",
    "rtsVersion": "{RTS version}",
    "gatewayUser": "{user}",
    "javaVersion": "{java_version}",
    "hadoopLocation": "{hadoop_location}",
    "jvmName": "{pid}@{hostname}",
    "configDirectory": "{configDir}",
    "hostname": "{hostname}",
    "hadoopIsSecurityEnabled": "{true/false}"
}
```

### GET /ws/v2/cluster/metrics

Function: List metrics that are relevant to the entire cluster

Return:

```json
{
    "averageAge": "{average running application age in milliseconds}",
    "cpuPercentage": "{cpuPercentage}",
    "currentMemoryAllocatedMB": "{currentMemoryAllocatedMB}",
    "maxMemoryAllocatedMB": "{maxMemoryAllocatedMB}",
    "numAppsFailed": "{numAppsFailed}",
    "numAppsFinished": "{numAppsFinished}",
    "numAppsKilled": "{numAppsKilled}",
    "numAppsPending": "{numAppsPending}",
    "numAppsRunning": "{numAppsRunning}",
    "numAppsSubmitted": "{numAppsSubmitted}",
    "numContainers": "{numContainers}",
    "numOperators": "{numOperators}",
    "tuplesEmittedPSMA": "{tuplesEmittedPSMA}",
    "tuplesProcessedPSMA": "{tuplesProcessedPSMA}"
}
```

### GET /ws/v2/applications[?states={STATE_FILTER}&name={NAME_FILTER}&user={USER_FILTER]

Function: List IDs of all streaming applications

Return:

```json
{
    "apps": [
        {
            "diagnostics": "{diagnostics}",
            "elapsedTime": "{elapsedTime}",
            "finalStatus": "{finalStatus}",
            "finishedTime": "{finishedTime}",
            "id": "{appId}",
            "name": "{name}",
            "queue": "{queue}",
            "startedTime": "{startedTime}",
            "state": "{state}",
            "trackingUrl": "{trackingUrl}",
            "user": "{user}"
        },  
        …
    ]
}
```

### GET /ws/v2/applications/{appid}

Function: Get the information for the specified application

Return:

```json
{
    "id": "{appid}",
    "name": "{name}",
    "state": "{state}",
    "trackingUrl": "{tracking url}",
    "finalStatus": {finalStatus},
    "appPath": "{appPath}",
    "gatewayAddress": "{gatewayAddress}",
    "elapsedTime": "{elapsedTime}",
    "startedTime": "{startTime}",
    "user": "{user}",
    "version": "{stram version}",
    "remainingLicensedMB": "{remainingLicensedMB}",
    "allocatedMB": "{allocatedMB}",
    "gatewayConnected": "true/false",
    "connectedToThisGateway": "true/false",
    "attributes": {
           "{attributeName}": "{attributeValue}", 
           "{attributeName-n}": "{attributeValue-n}", 
    },
    "stats": {
        "allocatedContainers": "{allocatedContainer}",
        "totalMemoryAllocated": "{totalMemoryAllocated}",
        "latency": "{overall latency}",
        "criticalPath": "{list of operator id that represents the critical path}",
        "failedContainers": "{failedContainers}",
        "numOperators": "{numOperators}",
        "plannedContainers": "{plannedContainers}",
        "currentWindowId": "{min of operators:currentWindowId}",
        "recoveryWindowId": "{min of operators:recoveryWindowId}",
        "tuplesProcessedPSMA": "{sum of operators:tuplesProcessedPSMA}",
        "totalTuplesProcessed":"{sum of operators:totalTuplesProcessed}",
        "tuplesEmittedPSMA":"{sum of operators:tuplesEmittedPSMA}",
        "totalTuplesEmitted":"{sum of operators:totalTuplesEmitted}",
        "totalBufferServerReadBytesPSMA": "{totalBufferServerReadBytesPSMA}",
        "totalBufferServerWriteBytesPSMA": "{totalBufferServerWriteBytesPSMA}"
    }
}
```

### GET /ws/v2/applications/{appid}/physicalPlan

Function: Return the physical plan for the given application

Return:

```json
{
    "operators": [
        {
            "className": "{className}",
            "container": "{containerId}",
            "cpuPercentageMA": "{cpuPercentageMA}",
            "currentWindowId": "{currentWindowId}",
            "failureCount": "{failureCount}",
            "host": "{host}",
            "id": "{id}",
            "ports": [
                {
                    "bufferServerBytesPSMA": "{bufferServerBytesPSMA}",
                    "name": "{name}",
                    "totalTuples": "{totalTuples}",
                    "tuplesPSMA": "{tuplesPSMA}",
                    "type": "input/output",
                    "recordingStartTime": "{recordingStartTime}"
                },
                ...
            ],
            "lastHeartbeat": "{lastHeartbeat}",
            "latencyMA": "{latencyMA}",
            "name": "{name}",
            "recordingStartTime": "{recordingStartTime}",
            "recoveryWindowId": "{recoveryWindowId}",
            "status": "{status}",
            "totalTuplesEmitted": "{totalTuplesEmitted}",
            "totalTuplesProcessed": "{totalTuplesProcessed}",
            "tuplesEmittedPSMA": "{tuplesEmittedPSMA}",
            "tuplesProcessedPSMA": "{tuplesProcessedPSMA}",
            "logicalName": "{logicalName}",
            "isUnifier": true/false
        },
         …
     ],
     "streams": [        
        {
            "logicalName": "{logicalName}",
            "sinks": [
                {
                    "operatorId": "{operatorId}",
                    "portName": "{portName}"
                }, ...
            ],
            "source": {
                "operatorId": "{operatorId}",
                "portName": "{portName}"
            },
            "locality": "{locality}"
        }, ...
     ]
}
```

        
### GET /ws/v2/applications/{appid}/physicalPlan/operators

Function: Return list of operators for the given application

Return:

```json
{
    "operators": [
        {
            "className": "{className}",
            "container": "{containerId}",
            "counters": {
                "{counterName}": "{counterValue}", 
                ...
             },
            "cpuPercentageMA": "{cpuPercentageMA}",
            "currentWindowId": "{currentWindowId}",
            "failureCount": "{failureCount}",
            "host": "{host}",
            "id": "{id}",
            "ports": [
                {
                    "bufferServerBytesPSMA": "{bufferServerBytesPSMA}",
                    "name": "{name}",
                    "totalTuples": "{totalTuples}",
                    "tuplesPSMA": "{tuplesPSMA}",
                    "type": "input/output",
                    "recordingStartTime": "{recordingStartTime}"
                },
                ...
            ],
            "lastHeartbeat": "{lastHeartbeat}",
            "latencyMA": "{latencyMA}",
            "name": "{name}",
            "recordingStartTime": "{recordingStartTime}",
            "recoveryWindowId": "{recoveryWindowId}",
            "status": "{status}",
            "totalTuplesEmitted": "{totalTuplesEmitted}",
            "totalTuplesProcessed": "{totalTuplesProcessed}",
            "tuplesEmittedPSMA": "{tuplesEmittedPSMA}",
            "tuplesProcessedPSMA": "{tuplesProcessedPSMA}",
            "logicalName": "{logicalName}",
            "unifierClass": "{unifierClass}"
        },
         …
     ]
}
```

### GET /ws/v2/applications/{appid}/physicalPlan/streams

Function: Return physical streams

Return:

```json
{
     "streams": [        
        {
            "logicalName": "{logicalName}",
            "sinks": [
                {
                    "operatorId": "{operatorId}",
                    "portName": "{portName}"
                }, ...
            ],
            "source": {
                "operatorId": "{operatorId}",
                "portName": "{portName}"
            },
            "locality": "{locality}"
        }, ...
     ]
}
```

### GET /ws/v2/applications/{appid}/physicalPlan/operators/{opid}

Function: Return information of the given operator for the given application

Return:

```json
{
    "className": "{className}",
    "container": "{containerId}",
    "counters": {
      "{counterName}: "{counterValue}", ...            
    }
    "cpuPercentageMA": "{cpuPercentageMA}",
    "currentWindowId": "{currentWindowId}",
    "failureCount": "{failureCount}",
    "host": "{host}",
    "id": "{id}",
    "ports": [
       {
          "bufferServerBytesPSMA": "{bufferServerBytesPSMA}",
          "name": "{name}",
          "totalTuples": "{totalTuples}",
          "tuplesPSMA": "{tuplesPSMA}",
          "type": "input/output"
       }, ...
    ],
    "lastHeartbeat": "{lastHeartbeat}",
    "latencyMA": "{latencyMA}",
    "name": "{name}",
    "recordingStartTime": "{recordingStartTime}",
    "recoveryWindowId": "{recoveryWindowId}",
    "status": "{status}",
    "totalTuplesEmitted": "{totalTuplesEmitted}",
    "totalTuplesProcessed": "{totalTuplesProcessed}",
    "tuplesEmittedPSMA": "{tuplesEmittedPSMA}",
    "tuplesProcessedPSMA": "{tuplesProcessedPSMA}"
}
```

### GET /ws/v2/applications/{appid}/physicalPlan/operators/{opid}/deployHistory

Function: Return container deploy history of this operator
Since: 1.0.6

Return:

```json
{
   "containers": [  
        {  
            "container": "{containerId}",   
            "startTime": "{startTime}"  
        }, ...  
    ],   
    "name": "{operatorName}"
}
```

### GET /ws/v2/applications/{appid}/physicalPlan/operators/{opid}/ports

Function: Get the information of all ports of the given operator of the
given application

Return:

```json
{  
    "ports": [
        {  
            "bufferServerBytesPSMA": "{bufferServerBytesPSMA}",   
            "name": "{name}",
            "recordingStartTime": "{recordingStartTime}",  
            "totalTuples": "{totalTuples}",   
            "tuplesPSMA": "{tuplesPSMA}",   
            "type": "output"  
        }, …
    ]
}
```

### GET /ws/v2/applications/{appid}/physicalPlan/operators/{opid}/ports/{portName}

Function: Get the information of a specified port

Return:

```json
{  
    "bufferServerBytesPSMA": "{bufferServerBytesPSMA}",   
    "name": "{name}",   
    "totalTuples": "{totalTuples}",   
    "tuplesPSMA": "{tuplesPSMA}",   
    "type": "{type}"  
}
```

### GET /ws/v2/applications/{appid}/operatorClasses[?parent={parent}&q={searchTerm}&packagePrefixes={comma-separated-package-prefixes}]

Function: Get the classes of operators, if given the parent parameter,
all classes that inherits from parent

Return:

```json
{  
    "operatorClasses": [  
        { "name":"{className}" },
       …
     ]
}
```

### GET /ws/v2/applications/{appid}/operatorClasses/{operatorClass}

Function: Get the description of the given operator class

Return:

```json
{
    "inputPorts": [
        {
            "name": "{name}",
            "optional": {boolean}
        },
          ...
    ],
    "outputPorts": [
        {
            "name": "{name}",
            "optional": {boolean}
        },
        …
    ],
    "properties": [  
        {
          "name":"{className}",
          "canGet": {canGet},
          "canSet": {canSet},
          "type":"{type}",
          "description":"{description}",
          "properties": ...
        },
       …
     ]
}
```

### POST /ws/v2/applications/{appid}/shutdown

Function: Shut down the application

Payload: none

### POST /ws/v2/applications/{appid}/kill

Function: Kill the given application

Payload: none

### POST /ws/v2/applications/{appid}/physicalPlan/operators/{opid}/recordings/start

Function: Start recording on operator

Payload (optional):

```json
{
   "numWindows": {number of windows to record}  (if not given, the
recording goes on forever)
}
```

Returns:

```json
{
    "id": "{recordingId}",
}
```

### POST /ws/v2/applications/{appid}/physicalPlan/operators/{opid}/recordings/stop

Function: Stop recording on operator

Payload: none

### POST /ws/v2/applications/{appid}/physicalPlan/operators/{opid}/ports/{portName}/recordings/start

Function: Start recording on port

Payload (optional):

```json
{
   "numWindows": {number of windows to record}  (if not given, the
recording goes on forever)
}
```

Returns:

```json
{
    "id": "{recordingId}",
}
```

### POST /ws/v2/applications/{appid}/physicalPlan/operators/{opid}/ports/{portName}/recordings/stop

Function: Stop recording on port

Payload: none

### GET /ws/v2/applications/{appid}/physicalPlan/containers[?states={NEW,ALLOCATED,ACTIVE,KILLED}]

Function: Return the list of containers for this application

Return:

```json
{
    "containers": [
        {
            "host": "{host}",
            "id": "{id}",
            "jvmName": "{jvmName}",
            "lastHeartbeat": "{lastHeartbeat}",
            "memoryMBAllocated": "{memoryMBAllocated}",
            "memoryMBFree": "{memoryMBFree}",
            "numOperators": "{numOperators}",
            "operators:" {
                "id1": "name1",
                "id2": "name2",
                "id3": "name3"
            },
            "containerLogsUrl": "{containerLogsUrl}",
            "state": "{state}"
        }, …
    ]
}
```

### GET /ws/v2/applications/{appid}/physicalPlan/containers/{containerId}

Function: Return the information of the specified container

Return:

```json
{
    "host": "{host}",
    "id": "{id}",
    "jvmName": "{jvmName}",
    "lastHeartbeat": "{lastHeartbeat}",
    "memoryMBAllocated": "{memoryMBAllocated}",
    "memoryMBFree": "{memoryMBFree}",
    "numOperators": "{numOperators}",
    "operators:" {
        "id1": "name1",
        "id2": "name2",
        "id3": "name3"
    },
    "containerLogsUrl": "{containerLogsUrl}",
    "state": "{state}"
}
```

### GET /ws/v2/applications/{appid}/physicalPlan/containers/{containerId}/logs

Function: Return the container log list

Return:

```json
{
    "logs": [
        {
            "length": "{log length}",
            "name": "{logName}"
        }, ...
    ]
}
```

### GET /ws/v2/applications/{appid}/physicalPlan/containers/{containerId}/stackTrace

Since: 3.4.0 

Function: Return the container stack trace

Return:

```json
{
    "threads": [
        {
            "name": "{name}",
            "state": "{state}",
            "id": "{id}",
            "stackTraceElements": [
                "{line1}",
                "{line2}", ...
            ]
        }, ...
    ]
}
```

### GET /ws/v2/applications/{appid}/physicalPlan/containers/{containerId}/logs/{logName}[?start={startPos}&end={endPos}&grep={regexp}&includeOffset={true/false}&lastNbytes={N}]

Function: Return the log with provided options

Return: if includeOffset=false or not provided, return raw log content (Content-Type: text/plain). Otherwise (Content-Type: application/json).
The options (start, end) and (lastNbytes) are mutually exclusive.

```json
{
    "lines": [
        { "byteOffset":"{byteOffset}", "line": "{line}" }, { "byteOffset":"{byteOffset}", "line": "RandomNumber : {Line}" } …
     ]
}
```

### POST /ws/v2/applications/{appid}/physicalPlan/containers/{containerId}/kill

Function: Kill this container

Payload: none

### GET /ws/v2/applications/{appid}/logicalPlan

Function: Return the logical plan of this application

Return:

```json
{
    "operators": [
      {
        "name": "{name}",
        "attributes": {attributeMap},
        "class": "{class}",
        "ports": {
           [
            {
                "name": "{name}",
                "attributes": {attributeMap},
                "type": "input/output"
            }, ...
           ]
         },
         "properties": {
            "class": "{class}"
         }
      }, ...
    ],
    "streams": [
        {
            "name": "{name}",
            "locality": "{locality}",
            "sinks": [
                {
                    "operatorName": "{operatorName}",
                    "portName": "{portName}"
                }, ...
            ],
            "source": {
                "operatorName": "{operatorName}",
                "portName": "{portName}"
            }
        }, ...
    ]
}
```

### GET /ws/v2/applications/{appid}/logicalPlan/attributes

Function: Return the application attributes

Return:

```json
{
    "{name}": value, ...
}
```

### GET /ws/v2/applications/{appid}/logicalPlan/operators

Function: Return the list of info of the logical operator

Return:

```json
{
    "operators": [
        {
            "className": "{className}",
            "containerIds": [ "{containerid}", … ],
            "cpuPercentageMA": "{cpuPercentageMA}",
            "currentWindowId": "{currentWindowId}",
            "failureCount": "{failureCount}",
            "hosts": [ "{host}", … ],
            "lastHeartbeat": "{lastHeartbeat}",
            "latencyMA": "{latencyMA}",
            "name": "{name}",
            "partitions": [ "{operatorid}", … ],
            "recoveryWindowId": "{recoveryWindowId}",
            "status": {
                "{state}": "{number}", ...
            },
            "totalTuplesEmitted": "{totalTuplesEmitted}",
            "totalTuplesProcessed": "{totalTuplesProcessed}",
            "tuplesEmittedPSMA": "{tuplesEmittedPSMA}",
            "tuplesProcessedPSMA": "{tuplesProcessedPSMA}",
            "unifiers": [ "{operatorid}", … ],
            "counters": {
                 "{counterName}: {
                    "avg": …, "max": …, "min": …, "sum": ...
                 }
            }
        }, ...
    ]
}
```

### GET /ws/v2/applications/{appid}/logicalPlan/operators/{opName}

Function: Return the info of the logical operator

Return:

```json
{
            "className": "{className}",
            "containerIds": [ "{containerid}", … ],
            "cpuPercentageMA": "{cpuPercentageMA}",
            "currentWindowId": "{currentWindowId}",
            "failureCount": "{failureCount}",
            "hosts": [ "{host}", … ],
            "lastHeartbeat": "{lastHeartbeat}",
            "latencyMA": "{latencyMA}",
            "name": "{name}",
            "partitions": [ "{operatorid}", … ],
            "recoveryWindowId": "{recoveryWindowId}",
            "status": {
                "{state}": "{number}", ...
            },
            "totalTuplesEmitted": "{totalTuplesEmitted}",
            "totalTuplesProcessed": "{totalTuplesProcessed}",
            "tuplesEmittedPSMA": "{tuplesEmittedPSMA}",
            "tuplesProcessedPSMA": "{tuplesProcessedPSMA}",
            "unifiers": [ "{operatorid}", … ],
            "counters": {
                 "{counterName}: {
                    "avg": …, "max": …, "min": …, "sum": ...
                 }
            }
}
```

### GET /ws/v2/applications/{appid}/logicalPlan/operators/{opName}/properties

Function: Return the properties of the logical operator

Return:

```json
{
    "{name}": value, ...
}
```

### POST /ws/v2/applications/{appid}/logicalPlan/operators/{opName}/properties

Function: Set the properties of the logical operator
Payload:

```json
{
    "{name}": value, ...
}
```

### GET /ws/v2/applications/{appid}/physicalPlan/operators/{opId}/properties

Function: Return the properties of the physical operator

Return:

```json
{
    "{name}": value, ...
}
```

### POST /ws/v2/applications/{appid}/physicalPlan/operators/{opId}/properties

Function: Set the properties of the physical operator
Payload:

```json
{
    "{name}": value, ...
}
```

### GET /ws/v2/applications/{appid}/logicalPlan/operators/{opName}/attributes

Function: Get the attributes of the logical operator

Return:

```json
{
    "{name}": value, ...
}
```

### GET /ws/v2/applications/{appid}/logicalPlan/operators/{opName}/ports/{portName}/attributes

Function:  Get the attributes of the port

Return:

```json
{
    "{name}": value, ...
}
```

### POST /ws/v2/applications/{appid}/logicalPlan

Function: Change logical plan of this application
Payload:

```json
{
    "requests": [
        {
            "requestType": "AddStreamSinkRequest",
            "streamName": "{streamName}",
            "sinkOperatorName": "{sinkOperatorName}",
            "sinkOperatorPortName": "{sinkOperatorPortName}"
        },
        {
            "requestType": "CreateOperatorRequest",
            "operatorName": "{operatorName}",
            "operatorFQCN": "{operatorFQCN}",
        },
        {
            "requestType": "CreateStreamRequest",
            "streamName": "{streamName}",
            "sourceOperatorName": "{sourceOperatorName}",
            "sourceOperatorPortName": "{sourceOperatorPortName}"
            "sinkOperatorName": "{sinkOperatorName}",
            "sinkOperatorPortName": "{sinkOperatorPortName}"
        },
        {
            "requestType": "RemoveOperatorRequest",
            "operatorName": "{operatorName}",
        },
        {
            "requestType": "RemoveStreamRequest",
            "streamName": "{streamName}",
        },
        {
            "requestType": "SetOperatorPropertyRequest",
            "operatorName": "{operatorName}",
            "propertyName": "{propertyName}",
            "propertyValue": "{propertyValue}"
        },
        ...
    ]
}
```

### GET /ws/v2/applications/{appid}/logicalPlan/operators/{opName}/stats/meta

Function: Return the meta information about the statistics stored for
this operator

Return:

```json
{
    "appId": "{appId}",
    "operatorName": "{operatorName}",
    "operatorIds": [ {opid}, … ],
    "startTime": "{startTime}",
    "endTime": "{endTime}",
    "count": "{count}",
    "ended": "{boolean}"
}
```

### GET /ws/v2/applications/{appid}/logicalPlan/operators/{opName}/stats?startTime={startTime}&endTime={endTime}

Function: Return the statistics stored for this logical operator

```json
{
    "operatorStats": [
        {
            "operatorId": "{operatorId}",
            "timestamp": "{timestamp}",
            "stats": {
                "container": "containerId",
                "host": "host",
                "totalTuplesProcessed", "{totalTuplesProcessed}",
                "totalTuplesEmitted", "{totalTuplesEmitted}",
                "tuplesProcessedPSMA", "{tuplesProcessedPSMA}",
                "tuplesEmittedPSMA": "{tuplesEmittedPSMA}",
                "cpuPercentageMA": "{cpuPercentageMA}",
                "latencyMA": "{latencyMA}",
                "ports": [ {
                    "name": "{name}",
                    "type":"{input/output}",
                    "totalTuples": "{totalTuples}",
                    "tuplesPSMA", "{tuplesPSMA}",
                    "bufferServerBytesPSMA", "{bufferServerBytesPSMA}"
                }, … ],
            }
        }, ...
    ]
}
```

### GET /ws/v2/applications/{appid}/physicalPlan/containers/stats/meta

Function: Return the meta information about the container statistics

```json
{
    "appId": "{appId}",
    "containers": {
        "{containerId}": {
            "id": "{id}",
            "jvmName": "{jvmName}",
            "host": "{host}",
            "memoryMBAllocated", "{memoryMBAllocated}"
        },
        …
    },
    "startTime": "{startTime}"
    "endTime": "{endTime}"
    "count": "{count}"
    "ended": {boolean}
}
```

### GET /ws/v2/applications/{appid}/physicalPlan/containers/stats?startTime={startTime}&endTime={endTime}

Function: Return the container statistics stored for this application

```json
{
    "containerStats": [
        {
            "containerId": "{containerId}"
            "timestamp": "{timestamp}"
            "stats": {
                "numOperators": "{numOperators}",
            }
        }, ...
    ]
}
```

### GET /ws/v2/applications/{appid}/recordings

Function: Get the list of all recordings for this application

Return:

```json
{
    "recordings": [{
        "id": "{id}",
        "startTime": "{startTime}",
        "appId": "{appId}",
        "operatorId": "{operatorId}",
        "containerId": "{containerId}",
        "totalTuples": "{totalTuples}",
        "ports": [ {
            "name": "{portName}",
            "streamName": "{streamName}",
            "type": "{type}",
            "id": "{index}",
            "tupleCount": "{tupleCount}"
        } … ],
        "ended": {boolean},
        "windowIdRanges": [ {
            "low": "{lowId}",
            "high": "{highId}"
        } … ],
        "properties": {
            "name": "value", ...
        }
    }, ...]
}
```

### GET /ws/v2/applications/{appid}/physicalPlan/operators/{opid}/recordings

Function: Get the list of recordings on this operator

Return:

```json
{
    "recordings": [ {
        "id": "{id}",
        "startTime": "{startTime}",
        "appId": "{appId}",
        "operatorId": "{operatorId}",
        "containerId": "{containerId}",
        "totalTuples": "{totalTuples}",
        "ports": [ {
            "name": "{portName}",
            "streamName": "{streamName}",
            "type": "{type}",
            "id": "{index}",
            "tupleCount": "{tupleCount}"
        } … ],
        "ended": {boolean},
        "windowIdRanges": [ {
            "low": "{lowId}",
            "high": "{highId}"
        } … ],
        "properties": {
            "name": "value", ...
        }
    }, ...]
}
```

### GET /ws/v2/applications/{appid}/physicalPlan/operators/{opid}/recordings/{id}

Function: Get the information about the recording

Return:

```json
{
    "id": "{id}",
    "startTime": "{startTime}",
    "appId": "{appId}",
    "operatorId": "{operatorId}",
    "containerId": "{containerId}",
    "totalTuples": "{totalTuples}",
    "ports": [ {
       "name": "{portName}",
       "streamName": "{streamName}",
       "type": "{type}",
       "id": "{index}",
       "tupleCount": "{tupleCount}"
     } … ],
    "ended": {boolean},
    "windowIdRanges": [ {
       "low": "{lowId}",
       "high": "{highId}"
     } … ],
    "properties": {
       "name": "value", ...
     }
}
```

### DELETE /ws/v2/applications/{appid}/physicalPlan/operators/{opid}/recordings/{id}

Function: Deletes the specified recording

Since: 1.0.4

### GET /ws/v2/applications/{appid}/physicalPlan/operators/{opid}/recordings/{id}/tuples

Query Parameters:

    offset
    startWindow
    limit
    ports
    executeEmptyWindow

Function: Get the tuples

Return:

```json
{
    "startOffset": "{startOffset}",
    "tuples": [ {
        "windowId": "{windowId}",
        "tuples": [ {
            "portId": "{portId}",
            "data": "{tupleData}"
        }, … ]
    }, … ]
}
```

### GET /ws/v2/applications/{appid}/events?from={fromTime}&to={toTime}&offset={offset}&limit={limit}

Function: Get the events

Return:

```json
{
    "events": [ {
           "id": "{id}",
        "timestamp": "{timestamp}",
        "type": "{type}",
        "data": {
            "name": "value", …
        }
    }, … ]
}
```

### GET /ws/v2/profile/user

Function: Get the user profile information, list of roles and list of
permissions given the user

Return:

```json
{
    "authScheme": "{authScheme}",
    "userName" : "{userName}",
    "roles": [ "{role1}", … ],
    "permissions": [ "{permission1}", … ]
}
```

### GET /ws/v2/profile/settings

Function: Get the current user's settings

Return:

```json
{
    "{key}": {value}, ...
}
```

### GET /ws/v2/profile/settings/{user}

Function: Get the specified user's settings

Return:

```json
{
    "{key}": {value}, ...
}
```

### GET /ws/v2/profile/settings/{user}/{key}

Function: Get the specified user's setting key

Return:

```json
{
    "value": {value}
}
```

### PUT /ws/v2/profile/settings/{user}/{key}

Function: Set the specified user's setting key
Payload:

```json
{
    "value": {value}
}
```

### GET /ws/v2/auth/roles

Function: Get the list of roles the system has

Return:

```json
{
    "roles": [
       {
         "name": "{role1}",
         "permissions": [ "{permission1}", … ]
       }, …
    ]
}
```

### GET /ws/v2/auth/roles/{role}

Function: Get the list of permissions given the role

Return:

```json
{
    "permissions": [ "{permissions1}", … ]
}
```

### PUT /ws/v2/auth/roles/{role}

Function: create or edit the list of permissions given the role

Return:

```json
{
    "permissions": [ "{permissions1}", … ]
}
```

### POST /ws/v2/auth/restoreDefaultRoles

Function: Restores default roles

### DELETE /ws/v2/auth/roles/{role}

Function: delete the given role

### GET /ws/v2/auth/permissions

Function: Get the list of possible permissions

Return:

```json
{
    "permissions": [ {
       "name": "{permissionName}",
       "adminOnly": true/false
    }, … ]
}
```

### PUT /ws/v2/applications/{appid}/permissions

Function: Set the permissions details for this application

Payload:

```json
{
    "readOnly": {
        "roles": [ "role1", … ],
        "users": [ "user1", … ],
        "everyone": true/false
    },
    "readWrite": {
        "roles": [ "role1", … ],
        "users": [ "user1", … ],
        "everyone": true/false
    }
}
```

### GET /ws/v2/applications/{appid}/permissions

Function: Get the permissions details for this application

Return:

```json
{
    "readOnly": {
        "roles": [ "role1", … ],
        "users": [ "user1", … ],
        "everyone": true/false
    },
    "readWrite": {
        "roles": [ "role1", … ],
        "users": [ "user1", … ],
        "everyone": true/false
    }
}
```

### PUT /ws/v2/appPackages/{owner}/{name}/permissions

Function: Set the permissions details for this application

Payload:

```json
{
    "readOnly": {
        "roles": [ "role1", … ],
        "users": [ "user1", … ],
        "everyone": true/false
    },
    "readWrite": {
        "roles": [ "role1", … ],
        "users": [ "user1", … ],
        "everyone": true/false
    }
}
```

### GET /ws/v2/appPackages/{owner}/{name}/permissions

Function: Get the permissions details for this application

Return:

```json
{
    "readOnly": {
        "roles": [ "role1", … ],
        "users": [ "user1", … ],
        "everyone": true/false
    },
    "readWrite": {
        "roles": [ "role1", … ],
        "users": [ "user1", … ],
        "everyone": true/false
    }
}
```

### POST /ws/v2/licenses

Function: Add a license to the registry

Payload: The license file content

Return:

```json
{
  "id": "{licenseId}",
  "expireTime": {unixTimeMillis},
  "expirationTimeNotificationPeriod": {timeMillis},
  "nodesAllowed": {nodesAllowed},
  "memoryMBAllowed": {memoryMBAllowed},
  "exceedGracePeriod": {timeMillis},
  "contextType": "{contextType}",
  "type": "{type}",
  "features": [ "{feature1}", … ]
}
```

### GET /ws/v2/licenses/current

Function: Get info on the current license

```json
{
      "id": "{licenseId}",
      "currentTime": {unixTimeMillis},
      "expireTime": {unixTimeMillis},
      "nodesAllowed": {nodesAllowed},
      "nodesUsed": {nodesUsed},
      "memoryMBAllowed": {memoryMBAllowed},
      "memoryMBUsed": {memoryMBUsed},
      "exceedGracePeriod": {timeMillis}, // memory exceed grace period
      "exceedRemainingTime": {timeMillis},  // (optional)
      "violation": "memory", // returns violation type (optional)
      "contextType": "{community|standard|enterprise}",
      "type": "{evaluation|non_production|production}"
      "features": [ "{feature1}", … ], // for community, empty array
      "current": true/false,
      "expirationTimeNotificationLevel": "{INFO|WARN|ERROR}", // (optional)
      "valid": true/false // true, if the license is valid
}
```

### GET /ws/v2/config/installMode

Function: returns the install mode

```json
{
  "installMode": "{evaluation|community|app}",
  "appPackageName": "{optionalAppPackageName}",
  "appPackageVersion": "{optionalAppPackageVersion}"
}
```

### GET /ws/v2/config/properties/dt.phoneHome.enable

Function: returns the download type

```json
{
  "value": "true/false"
}
```

### PUT /ws/v2/config/properties/dt.phoneHome.enable

Function:

```json
{
  "value": "true/false"
}
```

Feature List:  

* `SYSTEM_APPS`
* `SYSTEM_ALERTS`
* `APP_DATA_DASHBOARDS`
* `RUNTIME_DAG_CHANGE`
* `RUNTIME_PROPERTY_CHANGE`
* `APP_CONTAINER_LOGS`
* `LOGGING_LEVELS`
* `APP_DATA_TRACKER`
* `JAAS_LDAP_AUTH`
* `APP_BUILDER`


### GET /ws/v2/config/properties

Function: Returns list of properties from dt-site.xml.

Return:

```json
{
    "{name}": {
        "value": "{PROPERTY_VALUE}",
        "description": "{PROPERTY_DESCRIPTION}"
    }

}
```

### GET /ws/v2/config/properties/{PROPERTY_NAME}

Function: Returns single property from dt-site.xml, specify by name

Return:

```json
{
    "value": "{PROPERTY_VALUE}",
    "description": "{PROPERTY_DESCRIPTION}"
}
```

### POST /ws/v2/config/properties

Function: Overwrites all specified properties in dt-site.xml

Payload:

```json
{
    "properties": [
        {
            "name": "{name}"
            "value": "{PROPERTY_VALUE}",
            "local": true/false,
                    "description": "{PROPERTY_DESCRIPTION}"
        }, …
    ]
}
```

### PUT /ws/v2/config/properties/{PROPERTY_NAME}

Function: Overwrites or creates new property in dt-site.xml
Payload:

```json
{
    "value": "{PROPERTY_VALUE}",
    "local": true/false,
    "description": "{PROPERTY_DESCRIPTION}"
}
```

### DELETE /ws/v2/config/properties/{PROPERTY_NAME}

Function: Deletes a property from dt-site.xml. 
### GET /ws/v2/config/hadoopExecutable

Function: Returns the hadoop executable

Return:

```json
{
    "value": "{PROPERTY_VALUE}",
}
```

### PUT /ws/v2/config/hadoopExecutable

Function: Sets the hadoop executable

Return:

```json
{
    "value": "{PROPERTY_VALUE}",
}
```

### GET /ws/v2/config/issues

Function: Returns list of potential issues with environment

Return:

```json
{
    "issues": [
        {
            "key": "{issueKey}",
            "propertyName": "{PROPERTY_NAME}",
            "description": "{ISSUE_DESCRIPTION}",
            "severity": "error"|"warning"
        },
        {...},
        {...}
    ]    
}
```

### GET /ws/v2/config/ipAddresses

Function: Returns list of ip addresses the gateway can listen to

Return:

```json
{
    "ipAddresses": [
      "1.2.3.4", ...
    ]    
}
```

### POST /ws/v2/config/restart

Function: Restarts the gateway

Payload: none

### GET /proxy/rm/v1/…

### POST /proxy/rm/v1/…

Function: Proxy calls to resource manager of Hadoop.  Only works for GET and POST calls.

### GET /proxy/stram/v2/...

### POST /proxy/stram/v2/…

### PUT /proxy/stram/v2/…

### DELETE /proxy/stram/v2/…

Function: Proxy calls to Stram Web Services.

### POST /ws/v2/applications/{appid}/loggers

Function: Set the logger levels of packages/classes.

Payload:

```json
{
    "loggers" : [
        {
            "logLevel": value,
            "target": value
        }, 
        ...
    ]
}
```

### GET /ws/v2/applications/{appid}/loggers

Function: Gets the logger levels of packages/classes.

Return:

```json
{
    "loggers" : [
        {
            "logLevel": value,
            "target": value
        }, 
        ...
    ]
}
```

### GET /ws/v2/applications/{appid}/loggers/search?pattern="{pattern}"

Function: searches for all classes that match the pattern.

Return:

```json
{
    "loggers" : [
        {
            "name" : "{fully qualified class name}",
            "level": "{logger level}"
        }
    ]
}
```

### POST /ws/v2/applications/{appid}/restart[?queue={queue}]
Since: 3.4.0
Function: Restart the terminated application. Payload is optional.
Payload:
```json
{
  "{propertyName}" : "{propertyValue}", ...
}
```
Return:
```json
{
  "appId": "{appId}"
}
```

### GET /ws/v2/appPackages

Since: 1.0.4

Function: Gets the list of appPackages the user can view in the system

```json
{
    "appPackages": [
        {
                 "appPackageName": "{appPackageName}",
                 "appPackageVersion": "{appPackageVersion}",
            "modificationTime": "{modificationTime}",
            "owner": "{owner}",
        }, ...
    ]
}
```

### POST /ws/v2/appPackages?merge={replace|fail|ours|theirs}

Since: 1.0.4

Function: Uploads an appPackage file, merge with existing app package if exists. Default is replace.
merge parameter:
  replace - replace existing app package with the new app package without merging
  fail - return error if there is an existing app package already with the same owner and name and version
  ours - merge, for files existing in both existing and new app packages, use the file in the new package
  theirs - merge, for files existing in both existing and new app packages, use the file in the existing package

Payload: the raw zip file

Return: The information of the app package

### GET /ws/v2/appPackages/{owner}/{name}

Since: 1.0.4

Function: Gets the list of versions of appPackages with the given name in the system owned by the specified user

```json
{
    "versions": [
        "1.0-SNAPSHOT"
    ]
}
```

### DELETE /ws/v2/appPackages/{owner}/{packageName}/{packageVersion}

Since: 1.0.4

Function: Deletes the appPackage

### GET /ws/v2/appPackages/{owner}/{packageName}/{packageVersion}/download

Since: 1.0.4

Function: Downloads the appPackage zip file

### GET /ws/v2/appPackages/{owner}/{packageName}/{packageVersion}

Since: 1.0.4

Function: Gets the meta information of the app package

Returns:

```json
{
    "appPackageName": "{appPackageName}",
    "appPackageVersion": "{appPackageVersion}",
    "modificationTime":  "{modificationTime}",
    "owner": "{owner}",
    ...
}
```

### GET /ws/v2/appPackages/{owner}/{packageName}/{packageVersion}/configs

Since: 1.0.4
Function: Gets the list of configurations of the app package
Returns:

```json
{
    "configs": [
        "my-app-conf1.xml"
    ]
}
```

### GET /ws/v2/appPackages/{owner}/{packageName}/{packageVersion}/configs/{configName}

Since: 1.0.4

Function: Gets the properties XML of the specified config

Returns:

    <configuration>
            <property>
                    <name>...</name>
                    <value>...</value>
            </property>
            …
    </configuration>

### PUT /ws/v2/appPackages/{owner}/{packageName}/{packageVersion}/configs/{configName}

Since: 1.0.4

Function: Creates or replaces the specified config with the property parameters specified payload

Payload: configuration in XML

### DELETE /ws/v2/appPackages/{owner}/{packageName}/{packageVersion}/configs/{configName}

Since: 1.0.4

Function: Deletes the specified config

### GET /ws/v2/appPackages/{owner}/{packageName}/{packageVersion}/applications

Since: 1.0.4

Function: Gets the list of applications in the appPackage

Returns:

```json
{
    "applications": [
        {
            "dag": {dag in json format},
            "file": "{fileName}",
            "name": "{name}",
            "type": "{type}",
            "error": "{error}",
            "fileContent": {originalFileContentForJSONTypeApp}
        }
    ]
}
```

### GET /ws/v2/appPackages/{owner}/{packageName}/{packageVersion}/applications/{appName}

Since: 1.0.4

Function: Gets the meta data for that application

Returns:

```json
{
    "file": "{fileName}",
    "name": "{name}",
    "type": "{json/class/properties}",
    "error": "{error}"
    "dag": {
        "operators": [
          {
            "name": "{name}",
            "attributes":  {
                "{attributeKey}": "{attributeValue}", ...
            },
            "class": "{class}",
            "ports": [
                  {
                    "name": "{name}",
                    "attributes":  {
                       "{attributeKey}": "{attributeValue}", ...
                     },
                  }, ...
            ],
            "properties": {
               "{propertyName}": "{propertyValue}"
            }
         }, ...
        ],
        "streams": [
          {
            "name": "{name}",
            "locality": "{locality}",
            "sinks": [
                {
                    "operatorName": "{operatorName}",
                    "portName": "{portName}"
                }, ...
            ],
            "source": {
                "operatorName": "{operatorName}",
                "portName": "{portName}"
            }
          }, ...
        ]
    },
    "fileContent": {originalFileContentForJSONTypeApp}
}
```

### POST /ws/v2/appPackages/{user}/{appPackageName}/{appPackageVersion}/merge

Function: Merge the configuration, json apps, and resources files from the app package specified by user/name/version from the payload to the specified app package in the url, without overwriting any existing file in the specified app package. If replaceExisting is true, the files in the app, conf and resources directory of the app package will be replaced by the ones in the app package specified in the payload. Otherwise, they will not be replaced. The fields user, name and replaceExisting in the payload are optional. If user and name are not specified, they are default to be the same as in the URI path. replaceExisting's default is false.

Payload:

```json
{
 "user": "{user}",
 "name": "{name}",
 "version": "{versionToMergeFrom}",
 "replaceExisting": "{true/false}"
}
```

### POST /ws/v2/appPackages/{owner}/{packageName}/{packageVersion}/applications/{appName}/launch[?config={configName}&originalAppId={originalAppId}&queue={queueName}]

Since: 1.0.4

Function: Launches the application with the given configuration specified in the POST payload

Payload:

```json
{
    "{propertyName}" : "{propertyValue}", ...
}
```


Return:

```json
{
    "appId": "{appId}"
}
```

### GET /ws/v2/appPackages/{owner}/{packageName}/{packageVersion}/operators/{classname}

Since: 1.0.4

Function: Get the properties of the operator given the classname in the jar

```json
{  
    "properties": [  
        {
          "name":"{className}",
          "canGet": {canGet},
          "canSet": {canSet},
          "type":"{type}",
          "description":"{description}",
          "properties": ...
        },
       …
     ]
}
```

### PUT /ws/v2/appPackages/{owner}/{packageName}/{packageVersion}/applications/{applicationName}[?errorIfExists={true/false}]

Function: Creates or Replaces an application using json. Note that "ports" are only needed if you need to specify port attributes.  If errorIfExists is true, it returns an error if the application with the same name already exists in the app package

Payload:

```json
{
        "displayName": "{displayName}",
        "description": "{description}",
        "operators": [
          {
            "name": "{name}",
            "attributes":  {
                "{attributeKey}": "{attributeValue}", ...
            },
            "class": "{class}",
            "ports": [
                  {
                    "name": "{name}",
                    "attributes":  {
                       "{attributeKey}": "{attributeValue}", ...
                     },
                  }, ...
            ],
            "properties": {
               "{propertyName}": "{propertyValue}"
            }
          }, ...
        ],
        "streams": [
          {
            "name": "{name}",
            "locality": "{locality}",
            "sinks": [
                {
                    "operatorName": "{operatorName}",
                    "portName": "{portName}"
                }, ...
            ],
            "source": {
                "operatorName": "{operatorName}",
                "portName": "{portName}"
            }
          }, ...
        ]
}
```


Return:

```json
{
        "error": "{error}"
}
```

Available port attributes to set: 

* `AUTO_RECORD`
* `IS_OUTPUT_UNIFIED`
* `PARTITION_PARALLEL`
* `QUEUE_CAPACITY`
* `SPIN_MILLIS`
* `STREAM_CODEC`
* `UNIFIER_LIMIT`

Available locality options to set: 

* `THREAD_LOCAL`
* `CONTAINER_LOCAL`
* `NODE_LOCAL`
* `RACK_LOCAL`


### DELETE /ws/v2/appPackages/{owner}/{packageName}/{packageVersion}/applications/{applicationName}

Since: 1.0.5

Function: Deletes non-jar based application in the app package

### GET /ws/v2/appPackages/{owner}/{packageName}/{packageVersion}/operators

Since: 1.0.5

Function: Get the classes of operators from specified app package.

Return:

```json
{  
    "operatorClasses": [  
        {
            "name":"{fullyQualifiedClassName}", 
            "title": "{title}",
            "shortDesc": "{description}",
            "longDesc": "{description}",
            "category": "{categoryName}",
            "doclink": "{doc url}",
            "tags": [ "{tag}", "{tag}", … ],
            "inputPorts": [
                {
                    "name": "{portName}",
                    "type": "{tupleType}",
                    "optional": true/false  
                }, …
            ]
            "outputPorts": [
                {
                    "name": "{portName}",
                    "type": "{tupleType}",
                    "optional": true/false  
                }, …
            ],
            "properties": [  
                {
                    "name":"{propertyName}",
                    "canGet": {canGet},
                    "canSet": {canSet},
                    "type":"{type}",
                    "description":"{description}",
                    "properties": ...
                }, …
            ],
            "defaultValue": {
                "{propertyName}": [VALUE], // type depends on property
                ...
            }

        }, …
    ]
}
```


### GET /ws/v2/appPackages/import

Function: List the importable app packages on Gateway's local file
system

Return:

```json
{
    "appPackages: [
        {
            "file": "{file}",
            "name": "{name}",
            "displayName": "{displayName}",
            "version": "{version}",
            "description": "{description}"
        }
    ]
}
```

### POST /ws/v2/appPackages/import

Function: Import app package from Gateway's local file system

Payload:

```json
{
        "files": ["{file}", … ]
}
```

### PUT /ws/v2/systemAlerts/alerts/{name}

Function: Creates or replaces the specified system alert. The condition has access to an object in its scope called `_topic`. An example alert might take the form of the following:

    _topic["applications.application_1400294100000_0001"].allocatedContainers > 5

Payload:

```json
{
        "condition":"{condition in javascript}",
        "email":"{email}",
	"description": "{description}",
        "timeThresholdMillis":"{time}"
}
```

### DELETE /ws/v2/systemAlerts/alerts/{name}

Function: Deletes the specified system alert

### GET /ws/v2/systemAlerts/alerts?inAlert={true/false}

Function: Gets the created alerts

Return:

```json
{
    "alerts": [{
        "name": "{alertName}",
        "condition":"{condition in javascript}",
        "email":"{email}",
	"description": "{description}",
        "timeThresholdMillis":"{time}",
        "alertStatus": {
            "isInAlert":{true/false}
            "inTime": "{time}",
            "message": "{message}",
            "emailSent": {true/false}
        }
    }, …  ]
}
```

### GET /ws/v2/systemAlerts/alerts/{name}

Function: Gets the specified system alert

Return:

```json
{
    "name": "{alertName}",
    "condition":"{condition in javascript}",        
    "email":"{email}",
    "description": "{description}",
    "timeThresholdMillis":"{time}",
    "alertStatus": {
        "isInAlert":{true/false}
        "inTime": "{time}",
        "message": "{message}",
        "emailSent": {true/false}
    }
}
```

### GET /ws/v2/systemAlerts/history

Function: Gets the history of alerts

Return:

```json
{
    "history": [
        {
            "name":"{alertName}",
            "inTime":"{time}",
            "outTime": "{time}",
            "message": "{message}",
            "emailSent": {true/false}
        }, ...
     ]
}
```

### GET /ws/v2/systemAlerts/topicData

Function: Gets the topic data that is used for evaluating alert
condition

Return:

```json
{
     "{topicName}": {json object data}, ...
}
```

### PUT /ws/v2/systemAlerts/templates/system/{name}

Function: Creates or replaces the specified system alert template.

Payload:

```json
{
    "isSystemTemplate": true,
    "description": "{description}",
    "parameters": [
        {
          "variable": "{replacement variable in Javascript block}",
          "label": "{input label}",
          "type": "{number/text}",
          "placeholder": "{input placeholder}",
          "tooltip": "{input tooltip}",
          "required": {true/false},
          "default": "{default value}",     // optional
          "values": {                       // optional
            "{key}": "{value}",
            …
          }
        },
        …
    ],
    "script": "{Javascript block}"
}
```

Example:

```json
{
    "templates": [
        {
            "isSystemTemplate": true,
            "description": "An alert template example.",
            "parameters": [
                {
                  "variable": "comparison",
                  "label": "Comparison",
                  "type": "text",
                  "placeholder": "Select a comparison",
                  "tooltip": "Choose the comparison to use.",
                  "required": true,
                  "default": ">",
                  "values": {
                    "<": "less than",
                    "===": "equals to",
                    ">": "greater than"
                  }
                },
                {
                  "variable": "count",
                  "label": "Number of Killed Containers",
                  "type": "number",
                  "placeholder": "Enter a valid number",
                  "tooltip": "Enter the number.",
                  "required": false
                }
            ],
            "script": "/* Alert when number of killed containers is {{comparison}} {{count}} */

                _topic['cluster.metrics'].numContainers {{comparison.key}} ({{count}} !== null ? {{count}} : 0);"
        }
    ]
}
```

### DELETE /ws/v2/systemAlerts/templates/system/{name}

Function: Deletes the specified system alert template.

### GET /ws/v2/systemAlerts/templates/system

Function: Gets the created system alert templates

Return:

```json
{
    "templates": [
        {
            "isSystemTemplate": true,
            "description": "{description}",
            "parameters": [
                {
                  "variable": "{replacement variable in Javascript block}",
                  "label": "{input label}",
                  "type": "{number/text}",
                  "placeholder": "{input placeholder}",
                  "tooltip": "{input tooltip}",
                  "required": {true/false},
                  "default": "{default value}",     // optional
                  "values": {                       // optional
                    "{key}": "{value}",
                    …
                  }
                },
                …
            ],
            "script": "{Javascript block}"
        },
        …
    ]
}
```

### GET /ws/v2/systemAlerts/templates/system/{name}

Function: Gets the specified system alert template

Return:

```json
{
    "isSystemTemplate": true,
    "description": "{description}",
    "parameters": [
        {
          "variable": "{replacement variable in Javascript block}",
          "label": "{input label}",
          "type": "{number/text}",
          "placeholder": "{input placeholder}",
          "tooltip": "{input tooltip}",
          "required": {true/false},
          "default": "{default value}",     // optional
          "values": {                       // optional
            "{key}": "{value}",
            …
          }
        },
        …
    ],
    "script": "{Javascript block}"
}
```

### PUT /ws/v2/systemAlerts/validate/script

Function: Validates Java script.

Payload:

```json
{
    "script": {"script"}
}
```

### GET /ws/v2/auth/users/{user}

Function: Gets the info of the given user

Return:

```json
{
    "userName": "{userName}",
    "roles": [ "{role1}", "{role2}" ]
}
```

### POST /ws/v2/auth/users/{user}

Function: Changes password and/or roles of the given user

Return:

```json
{
    "userName": "{userName}",
    "oldPassword": "{oldPassword}",
    "newPassword": "{newPassword}",
    "roles": [ "{role1}", "{role2}" ]
}
```

### PUT /ws/v2/auth/users/{user}

Function: Creates new user

Return:

```json
{
    "userName": "{userName}",
    "password": "{password}",
    "roles": [ "{role1}", "{role2}" ]
}
```

### DELETE /ws/v2/auth/users/{user}

Function: Deletes the specified user

### GET /ws/v2/auth/users

Function: Gets the list of users

Return:

```json
{
    "users": [ {
       "userName": "{username1}",
       "roles": [ "{role1}", … ],
       "permissions": [ "{permission1}", … ]
    }
}
```

### POST /ws/v2/login

Function: Login
Payload:

```json
{
    "userName": "{userName}",
    "password": "{password}"
}
```

Return:

```json
{
    "authScheme": "{authScheme}",
    "userName" : "{userName}",
    "roles": [ "{role1}", … ],
    "permissions": [ "{permission1}", … ]
}
```

### POST /ws/v2/logout

Function: Log out the current user

Return:

```json
{
}
```

### PUT /ws/v2/config/auth

Function: Configure authentication. 
The request specifies the type of authentication to setup such as password, kerberos, ldap etc and the configuration 
parameters for the authentication. The web service sets up the appropriate configuration files for the authentication 
as described in authentication section of [dtgateway_security](dtgateway_security) document. Gateway needs to be 
restarted for the new authentication to take effect. This can be done by making the gateway restart web service request.

payload:

```json
{
    "type": "{authenticationType}",
    "configuration":{ }
}

```

Returns:

```json
{
}
```

The web request **GET /ws/v2/config/auth** returns payload body that was sent in **PUT** request as the response verbatim. 

#### Password

Function: Configure Password authentication 

```json
{
    "type": "password",
    "configuration":{ }
};

```

Returns:

```json
{
}
```

The web request **GET /ws/v2/config/auth** returns payload body that was sent in **PUT** request as the response verbatim. 

```json
{
    "type": "password",
    "configuration":{ }
}

```

#### Kerberos with no group mapping

Function: Configure Kerberos authentication with no group mapping
The configuration comprises of different properties as described in the [dtgateway_security](dtgateway_security) document. 
Two of the properties are mandatory, they are "kerberosPrincipal" & "kerberosKeytab". A "groupSupport" property specifies 
whether group mapping should be enabled. Group mapping allows Kerberos groups to be mapped to roles. It should be 
specified as "false".

```json
{
    "type":"kerberos",
       "configuration":{  
         "groupSupport":"false",
         "kerberosPrincipal":"{kerberosPrincipal}",
         "kerberosKeytab":"{Keytab}",
         "tokenValidity":"{tokenValidity}",
         "cookieDomain":"{cookieDomain}",
         "cookiePath":"{cookiePath}",      
         "signatureSecret":"{signatureSecret}"
         }
};

```

Returns:

```json
{
}
```

The GET response will be same as the json sent in the request for **PUT** .

#### Kerberos with group mapping

Function: Configure Kerberos authentication with group mapping 
The configuration comprises of different properties as described in the [dtgateway_security](dtgateway_security) document. 
Two of these properties are mandatory, they are "kerberosPrincipal" & "kerberosKeytab". A "groupSupport" property 
specifies whether group mapping should be enabled. Group mapping allows Kerberos groups to be mapped to roles. It should 
be specified as "true". When group mapping is enabled an additional "groupMapping" configuration should be specified that 
contains the mapping from kerberos groups to roles.

```json

{  
   "type": "kerberos",
   "configuration": {  
        "groupSupport": "true",
        "kerberosPrincipal": "{kerberosPrincipal}",
        "kerberosKeytab": "{Keytab}",
        "tokenValidity": "{Validity}",
        "cookieDomain" : "{cookieDomain}",
        "cookiePath": "{cookiePath}"
        "signatureSecret": "{signatureSecret}"
        }
    "groupMapping": [
        { 
             "group": "users",
             "roles": ["developers", "admins", "qa"] 
        },
        {  
             "group": "ops",
             "roles": ["operators"]
        }
     ]  
};

```

Returns:

```json
{
}
```

The GET response will be same as the json sent in the request for **PUT** .

#### LDAP 

Configure LDAP authentication. There are different configurations possible based on how the LDAP server is configured.

##### Anonymous search allowed and no group mapping needed

Function: Configure LDAP authentication with anonymous search available on LDAP server and no group mapping is needed
The configuration comprises of different properties as described in the [dtgateway_security](dtgateway_security) document. 
The "server" property is mandatory. Also, at least one of userBaseDn, authIdentity or userSearchFilter properties must be 
specified. A "groupSupport" property specifies whether group mapping should be enabled. Group mapping allows LDAP groups
to be mapped to roles. It should be specified as "false".

```json

{  "type": "ldap",
   "configuration": {  
       "groupSupport": "false",
       "Server": "{Server}",
       "Port": {port}" +
       "userBaseDn": "{usserBaseDn}",
       "userIdAttribute": "{userIdAttribute}"
   }
}

```

Returns:

```json
{
}
```

The GET response will be same as the json sent in the request for **PUT** .

##### Anonymous search not allowed and no group mapping needed

Function: Configure LDAP authentication when anonymous search is not available on LDAP server and no group mapping is needed
The configuration comprises of different properties as described in the [dtgateway_security](dtgateway_security) document. 
The "server", "userBaseDn", "bindDn" & "bindPassword" properties are mandatory. A "groupSupport" property specifies 
whether group mapping should be enabled. Group mapping allows LDAP groups to be mapped to roles. It should be specified 
as "false".

```json

{  
    "type": "ldap",
    "configuration": {  
        "groupSupport": "false",
        "Server": "{server}",
        "Port": {port},
        "userBaseDn": "{userBaseDn}",
        "userIdAttribute": "{userIdAttribute}",
        "bindDn": "{bindDn}",
        "bindPassword": "{bindPassword}", 
        "userObjectClass": "{userObjectClass}"
    }
};
   
```

Returns:

```json
{
}
```

The GET response will be same as the json sent in the request for **PUT** .

##### Anonymous search not allowed but group mapping needed

Function: Configure LDAP authentication when anonymous search is not available on LDAP server but group mapping is needed
The configuration comprises of different properties as described in the [dtgateway_security](dtgateway_security) document. 
The "server", "userBaseDn", "bindDn" & "bindPassword" properties are mandatory. A "groupSupport" property specifies 
whether group mapping should be enabled. Group mapping allows LDAP groups to be mapped to roles. It should be specified 
as "true". When group mapping is enabled an additional "groupMapping" configuration should be specified that contains 
the mapping from LDAP groups to roles.

```json
{ 
    "type": "ldap",
    "configuration": {  
        "groupSupport": "true",
        "Server": "{server}",
        "Port": {port},
        "userBaseDn": "{userBaseDn}",
        "userIdAttribute": "{userIdAttribute}",
        "bindDn": "{bindDn}",
        "bindPassword": "{bindPassword}", 
        "roleBaseDn": "{roleBaseDn}",
        "userRdnAttribute":"{userRdnAttribute}", 
        "roleNameAttribute": "{roleNameAttribute}", 
        "roleObjectClass": "{roleObjectClass}", 
        "userObjectClass": "{userObjectClass}"
    },
    "groupMapping": [ 
        { 
        	"group": "users",
            "roles":["developers"] 
        },
        { 
        	"group": "ops",
        	"roles": ["operators"]
        }
    ]  
};
```

Returns:

```json
{
}
```

The GET response will be same as the json sent in the request for **PUT** .

#### Active Directory 

Configure Active Directory authentication. There are different configurations possible based on how the Active Directory 
server is configured.

### Anonymous search allowed and no group mapping needed

Function: Configure Active Directory authentication with anonymous search available on Active Directory server and no group mapping is needed
The configuration comprises of different properties as described in the [dtgateway_security](dtgateway_security) document. 
The "server" property is mandatory. Also, at least one of userBaseDn, authIdentity or userSearchFilter properties must be 
specified. A "groupSupport" property specifies whether group mapping should be enabled. Group mapping allows 
Active Directory groups to be mapped to roles. It should be specified as "false".

```json

{  
   "type": "ad",
   "configuration": {  
       "groupSupport ": "false",
       "Server": "{server}",
       "Port": {port},
       "userSearchFilter": "{userSearchFilter}",
       "userBaseDn": "{userBaseDn}",
       "userIdAttribute": "{userIdAttribute}",
       "userDomain" : "{userDomain}"    
   }
};

```

Returns:

```json
{
}
```

The GET response will be same as the json sent in the request for **PUT** .

##### Anonymous search not allowed and no group mapping needed

Function: Configure Active Directory authentication when anonymous search is not available on Active Directory server and no group mapping is needed
The configuration comprises of different properties as described in the [dtgateway_security](dtgateway_security) document. 
The "server", "userBaseDn", "bindDn" & "bindPassword" properties are mandatory. A "groupSupport" property specifies 
whether group mapping should be enabled. Group mapping allows LDAP groups to be mapped to roles. It should be specified 
as "false".

```json

{  
   "type": "ad",
   "configuration": {  
   "groupSupport": "false",
        "Server": "{server}",
        "Port": {port},
        "userBaseDn": "{userBaseDn}",
        "userIdAttribute": "{userIdAttribute}",
        "bindDn": "{bindDn}",
        "bindPassword": "{bindPassword}",
        "userObjectClass": "{userObjectClass}"
    }
};
   
```

Returns:

```json
{
}
```

The GET response will be same as the json sent in the request for **PUT** .

##### Anonymous search not allowed but group mapping needed

Function: Configure Active Directory authentication when anonymous search is not available on Active Directory server but group mapping is needed
The configuration comprises different properties as described in the [dtgateway_security](dtgateway_security) document. 
The "server", "userBaseDn", "bindDn" & "bindPassword" properties are mandatory. A "groupSupport" property specifies 
whether group mapping should be enabled. Group mapping allows LDAP groups to be mapped to roles. It should be specified 
as "true". When group mapping is enabled an additional "groupMapping" configuration should be specified that contains 
the mapping from Active Directory groups to roles.

```json
{ 
    "type": "ad",
    "configuration": {  
        "groupSupport": "true",
        "Server": "{Server}",
        "Port": {port},
        "userBaseDn": "{userBaseDn}",
        "userIdAttribute": "{userIdAttribute}",
        "bindDn": "{bindDn}",
        "bindPassword": "{bindPassword}",
        "roleBaseDn": "{roleBaseDn}",
        "userRdnAttribute": "{userRdnAttribute}",
        "roleNameAttribute": "roleNameAttribute",
        "roleObjectClass": "roleObjectClass",
        "userObjectClass": "{userObjectClass}",
     },
     "groupMapping": [ ]  
};
```

Returns:

```json
{
}
```

The GET response will be same as the json sent in the request for **PUT** .

#### PAM

Configure PAM or Pluggable Authentication Mechanism. PAM is the de-facto authentication available on Linux systems.

##### PAM with no group mapping

Function: Configure PAM authentication with no group mapping
The configuration comprises of different properties as described in the [dtgateway_security](dtgateway_security) document. 
In PAM, service name is mandatory & there is no configuration. A "groupSupport" property specifies whether group mapping 
should be enabled. Group mapping allows PAM groups to be mapped to roles. It should be specified as "false".

```json

{  
   "type":"pam",
   "configuration":{  
      "groupSupport":"false",
      "serviceName":"{serviceName}"
   }
};

```

Returns:

```json
{
}
```

The GET response will be same as the json sent in the request for **PUT** .

##### PAM with group mapping

Function: Configure PAM authentication with group mapping 
The configuration comprises of different properties as described in the [dtgateway_security](dtgateway_security) document.
In PAM, service name is mandatory & there is no configuration. Group mapping allows PAM groups to be mapped to roles. It 
should be specified as "true". When group mapping is enabled an additional "groupMapping" configuration should be 
specified that contains the mapping from PAM groups to roles.

```json

{  
   "type":"pam",
   "configuration":{  
      "groupSupport":"true",
      "serviceName":"{serviceName}"
   },
   
   "groupMapping": [ 
       { 
          "group": "users",
          "roles":["developers"] 
       },
       { 
          "group": "ops",
          "roles": ["operators"]
       }
   ]  
};

```

Returns:

```json
{
}
```

The GET response will be same as the json sent in the request for **PUT** .

### PUT /ws/v2/config/groupMapping 

Function: Specify group to role mapping
Set or update mapping from groups of configured authentication mechanism to RTS roles.

```json

{
   "groupMapping" : [
        {
           "group" : "users",
           "role" : ["developers", "admins", "qa", "interns"]
        },
        {
           "group": "ops",
           "role" : ["operators"]
        }
   ]
};
```

Returns:

```json
{
}
```

The GET response will be same as the json sent in the request for **PUT** .

Publisher-Subscriber WebSocket Protocol
=======================================

dtGateway provides a light-weight pubsub websocket service.
The URL of dtGateway's pubsub websocket service is: `ws://{dtGateway-host-port}/pubsub`.
For example: `ws://localhost:9090/pubsub`

## Input

### Publishing

    {"type":"publish", "topic":"{topic}", "data":{data}}

### Subscribing

    {"type":"subscribe", "topic":"{topic}"}

### Unsubscribing

    {"type":"unsubscribe", "topic":"{topic}"}

### Subscribing to the number of subscribers of a topic

    {"type":"subscribeNumSubscribers", "topic":"{topic}"}

### Unsubscribing from the number of subscribers of a topic

    {"type":"unsubscribeNumSubscribers", "topic":"{topic}"}

## Output

### Normal Published Data

    {"type":"data", "topic":"{topic}", "data":{data}}

### Number of Subscribers:

    {"type":"data", "topic":"{topic}.numSubscribers", "data":{data}}


Auto publish topics
===================

data that gets published every one second:

* `applications` - list of streaming applications running in the cluster
* `applications.[appid]` - information about a particular application
* `applications.[appid].containers` - information about containers of a particular application
* `applications.[appid].physicalOperators` - information about operators of a particular application
* `applications.[appid].logicalOperators` - information about logical operators of a particular application
* `applications.[appid].events` - events from the AM of a particularapplication

data that gets published every five seconds:

* `cluster.metrics` - metrics of the cluster
