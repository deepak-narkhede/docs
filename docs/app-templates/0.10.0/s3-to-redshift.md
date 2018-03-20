# S3 to Redshift application

## Summary

This application template demonstrates continuous big data sync from a source to destination while scanning data from a configured S3 bucket. This could be easily utilized and extended by any developer to create a fast,  fault tolerant and scalable Big Data Sync, Preparation or Retention Application to serve business with rich continuous data.

## Quick links

-  <a
    href="../common/import-launch"  class="docs" id="docs" ga-track="docs"
    target="_blank">How to import and launch an app-template</a>

-  <a
    href="../common/customize"  class="docs" id="docs" ga-track="docs"
    target="_blank">How to customize an app-template</a>

-  <a
    href="https://github.com/DataTorrent/moodI/tree/master/app-templates/s3-to-redshift"  class="docs" id="docs" ga-track="docs"
    target="_blank">README for the application</a>
- <a
   href="https://github.com/DataTorrent/moodI/tree/master/app-templates/s3-to-redshift"  class="github" id="github" ga-track="github" target="_blank">Source code</a>

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
|Files For Scanning|String|/path/to/input| Directory path within S3 bucket|
|Jdbc Driver Of Redshift|String|com.amazon.redshift .jdbc4.Driver| FQCN for Redshift JDBC output database driver.
|Jdbc Url Of Redshift|String|jdbc:redshift://examplecluster .example123id.us-east-1 .redshift.amazonaws.com:5439/dev| Connection URL for redshift|
|Region For S3Or EMR|String|ap-southeast-1| Region for S3 used for intermediate storage|
|Secret Key For S3Input|String|8your+own0+AWS0 secret1230+8key8goes0here| AWS Secret access key for accessing S3 input.|
|Table Name For Redshift|String|events| table to be used from redshift store instance.
|User Name To Connect Redshift|String|username| Username for redshift store instance.
|User Password To Connect Redshift|String|password| Password for redshift store instance.

## Advanced Properties (optional)
|Property|Default|Type|Example|Notes|
|--------|-------|----|-------|-----|
|Redshift Delimiter|&#124;|String| , |Delimiter to be used for redshift output|
|Redshift Reader Mode|READ_FROM_S3|String| <ul><li>READ_FROM_S3</li><li>READ_FROM_EMR</li></ul>|Choose preferred intermediate store. S3 or HDFS.
|Block Reader Size For S3Input|1048576 (1 MB)|long||Size of data chunk to be read in single request from S3.|
|Bucket Name For Redshift In S3|dummyBucket|String||Bucket name for intermediate storage|
|Cluster Id For Redshift|EMR-CLUSTERID|String||Cluster id for EMR.|
|S3Directory Name|S3_DIRECTORY_NAME|String||Directory name for intermediate storage|
|Csv Parser Schema| {"separator":"&#124;" ,"quoteChar":"\"", "fields": [{"name":"accountNumber" ,"type":"Integer"}, {"name":"name", "type":"String"}, {"name": "amount", "type":"Integer"}]}|String|| JSON representing schema to be used by CSV parser|
|Csv Formatter Schema|{"separator":"&#124;","quoteChar": "\"","fields":[{"name":"accountNumber", "type":"Integer"}, {"name":"name", "type":"String"}, {"name":"amount", "type":"Integer"}]}|String| |JSON representing schema for objects given to CSV formatter.
|Max Length Of Rolling File|1048576 (1 MB)|String||Maximums size in bytes for files on intermediate storage.|
|Number Of Blocks Per Window|1|int||Limit to control number of blocks emitted to downstream operators.|
|Number Of Readers For Partitioning|2|int||Limit to control number of blocks emitted to downstream operators.|
|Tuple Class Name For Csv Parser Output| com.datatorrent. apps.PojoEvent|String| com.datatorrent. apps.PojoEvent|POJO class representing input row|
|Tuple Class Name For Formatter Input| com.datatorrent. apps.PojoEvent |String| com.datatorrent. apps.PojoEvent | POJO class representing input row for formatter|
|Tuple Class Name For Transform Input| com.datatorrent. apps.PojoEvent | String| com.datatorrent. apps.PojoEvent |POJO class representing input for transform operator (if included in the DAG. Not included by default).|
|Tuple Class Name For Transform Output| com.datatorrent. apps.PojoEvent | String| com.datatorrent. apps.PojoEvent | POJO class representing output for transform operator (if included in the DAG. Not included by default).|
