DT Gateway System Alerts
========================
The DT Gateway allows the user to create system alerts using JavaScript expressions.
Values in the expressions can come from PubSub websocket topics and include values
like system metrics, application metrics, and custom application counters.
Alert configurations are stored in the Hadoop cluster and therefore persist across
gateway restarts; however, some state information about the alert (such as: whether
it is active or not and a historical record of when it was triggered in the past)
will be lost when the gateway is restarted, since it is stored in memory.

## Alerts and Topics

As described above the trigger for an alert is a JavaScript expression potentially
involving a variety of metrics. When the expression evaluates to true and remains so
for a configured duration, the alert becomes active and email is sent to a configured
list of addresses. Likewise, when the condition turns false, the alert becomes inactive
and another email about the state change is sent.

Here is an example for simple JavaScript condition; we can make a REST call to create an
alert named `xyz` which emails to `someone@company.com` when the number of running
applications is greater than 5 for at least 60 seconds; the disabled flag indicates whether the alert is enabled or disabled; the JSON object is the payload:

### PUT /ws/v2/systemAlerts/alerts/xyz
```json
{
  "condition":"_topic['cluster.metrics'].numAppsRunning > 5",
  "email":"someone@company.com",
  "description": "No.of apps running is more than 5",
  "timeThresholdMillis":"60000",
  "disabled":"false"
}
```

When the number of running applications is greater than 5 for more than 60 seconds with the alert status being enabled, a simple
email will be sent to `someone@company.com`, stating that the alert is in effect, and when
the number of running applications drops below 6, another email will be sent, stating that
the alert is no longer in effect. If an alert is disabled, an email will be sent to indicate the change.

The condition is a simple JavaScript expression which the user can build
from various system or application-specific values. These values are available as fields
of JavaScript objects representing WebSocket topics obtained with expressions of the
form `_topic[<topic_name>]`.
The topic names can be looked up using the **`GET /ws/v2/systemAlerts/topicData`** REST API
call shown below (please note that alert names may contain special characters such as
spaces, slashes and percents but they must be URL-encoded before making REST API calls
such as `Get`, `Put`, and `Delete`):

### GET /ws/v2/systemAlerts/topicData
```
{
  "applications.<applicationId>.logicalOperators": {...},
  "applications.<applicationId>.physicalOperators": {...},
  "applications.<applicationId>.containers": {...},
  "applications.<applicationId>": {...}
  "cluster.metrics": {...},
  "applications": {...}
}
```

where **`<applicationId>`** refers to the application id of a running application
(which typically has the form _application_1482319446115_4314_). These topics
exist for every running application. The alert condition can refer to multiple such topic values and
can be any valid JavaScript expressions that return a boolean. A comma separated list of
email addresses can be specified.

## Configuring SMTP for Email

