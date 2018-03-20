# HDFS to HDFS filter transform Application

## Summary

This application template demonstrates continuous big data preparation while reading data from a source Hadoop cluster. This data is considered to be in delimited format, which is further filtered, transformed based on configurable properties. Finally, this prepared data is written back in a desired format to the destination Hadoop cluster. This could be easily utilized and extended by any developer to create a fast, fault tolerant and scalable Big Data Application to serve business with rich data.

## Quick links

-  <a
    href="../common/import-launch"  class="docs" id="docs" ga-track="docs"
    target="_blank">How to import and launch an app-template</a>

-  <a
    href="../common/customize"  class="docs" id="docs" ga-track="docs"
    target="_blank">How to customize an app-template</a>

-  <a
    href="https://github.com/DataTorrent/moodI/tree/master/app-templates/hdfs-to-hdfs-filter-transform"  class="docs" id="docs" ga-track="docs"
    target="_blank">README for the application</a>
- <a
   href="https://github.com/DataTorrent/moodI/tree/master/app-templates/hdfs-to-hdfs-filter-transform"  class="github" id="github" ga-track="github" target="_blank">Source code</a>

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

## Advanced Properties (optional)
|Property|Default|Type|Notes|
|--------|-------|----|-----|
|Block Size For Hdfs Splitter| 1048576 (1MB)|long|No of bytes record reader operator would consider at a time for splitting records. Record reader might add latencies for higher block sizes. Suggested value is 1-10 MB|
|Maximum Readers For Dynamic Partitioning| 1|int|Maximum no of partitions for Block Reader operator. |
|Minimum Readers For Dynamic Partitioning| 1|int|Maximum no of partitions for Block Reader operator. |
|Number Of Blocks Per Window| 1|int|File splitter will emit these many blocks per window for downstream operators. |
