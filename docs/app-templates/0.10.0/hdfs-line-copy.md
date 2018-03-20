# HDFS line copy Application

## Summary

This application demonstrates data preparation pipeline which reads lines from files on source HDFS. It performs customized filtering, transformations on the line and writes them into destination HDFS.

## Quick links

-  <a
    href="../common/import-launch"  class="docs" id="docs" ga-track="docs"
    target="_blank">How to import and launch an app-template</a>

-  <a
    href="../common/customize"  class="docs" id="docs" ga-track="docs"
    target="_blank">How to customize an app-template</a>

-  <a
    href="https://github.com/DataTorrent/moodI/tree/master/app-templates/hdfs-line-copy"  class="docs" id="docs" ga-track="docs"
    target="_blank">README for the application</a>
- <a
   href="https://github.com/DataTorrent/moodI/tree/master/app-templates/hdfs-line-copy"  class="github" id="github" ga-track="github" target="_blank">Source code</a>

- Please send feedback or feature requests to :
    <a href="mailto:feedback@datatorrent.com"  class="feedback" id="feedback" ga-track="feedback">feedback@datatorrent.com</a>

- Join our user discussion group at :
    <a href="mailto:dt-users@googlegroups.com"  class="maillist" id="maillist" ga-track="maillist">dt-users@googlegroups.com</a>

## Required Properties
End user must specify the values for these properties.

|Property|Type|Example|Notes|
|---|---|-----|--|
|Input Directory Or File Path|String|<ul><li>/user/appuser/input /directory1</li><li>/user/appuser /input/file2.log</li><li>hdfs://node1.corp1 .com/user/user1 /input</li></ul>|HDFS path for input file or directory
|Output Directory Path|String|/user/appuser/output|HDFS path for the output directory. Generally, this refers to path on the hadoop cluster on which app is running.|
|Output File Name|String|output.txt| Name of the output file. This name will be appended with suffix for each part.|

## Advanced Properties (optional)
|Property|Default|Type|Notes|
|--------|-------|----|-----|
|Block Size For Hdfs Splitter| 1048576 (1MB)|long|No of bytes record reader operator would consider at a time for splitting records. Record reader might add latencies for higher block sizes. Suggested value is 1-10 MB|
|Csv Formatter Schema| {      "separator": "&#124;",      "quoteChar": "\"",      "lineDelimiter":"",      "fields": [      {      "name": "accountNumber",      "type": "Integer"      },      {      "name": "name",      "type": "String"      },      {      "name": "amount",      "type": "Integer"      }      ]      }|String|JSON string defining schema for CSV formatter|
|Csv Parser Schema|{      "separator": "&#124;",      "quoteChar": "\"",      "fields": [      {      "name": "accountNumber",      "type": "Integer"      },      {      "name": "name",      "type": "String"      },      {      "name": "amount",      "type": "Integer"      }      ]      }|String|JSON string defining schema for CSV parser|
|Number Of Blocks Per Window| 1|int|File splitter will emit these many blocks per window for downstream operators. |
|Number Of Readers For Partitioning| 2|int|Blocks reader operator would be partioned into these many partitions. |
|Tuple Class Name For Csv Parser Output| com.datatorrent.apps.PojoEvent|String|FQCN for the tuple object to be emitted by CSV Parser |
|Tuple Class Name For Formatter Input| com.datatorrent.apps.PojoEvent|String|FQCN for the tuple object to be consumed by CSV formatter |
|Tuple Class Name For Transform Input| com.datatorrent.apps.PojoEvent|String|FQCN for the tuple object to be consumed by Transform operator |
|Tuple Class Name For Transform Output| com.datatorrent.apps.PojoEvent|String|FQCN for the tuple object to be emitted by Transform operator |

## Notes

- Application is pre-configured for pre-defined schema mentioned [here](https://github.com/DataTorrent/moodI/blob/master/app-templates/hdfs-line-copy/src/main/java/com/datatorrent/apps/PojoEvent.java). For using this application for custom schema objects; changes will be needed in the configuration.

- [PojoEvent]( https://github.com/DataTorrent/moodI/blob/master/app-templates/hdfs-line-copy/src/main/java/com/datatorrent/apps/PojoEvent.java) is the POJO (plain old java objects used for representing record present in the database row). One can define custom class to represent custom schema and include it in the classpath. [Configuration package](http://docs.datatorrent.com/configuration_packages/) can be used for this purpose.
