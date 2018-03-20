Operator Library
================

The following operators, classified into four groups, are available:

- Input
    + TCP Input Operator [Guide](operators/tcpinputoperator.md)
    + Event Hub Input Operator [Guide](operators/eventhubinput.md)
    + Kafka Input [Guide](http://apex.apache.org/docs/malhar/operators/kafkaInputOperator/)
      and [Java Doc](https://ci.apache.org/projects/apex-malhar/apex-malhar-javadoc-release-3.6/com/datatorrent/contrib/kafka/KafkaSinglePortStringInputOperator.html)
    + HDFS Input [Guide](http://apex.apache.org/docs/malhar/operators/fsInputOperator/)
      and [Java Doc](https://ci.apache.org/projects/apex-malhar/apex-malhar-javadoc-release-3.6/com/datatorrent/demos/wordcount/LineReader.html)
    + HDFS Input for large files [Guide](http://apex.apache.org/docs/malhar/operators/file_splitter/)
      and [Java Doc](https://ci.apache.org/projects/apex-malhar/apex-malhar-javadoc-release-3.6/com/datatorrent/lib/io/fs/FileSplitter.html)
    + JDBC Input [Guide](https://github.com/apache/apex-malhar/blob/master/docs/operators/jdbcPollInputOperator.md)
       and [Java Doc](https://ci.apache.org/projects/apex-malhar/apex-malhar-javadoc-release-3.6/com/datatorrent/lib/db/jdbc/JdbcPollInputOperator.html)
    + JMS Input [Guide](http://apex.apache.org/docs/malhar/operators/jmsInputOperator/)
      and [Java Doc](https://ci.apache.org/projects/apex-malhar/apex-malhar-javadoc-release-3.6/com/datatorrent/lib/io/jms/JMSStringInputOperator.html)

- Process
    + PMML Operator [Guide](operators/PMML_operator.md)
    + Drools Operator [Guide](operators/drools_operator.md)
    + Block Reader [Guide](http://apex.apache.org/docs/malhar/operators/block_reader/)
      and [Java Doc](https://ci.apache.org/projects/apex-malhar/apex-malhar-javadoc-release-3.6/com/datatorrent/contrib/parser/AbstractBlockReader.html)
    + CSV Parser [Guide](http://apex.apache.org/docs/malhar/operators/csvParserOperator/)
      and [Java Doc](https://ci.apache.org/projects/apex-malhar/apex-malhar-javadoc-release-3.6/com/datatorrent/contrib/parser/CsvParser.html)
    + JSON Parser [Guide](http://apex.apache.org/docs/malhar/operators/jsonParser/)
      and [Java Doc](https://ci.apache.org/projects/apex-malhar/apex-malhar-javadoc-release-3.6/com/datatorrent/contrib/parser/JsonParser.html)
    + JSON Formatter  [Guide](http://apex.apache.org/docs/malhar/operators/jsonFormatter/)
      and [Java Doc](https://ci.apache.org/projects/apex-malhar/apex-malhar-javadoc-release-3.6/com/datatorrent/lib/formatter/JsonFormatter.html)
    + Deduper  [Guide](http://apex.apache.org/docs/malhar/operators/deduper/)
      and [Java Doc](https://ci.apache.org/projects/apex-malhar/apex-malhar-javadoc-release-3.6/org/apache/apex/malhar/lib/dedup/AbstractDeduper.html)
    + Enrich [Guide](http://apex.apache.org/docs/malhar/operators/enricher/)
      and [Java Doc](https://ci.apache.org/projects/apex-malhar/apex-malhar-javadoc-release-3.6/com/datatorrent/contrib/enrich/AbstractEnricher.html)
    + Filter  [Guide](http://apex.apache.org/docs/malhar/operators/filter/)
      and [Java Doc](https://ci.apache.org/projects/apex-malhar/apex-malhar-javadoc-release-3.6/com/datatorrent/lib/filter/FilterOperator.html)
    + Transform  [Guide](http://apex.apache.org/docs/malhar/operators/transform/)
      and [Java Doc](https://ci.apache.org/projects/apex-malhar/apex-malhar-javadoc-release-3.6/com/datatorrent/lib/filter/TransformOperator.html)

- Output
    + Elasticsearch Output Operator [Guide](operators/elasticsearch.md)
    + Event Hub Output Operator [Guide](operators/eventhuboutput.md)
    + Azure Blob Output Operator [Guide](operators/azure_blob.md)
    + HDFS Output [Guide](http://apex.apache.org/docs/malhar/operators/file_output)
      and [Java Doc](https://ci.apache.org/projects/apex-malhar/apex-malhar-javadoc-release-3.6/com/datatorrent/lib/io/fs/AbstractFileOutputOperator.html)
    + JMS Output [Guide](http://apex.apache.org/docs/malhar/operators/jmsMultiPortOutputOperator/)
      and [Java Doc](https://ci.apache.org/projects/apex-malhar/apex-malhar-javadoc-release-3.6/com/datatorrent/lib/io/jms/JMSMultiPortOutputOperator.html)
      
- Input/Output
    + AbstractHttpServer Operator [Guide](operators/abstracthttpserver.md)
