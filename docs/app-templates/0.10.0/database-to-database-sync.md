# Database to Database Sync Application

## Summary

This application demonstrates continuous archival of big data from database tables.
Application connects to the source database table over JDBC connection and continuously polls for new data. This database rows from source table are archieved in the destination database in scalable, fault-tolerent fashion. Application also allows to do custom transformations on the rows before they are copied to the destination.

## Quick links

-  <a
    href="../common/import-launch"  class="docs" id="docs" ga-track="docs"
    target="_blank">How to import and launch an app-template</a>

-  <a
    href="../common/customize"  class="docs" id="docs" ga-track="docs"
    target="_blank">How to customize an app-template</a>

-  <a
    href="https://github.com/DataTorrent/moodI/tree/master/app-templates/database-to-database-sync"  class="docs" id="docs" ga-track="docs"
    target="_blank">README for the application</a>
- <a
   href="https://github.com/DataTorrent/moodI/tree/master/app-templates/database-to-database-sync"  class="github" id="github" ga-track="github" target="_blank">Source code</a>

- Please send feedback or feature requests to :
    <a href="mailto:feedback@datatorrent.com"  class="feedback" id="feedback" ga-track="feedback">feedback@datatorrent.com</a>

- Join our user discussion group at :
    <a href="mailto:dt-users@googlegroups.com"  class="maillist" id="maillist" ga-track="maillist">dt-users@googlegroups.com</a>

## Required Properties
End user must specify the values for these properties.

|Property|Type|Example|Notes|
|---|---|-----|--|
|Jdbc Input Database Url|String|jdbc:postgresql://node1 .corp1.com:5432/testdb| Connection URL for the source database.
|Jdbc Input Store Password|String|postgres| Password for source database|
|Jdbc Input Store Username|String|postgres| Username for source database|
|Jdbc Input Table Name|String|test_event_input_table|Source table name|
|Jdbc Output Database Url|String|jdbc:postgresql://dest1 .corp1.com:5432/testdb| Connection URL for the destination database.
|Jdbc Output Store Password|String|postgres| Password for destination database|
|Jdbc Output Store Username|String|postgres| Username for destination database|
|Jdbc Output Table Name|String|test_event_output_table|Destination table name|

## Advanced Properties (optional)
|Property|Default|Type|Example|Notes|
|--------|-------|----|-------|-----|
|Batch Size For Jdbc Input|300|int|1000|No of rows to fetch in single query for input.|
|Columns Expressions|ACCOUNT_NO, NAME, AMOUNT|String|column1_name, column2_name, column3_name|Comma separated list of columns to select from the source table.|
|Jdbc Input Database Driver|org.postgresql .Driver|String|org.postgresql .Driver|FQCN for jdbc driver class for source database|
|Jdbc Output Database Driver|org.postgresql .Driver|String|org.postgresql .Driver|FQCN for jdbc driver class for destination database|
|Number Of Partition Required| 4|int|2|Number of partitions for reading data from JDBC source database. There will one additional partition used for polling the databse.|
|Tuple Class Name For Jdbc Input| com.datatorrent. apps.PojoEvent|String|com.datatorrent. apps.PojoEvent|POJO class representing input database row|
|Tuple Class Name For Jdbc Output| com.datatorrent. apps.PojoEvent |String |com.datatorrent. apps.PojoEvent| POJO class representing input database row.|
|Tuple Class Name For Transform Input| com.datatorrent. apps.PojoEvent | String | com.datatorrent. apps.PojoEvent | POJO class representing input for transform operator (if included in the DAG. Not included by default).|
|Tuple Class Name For Transform Output| com.datatorrent. apps.PojoEvent | String | com.datatorrent. apps.PojoEvent | POJO class representing output for transform operator (if included in the DAG. Not included by default).|
|Unique Key For Range Queries| ACCOUNT_NO | String| id | Column to be used for partitioning.|
|Where Condition| |String| |Where condition used for filtering rows from source table. Empty string indicates select all rows.|

## Notes

- Application is configured for pre-defined schema mentioned [here](https://github.com/DataTorrent/moodI/blob/master/app-templates/database-to-database-sync/src/main/java/com/datatorrent/apps/PojoEvent.java). For using this application for custom schema objects; changes will be needed in [Application.java](https://github.com/DataTorrent/moodI/blob/master/app-templates/database-to-database-sync/src/main/java/com/datatorrent/apps/Application.java#L105-L140). One can define field info mapping for the input fields in [addInputFieldInfos()]( https://github.com/DataTorrent/moodI/blob/master/app-templates/database-to-database-sync/src/main/java/com/datatorrent/apps/Application.java#L105-L120). Simillarly,
field info mapping for the output fields can be defined in  [addOutputFieldInfos()](https://github.com/DataTorrent/moodI/blob/master/app-templates/database-to-database-sync/src/main/java/com/datatorrent/apps/Application.java#L126-L141).

- [PojoEvent]( https://github.com/DataTorrent/moodI/blob/master/app-templates/database-to-database-sync/src/main/java/com/datatorrent/apps/PojoEvent.java) is the POJO (plain old java objects used for representing record present in the database row). One can define custom class to represent custom schema and include it in the classpath. [Configuration package](http://docs.datatorrent.com/configuration_packages/) can be used for this purpose.

- This application has been tested with PostgreSQL database. But, this can be used on other databases like MySQL, Oracle etc provided that JDBC client jar for the same is available in the classpath. Please specify `Jdbc Input Database Driver`, `Jdbc Output Database Driver` properties to point to respective driver class for the database you are connecting to.