SMTP needs to be configured for the gateway to be able to send alert emails via an 
[SMTP server](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol#Outgoing_mail_SMTP_server). Make
a note of the following steps before attempting to configure SMTP in the gateway.

 * make sure there is an SMTP server in the network the gateway will have access to. Note down the
SMTP server's hostname and port number (please see the note below regarding encryption-type).
 * if the SMTP server supports or requires [TLS or SSL encryption](https://www.fastmail.com/help/technical/ssltlsstarttls.html),
determine the encryption-type for the communication between the gateway and the SMTP server. The values for
encryption-type are "tls", "ssl" or "none" (i.e. no encryption). In case "tls" or "ssl" is used,
ensure appropriate certificates are installed to establish [trust](https://en.wikipedia.org/wiki/Public_key_certificate).
 * determine the authentication-type for your SMTP server. The only supported values are "password" (i.e. authentication using
username and password) or "none" (i.e. no authentication).
 * if you choose the "password" authentication-type, you will need the SMTP-username and SMTP-password to be used
by the gateway to authenticate with the SMTP server.
 * determine the "fromAddr" and the "fromName" for the emails sent by the gateway which the email recipient
will see as the sender of the emails. Note that for certain SMTP servers the "fromAddr" and the SMTP-username
may need to match or else the latter overrides the former.
 * determine a "test-address" where you can receive emails to verify validity of the SMTP configuration.
 * in case you choose the "password" authentication-type, you will need to set up an SSL keystore as described
[here](dtgateway_security.md#setting-up-ssl-keystore-in-gateway). The gateway uses the keystore to encrypt and
decrypt your SMTP-password.

You can use the following APIs to set or retrieve the SMTP configuration. Note that the JSON sample following the
PUT request is the payload of the request. 

### PUT /ws/v2/config/smtp
```json
{
"host": "smtp.gmail.com",
"port": "587",
"fromAddr": "no-reply@mydomain.com",
"fromName": "Do Not Reply",
"encryptionType": "tls",
"authType": "password",
"username": "smtp-user@mydomain.com",
"password": "secret_password",
"testAddr": "testuser@yourdomain.com"
}
```

Contents of the JSON Object:

| JSON Key |Value |
|-------------|-------|
|host|the SMTP hostname|
|port|the SMTP port on the SMTP server|
|fromAddr|the "from-address" described above i.e. the address from which the alert email is sent|
|fromName|the "from-name" described above i.e. the user friendly string for the "from-address"|
|encryptionType|the "encryption-type" value described above i.e. "tls", "ssl" or "none"|
|authType|the "authentication-type" value described above i.e. "password" or "none"|
|username|the "SMTP-username" value described above|
|password|the "SMTP-password" value described above|
|testAddr|the "test-address" value described above. The gateway sends a test email to this address when you use this API to set the SMTP configuration.|

A note about password: if you omit the "password" value in your JSON object in the API, the gateway will use the existing saved password
so the client does not need to include the password in subsequent API calls. Note that the GET API (described below) never returns the
password of the SMTP configuration, hence the DataTorrent console is able to use this feature without either displaying or requiring the 
user to re-enter the previous password. Note that the JSON sample following the GET request is the value returned from the GET request.

### GET /ws/v2/config/smtp
```json
{
"host": "smtp.gmail.com",
"port": "587",
"fromAddr": "no-reply@mydomain.com",
"fromName": "Do Not Reply",
"encryptionType": "tls",
"authType": "password",
"username": "smtp-user@mydomain.com",
"testAddr": "testuser@yourdomain.com"
}
```

The GET API returns the existing SMTP configuration in the gateway. As mentioned above, the SMTP-password
value is never returned for security reasons.

## Authorization Support for Alerts and Topics

Starting with RTS 3.8, access to alerts will be restricted based on alert owner. A user can view and manage only his own alerts. A user with admin role will have complete access to all alerts including those of other users.

A user will also have restricted access to topics. A user can only view and access topics for applications started by him. Access to topics "cluster.metrics" and "applications" will be restricted to users who have permission to view global configuration(VIEW_GLOBAL_CONFIG). A user with admin role will have access to all topics of all users as well as cluster.metrics and applications.

With the above restriction on topic data, the alert condition provided while creating system alerts can only utilize alert topics which are accessible to alert owner. Hence, a non-admin user A cannot create alerts with conditions using topic data of application(s) started by another user B.

## Managing and viewing alerts

The following operations are available in the Gateway REST API:

- Create an alert

- Delete an alert

- Get alert history

- View content and status of alerts

- View all the current data in the `_topic` array

## Creating an alert

To create an alert, the user needs to specify the alert name, condition,
email address, duration in milliseconds and alert status using disabled flag. As explained above, the condition
can refer to values in various topic objects including system metrics,
application metrics, and custom application counters and must yield a Boolean
value.

**Complex JavaScript Expressions :**

The following example shows how to issue a REST request to create an alert named
`WordCountAppNotRunning` which emails to `phil@company.com` and `mike@company.com`
when the `WordCount` app is not in the `RUNNING` state for at least 60 seconds.

### PUT /ws/v2/systemAlerts/alerts/WordCountAppNotRunning
```json
{
  "condition": "_topic['applications.application_1480063135007_0543']['state'] != 'RUNNING'",
  "email":"phil@company.com, mike@company.com",
  "description": "WordCount Application is not running",
  "timeThresholdMillis":"60000",
  "disabled":"false"
}
```

The above alert works for the current invocation of the `WordCount` application; however,
when the application is restarted, a new application _id_ is generated for which this alert
will no longer work. To avoid having to update the application _id_ in the condition each
time the application restarts, we can write a more complex JavaScript expression to find
the application _id_ for the given application as shown below:

```javascript
var alert = false;
var appId = undefined;
var appsInfo = _topic['applications'].apps;

for(i = 0; i < appsInfo.length; i++)
{
    if (appsInfo[i].name == 'WordCount')
    {
        appId = appsInfo[i].id;
        break;
    }
}
if (appId != undefined)
{
    alert  = _topic['applications.' + appId]['state']  !=  'RUNNING' ;
}
alert;
```

The JavaScript expression must however be written as a single line; tools such as
[javascriptcompressor](http://javascriptcompressor.com/) are useful for this purpose.
Any HTML in the expression also needs to be escaped. Here is new alert
with the revised complex expression compressed to a single line:

### PUT /ws/v2/systemAlerts/alerts/WordCountAppNotRunning
```json
{
  "condition": "var alert=false;var appId=undefined;var appsInfo=_topic['applications'].apps;for(i=0;i<appsInfo.length;i++){if(appsInfo[i].name=='WordCount'){appId=appsInfo[i].id;break}}if(appId!=undefined){alert=_topic['applications.'+appId]['state']!='RUNNING'}alert;",
   "email":"phil@company.com, mike@company.com",
   "description": "WordCount Application is not running",
   "timeThresholdMillis":"60000",
   "disabled":"false"
}
```

## Deleting an alert

We can delete an alert with the DELETE REST API request:

**DELETE /ws/v2/systemAlerts/alerts/{name}**

## Alerts history

We can get the alerts history with the GET REST API request:

**GET /ws/v2/systemAlerts/history**

It returns a result of the following form:

```json
{
"history": [{
    "name": "xyz",
    "inTime": "1481235199598",
    "outTime": "1481235251088",
    "message": "No.of apps running is more than 5"
},{
    "name": "checkCsvParserNotRunning",
    "inTime": "1481235251087",
    "outTime": "1481235549648",
    "message": "Application is not running"
}],
}
```
The alert history comprises the alert name, time it became active (`inTime`), time it
became inactive (`outTime`) and message. The alert history is obtained through the gateway,
so whenever gateway is restarted the alerts history gets cleared.

## Viewing the content and the status of alerts

We can get the content and status of alerts with the GET REST API web request:

**GET /ws/v2/systemAlerts/alerts/{name}**

It returns a result of the following form:

```json
{
 "name": "checkLatencyApp",
 "condition": "var alert=false;var appId=undefined;var appsInfo=_topic['applications'].apps;for(i=0;i<appsInfo.length;i++){if(appsInfo[i].name=='xyzApp'){appId=appsInfo[i].id;break}}if(appId!=undefined){var expTopic='applications.'+appId+'.physicalOperators';var operators=_topic[expTopic].operators;for(i=0;(i<operators.length);++i){if(operators[i].latencyMA>50){alert=true;break}}}alert;",
 "email": "phil@company.com, mike@company.com",
 "description": "checking latency > 50",
 "timeThresholdMillis": "10000",
 "disabled":"false",
 "alertStatus": {
   "isInAlert": true,
   "inTime": "1481264665450",
   "emailSent": true,
   "message": "checking latency > 50"
  }
}
```

The result includes the alert name, condition, email addresses, description, duration and enabled/disabled status.
It also includes alert status info such as `isInAlert` which indicates whether it is still active
or not, `inTime` which represents the time the alert became active, `emailSent` which,
as the name suggests, indicates if email was sent, and `message` which is similar to the
description.

## Viewing all the current data in the `_topic` array
This section is already covered under **Alerts and Topics** .
