# Kafka to Database Sync Application

## Summary

This application template demonstrates continuous big data sync from a source to destination while reading data messages from a configured Kafka topic. This could be easily utilized and extended by any developer to create a fast,  fault tolerant and scalable Big Data Sync or Retention Application to serve business with continuous data.

## Quick links

-  <a
    href="../common/import-launch"  class="docs" id="docs" ga-track="docs"
    target="_blank">How to import and launch an app-template</a>

-  <a
    href="../common/customize"  class="docs" id="docs" ga-track="docs"
    target="_blank">How to customize an app-template</a>

-  <a
    href="https://github.com/DataTorrent/moodI/tree/master/app-templates/kafka-to-database-sync"  class="docs" id="docs" ga-track="docs"
    target="_blank">README for the application</a>
- <a
   href="https://github.com/DataTorrent/moodI/tree/master/app-templates/kafka-to-database-sync"  class="github" id="github" ga-track="github" target="_blank">Source code</a>

- Please send feedback or feature requests to :
    <a href="mailto:feedback@datatorrent.com"  class="feedback" id="feedback" ga-track="feedback">feedback@datatorrent.com</a>

- Join our user discussion group at :
    <a href="mailto:dt-users@googlegroups.com"  class="maillist" id="maillist" ga-track="maillist">dt-users@googlegroups.com</a>

## Required Properties
End user must specify the values for these properties.

|Property|Type|Example|Notes|
|---|---|-----|--|
|Csv Parser Schema|String|{  "separator": "&#124;",  "quoteChar": "\"",   "fields": [{"name": "accountNumber","type": "Integer"} ,{"name": "name","type": "String"},{"name": "amount","type": "Integer"}]}| JSON representing schema to be used by CSV parser
|Jdbc Output Database Url|String|jdbc:postgresql://dest1 .corp1.com:5432/testdb| Connection URL for the destination database.
|Jdbc Output Store Password|String|postgres| Password for destination database|
|Jdbc Output Store Username|String|postgres| Username for destination database|
|Jdbc Output Table Name|String|test_event_output_table|Destination table name|
|Kafka Broker List|String|<ul><li>localhost:9092</li><li>node1.corp1.com:9092, node2.corp1.com:9092</li></ul>|Comma seperated list of kafka brokers|
|Kafka Topic Name|String|transactions|Topic names on Kakfa|


## Advanced Properties (optional)
|Property|Default|Type|Example|Notes|
|--------|-------|----|-------|-----|
|Initial Offset Of Topic For Kafka Consumer|LATEST|String|<ul><li>EARLIEST</li><li>LATEST</li><li>APPLICATION_OR_EARLIEST</li><li>APPLICATION_OR_LATEST</li></ul>|Whether to read from beginning or read from current offset.
|Jdbc Output Database Driver|org.postgresql .Driver|String||FQCN for jdbc driver class for destination database|
|Transform Expression Info|{"accountNumber":"{$.accountNumber}", "name":"{$.name}.toUpperCase()", "amount":"{$.amount}"}|String|| JSON map with key indicating output field. Value indicating expression to be used for calculating its value|
|Transform Output field Info|{"accountNumber":"INTEGER", "name":"STRING", "amount":"INTEGER"}|String||JSON map with key indicating output field. Value indicating data [type](https://github.com/DataTorrent/moodI/blob/master/operators/library/src/main/java/com/datatorrent/lib/schemaAware/JsonParser.java#L25) for the field.|
