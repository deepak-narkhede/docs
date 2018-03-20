# Kafka to Cassandra Filter Transform Application

## Summary

This application template demonstrates continuous big data preparation while reading data messages from a configured Kafka topic. This data is considered to be in JSON format, which is further filtered, transformed based on configurable properties. Finally, this prepared message is written to a Cassandra  .

## Quick links

-  <a
    href="../common/import-launch"  class="docs" id="docs" ga-track="docs"
    target="_blank">How to import and launch an app-template</a>

-  <a
    href="../common/customize"  class="docs" id="docs" ga-track="docs"
    target="_blank">How to customize an app-template</a>

-  <a
    href="https://github.com/DataTorrent/moodI/tree/master/app-templates/kafka-to-cassandra-filter-transform"  class="docs" id="docs" ga-track="docs"
    target="_blank">README for the application</a>
- <a
   href="https://github.com/DataTorrent/moodI/tree/master/app-templates/kafka-to-cassandra-filter-transform"  class="github" id="github" ga-track="github" target="_blank">Source code</a>

- Please send feedback or feature requests to :
    <a href="mailto:feedback@datatorrent.com"  class="feedback" id="feedback" ga-track="feedback">feedback@datatorrent.com</a>

- Join our user discussion group at :
    <a href="mailto:dt-users@googlegroups.com"  class="maillist" id="maillist" ga-track="maillist">dt-users@googlegroups.com</a>

## Required Properties
End user must specify the values for these properties.

|Property|Type|Example|Notes|
|---|---|-----|--|
|Cassandra Node Name|String|localhost| Host name for cassandra server
|Filter Condition For Tuples|String|({$}.getPremium() >= 50000)| Quasi java expression
|Key Space On Cassandra|String|testdb| Keyspace to be used for output
|Table Name|String|test_input| Name of the table on cassandra store
|Json Parser Field Info|String|{"policyNumber":"LONG", "customerName":"STRING",  "premium":"LONG"}| JSON map with key indicating input field. Value indicating data [type](https://github.com/DataTorrent/moodI/blob/master/operators/library/src/main/java/com/datatorrent/lib/schemaAware/JsonParser.java#L25) for the field.|
|Kafka Broker List|String|<ul><li>localhost:9092</li><li>node1.corp1.com:9092, node2.corp1.com:9092</li></ul>|Comma seperated list of kafka brokers|
|Kafka Topic Name|String|transactions|Topic names on Kakfa|
|Transform Expression Info|String|{"customerName":"{$} .getCustomerName() .toUpperCase()"}| JSON map with key indicating output field. Value indicating expression to be used for calculating its value|
|Transform Output field Info|String|{"policyNumber":"LONG", "customerName":"STRING", "premium":"LONG"}| JSON map with key indicating output field. Value indicating data [type](https://github.com/DataTorrent/moodI/blob/master/operators/library/src/main/java/com/datatorrent/lib/schemaAware/JsonParser.java#L25) for the field.|

## Advanced Properties (optional)
|Property|Default|Type|Example|Notes|
|--------|-------|----|-------|-----|
|Initial Offset Of Topic For Kafka Consumer|LATEST|String|<ul><li>EARLIEST</li><li>LATEST</li><li>APPLICATION_OR_EARLIEST</li><li>APPLICATION_OR_LATEST</li></ul>|Whether to read from beginning or read from current offset.
