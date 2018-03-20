# Kinesis to Redshift application

## Summary

This application template demonstrates continuous big data sync from a source to destination while reading data messages from a configured Kinesis stream. This could be easily utilized and extended by any developer to create a fast,  fault tolerant and scalable Big Data Sync or Retention Application to serve business with continuous data.

## Quick links

-  <a
    href="../common/import-launch"  class="docs" id="docs" ga-track="docs"
    target="_blank">How to import and launch an app-template</a>

-  <a
    href="../common/customize"  class="docs" id="docs" ga-track="docs"
    target="_blank">How to customize an app-template</a>

-  <a
    href="https://github.com/DataTorrent/moodI/tree/master/app-templates/kinesis-to-redshift"  class="docs" id="docs" ga-track="docs"
    target="_blank">README for the application</a>
- <a
   href="https://github.com/DataTorrent/moodI/tree/master/app-templates/kinesis-to-redshift"  class="github" id="github" ga-track="github" target="_blank">Source code</a>

- Please send feedback or feature requests to :
    <a href="mailto:feedback@datatorrent.com"  class="feedback" id="feedback" ga-track="feedback">feedback@datatorrent.com</a>

- Join our user discussion group at :
    <a href="mailto:dt-users@googlegroups.com"  class="maillist" id="maillist" ga-track="maillist">dt-users@googlegroups.com</a>

## Required Properties
End user must specify the values for these properties.

|Property|Type|Example|Notes|
|---|---|-----|--|
|Kinesis Access Key|String|ACCESS_XXX_KEY_XX_ID| AWS credentials access key id for kinesis|
|Kinesis Endpoint|String|kinesis.us-east-1.amazonaws.com| AWS service end-point for Kinesis
|Kinesis Secret Key|String|8your+own0+AWS0 secret1230+8key8goes0here| AWS Secret Key for accessing Kinesis.
|Kinesis Stream Name|String|events|Stream name to read data from Kinesis|
|Redshift Access Key|String|ACCESS_XXX_KEY_XX_ID| AWS credentials access key id for redshift|
|Redshift Secret Key|String|8your+own0+AWS0 secret1230+8key8goes0here| AWS Secret Key for accessing Redshift.
|Region Of Input File|String|ap-southeast-1| Region for the intermediate S3 storage.|
|Jdbc Output Database Driver|String|com.amazon.redshift .jdbc4.Driver| FQCN for Redshift JDBC output database driver.
|Jdbc Output Database Url|String|jdbc:redshift://examplecluster .example123id.us-east-1 .redshift.amazonaws.com:5439/dev| Connection URL for redshift|
|Jdbc Output Store Password|String|password| Password for redshift store instance.
|Jdbc Output Store Username|String|username| Username for redshift store instance.
|Jdbc Output Table Name|String|events| table to be used from redshift store instance.

## Advanced Properties (optional)
|Property|Default|Type|Example|Notes|
|--------|-------|----|-------|-----|
|Emr Cluster Id|EMR-CLUSTERID|String||Cluster id for EMR.|
|Redshift Delimiter|&#124;|String| |Delimiter to be used for redshift output|
|Redshift Reader Mode|READ_FROM_S3|String| <ul><li>READ_FROM_S3</li><li>READ_FROM_EMR</li></ul>|Choose preferred intermediate store. S3 or HDFS.
|S3Bucket Name|S3_BUCKET_NAME|String||Bucket name for intermediate storage|
|S3Directory Name|S3_DIRECTORY_NAME|String||Directory name for intermediate storage|
|Batch Size For Jdbc Output|500|String||Number rows to push into redshift in single query|
|Max Length Of Rolling File|1048576 (1 MB)|String||Maximums size in bytes for files on intermediate storage.|
|Tuple Class Name For Jdbc Output|com.datatorrent .apps.PojoEvent|String|com.datatorrent .apps.PojoEvent|FQCN for tuples written on redshift|
