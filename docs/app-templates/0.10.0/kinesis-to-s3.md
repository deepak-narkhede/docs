# Kinesis to S3 application

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
    href="https://github.com/DataTorrent/moodI/tree/master/app-templates/kinesis-to-s3"  class="docs" id="docs" ga-track="docs"
    target="_blank">README for the application</a>
- <a
   href="https://github.com/DataTorrent/moodI/tree/master/app-templates/kinesis-to-s3"  class="github" id="github" ga-track="github" target="_blank">Source code</a>

- Please send feedback or feature requests to :
    <a href="mailto:feedback@datatorrent.com"  class="feedback" id="feedback" ga-track="feedback">feedback@datatorrent.com</a>

- Join our user discussion group at :
    <a href="mailto:dt-users@googlegroups.com"  class="maillist" id="maillist" ga-track="maillist">dt-users@googlegroups.com</a>

## Required Properties
End user must specify the values for these properties.

|Property|Type|Example|Notes|
|---|---|-----|--|
|S3Output Bucket Name|String|com.example.app.s3| Bucket name for AWS S3 output|
|S3Output Directory Path|String|kinesis_to_s3| Output directory for AWS S3|
|Access Key For Kinesis Input|String|ACCESS_XXX_KEY_XX_ID| AWS credentials access key id for kinesis|
|Access Key For S3Output|String|ACCESS_XXX_KEY_XX_ID| AWS credentials access key id for S3 output|
|End Point For Kinesis Input|String|kinesis.us-east-1.amazonaws.com| AWS service end-point for Kinesis|
|Kinesis Access Key|String|ACCESS_XXX_KEY_XX_ID| AWS credentials access key id for kinesis|
|Secret Access Key For S3Output|String|8your+own0+AWS0 secret1230+8key8goes0here| AWS Secret access key for accessing S3 output.|
|Secret Key For Kinesis Input|String|8your+own0+AWS0 secret1230+8key8goes0here| AWS Secret access key for accessing Kinesis.
|Stream Name For Kinesis Input|String|events|Stream name to read data from Kinesis|

## Advanced Properties (optional)
|Property|Default|Type|Notes|
|--------|-------|----|-----|
|Size Of S3File In Bytes|134217728 (128 MB)|long|Output files on S3 will be rolled over to new files after this size is reached.|
|Csv Parser Schema| {"separator":"&#124;" ,"quoteChar":"\"", "fields": [{"name":"accountNumber" ,"type":"Integer"}, {"name":"name", "type":"String"}, {"name": "amount", "type":"Integer"}]}|String| JSON representing schema to be used by CSV parser|
|Csv Formatter Schema|{"separator":"&#124;","quoteChar": "\"","fields":[{"name":"accountNumber", "type":"Integer"}, {"name":"name", "type":"String"}, {"name":"amount", "type":"Integer"}]}|String| JSON representing schema for objects given to CSV formatter.
|Tuple Class Name For Csv Parser Output| com.datatorrent. apps.PojoEvent|String|POJO class representing input row|
|Tuple Class Name For Formatter Input| com.datatorrent. apps.PojoEvent |String | POJO class representing input row for formatter|
|Tuple Class Name For Transform Input| com.datatorrent. apps.PojoEvent | String |POJO class representing input for transform operator (if included in the DAG. Not included by default).|
|Tuple Class Name For Transform Output| com.datatorrent. apps.PojoEvent | String | POJO class representing output for transform operator (if included in the DAG. Not included by default).|
