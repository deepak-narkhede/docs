# S3 to HDFS application

## Summary

This application template demonstrates continuous big data sync from a source to destination while reading blocks of data from a configured S3 bucket. This could be easily utilized and extended by any developer to create a fast,  fault tolerant and scalable Big Data Sync or Retention Application to serve business with continuous data.

## Quick links

-  <a
    href="../common/import-launch"  class="docs" id="docs" ga-track="docs"
    target="_blank">How to import and launch an app-template</a>

-  <a
    href="../common/customize"  class="docs" id="docs" ga-track="docs"
    target="_blank">How to customize an app-template</a>

-  <a
    href="https://github.com/DataTorrent/moodI/tree/master/app-templates/s3-to-hdfs-sync"  class="docs" id="docs" ga-track="docs"
    target="_blank">README for the application</a>
- <a
   href="https://github.com/DataTorrent/moodI/tree/master/app-templates/s3-to-hdfs-sync"  class="github" id="github" ga-track="github" target="_blank">Source code</a>

- Please send feedback or feature requests to :
    <a href="mailto:feedback@datatorrent.com"  class="feedback" id="feedback" ga-track="feedback">feedback@datatorrent.com</a>

- Join our user discussion group at :
    <a href="mailto:dt-users@googlegroups.com"  class="maillist" id="maillist" ga-track="maillist">dt-users@googlegroups.com</a>

## Required Properties
End user must specify the values for these properties.

|Property|Type|Example|Notes|
|---|---|-----|--|
|Access Key For S3Input|String|ACCESS_XXX_KEY_XX_ID| AWS credentials access key id for S3|
|Bucket Name For S3Input|String|com.example.app.s3| Bucket name for AWS S3 input|
|Input Directory Or File Path On S3|String|/path/to/input| Directory path within S3 bucket|
|Output Directory Path On HDFS| String| <ul><li>/user/dtuser /output/dir1</li><li>hdfs://node1.corp1.com /user/dtuser/output</li></ul>|HDFS path (absolute or relative)|
|Secret Key For S3Input|String|8your+own0+AWS0 secret1230+8key8goes0here| AWS Secret access key for accessing S3 input.|

## Advanced Properties (optional)
|Property|Default|Type|Notes|
|--------|-------|----|-----|
|Maximum Readers For Dynamic Partitioning|4|int|Maximum allowed partitions for Block Reader. Allocating more partitions is for scaling the application by allocating more resources to handle larger dataset|
|Number Of Blocks Per Window|16|int|Limit to control number of blocks emitted to downstream operators.|
