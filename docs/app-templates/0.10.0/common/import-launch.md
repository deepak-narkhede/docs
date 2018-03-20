# How to import and launch an app-template

This document has step-by-step guide on how to import and launch app-template.

## <a name="steps_to_launch">Steps to launch application</a>

1. Click on the AppFactory tab from the top navigation bar.
   ![AppHub link from top navigation bar](../../images/common/apphub_link.png)

1. Page listing the verticals for different use-cases is displayed. Navigating to the desired vertical shows available suites of applications for that vertical.

1. Navigating to the desired suite shows available applications in the suite.

   ![AppHub search for Kafka](../../images/common/app-listing.png)

   Click on `import` link for the desired application.

1. Notification is displayed on the top right corner after application package is successfully
   imported.
   ![App import Notification](../../images/common/import-notification.png)

1. Click on the link in the notification which navigates to the page for this application package.
   ![App details page](../../images/common/app-details-page.png)
   Detailed information about the application package like version, last modified time, and short description is available on this page. Applications in this application package will be displayed in the table. Click on the `launch` button for the desired application. In the confirmation modal, click the `Configure` button.

1. <a name="launch-dialogue"></a>Launch page for the application configuration is displayed.  ![Launch page](../../images/common/launch.png)
    Fill in the required properties for the application configuration. For more details, please refer to properties section in the documentation for the respective app.

1. Advanced properties for the application have preset default values. Thus, changing these values is optional. But, if required you can change these properties for fine tuning the application.  
   Under optional properties section, click on down arrow button and then click on `default properties`.
![optional-properties](../../images/common/optional.png)

1. When you are finished inputting application configuration properties, click on the `save` button on the top right corner of the page to save the configuration.

1. Click on the `launch` button on top right corner of the page to launch the application.
A notification will be displayed on the top right corner after application is launched successfully and includes the Application ID which can be used to monitor this instance and find its logs.
   ![Application launch no tification](../../images/common/app_launch_notification.png)

1. Click on the `Monitor` tab from the top navigation bar.
   ![Monitor tab](../../images/common/monitor_link.png)

1. A page listing all running applications is displayed. Search for current application based on name or application id or any other relevant field. Click on the application name or id to navigate to application instance details page.
   ![Apps monitor listing](../../images/common/apps_monitor_listing.png)

1. Application instance details page shows key metrics for monitoring the application status.
   `logical` tab shows application DAG, Stram events, operator status based on logical operators, stream status, and a chart with key metrics.
   ![Logical tab](../../images/common/logical.png)

1. `physical` tab shows the status of physical instances of the operator, containers etc.
   ![Physical tab](../../images/common/physical.png)

1. To look at the details of specific container and to monitor logs, stout, stderr etc. container details page can be reached from the container link in the physical tab.
      ![Container details page](../../images/common/container-details.png)
