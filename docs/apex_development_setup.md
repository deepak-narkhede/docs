Apache Apex Development Environment Setup
=========================================

This document discusses the steps needed for setting up a development environment for creating applications that run on the Apache Apex or the DataTorrent RTS streaming platform.


Microsoft Windows
------------------------------

There are a few tools that will be helpful when developing Apache Apex applications, some required and some optional:

1.  *git* -- A revision control system (version 1.7.1 or later). There are multiple git clients available for Windows (<http://git-scm.com/download/win> for example), so download and install a client of your choice.

2.  *java JDK* (not JRE). Includes the Java Runtime Environment as well as the Java compiler and a variety of tools (version 1.7.0\_79 or later). Can be downloaded from the Oracle website.

3.  *maven* -- Apache Maven is a build system for Java projects (version 3.0.5 or later). It can be downloaded from <https://maven.apache.org/download.cgi>.

4.  *VirtualBox* -- Oracle VirtualBox is a virtual machine manager (version 4.3 or later) and can be downloaded from <https://www.virtualbox.org/wiki/Downloads>. It is needed to run the DataTorrent Sandbox.

5.  *DataTorrent Sandbox* -- The sandbox can be downloaded from <https://www.datatorrent.com/download>. It is useful for testing simple applications since it contains Apache Hadoop and DataTorrent RTS pre-installed. If you have already installed a licensed version of DataTorrent RTS on a cluster, you can use that setup for deployment and testing instead of the sandbox.

6.  (Optional) If you prefer to use an IDE (Integrated Development Environment) such as *NetBeans*, *Eclipse* or *IntelliJ*, install that as well.


After installing these tools, make sure that the directories containing the executable files are in your PATH environment; for example, for the JDK executables like _java_ and _javac_, the directory might be something like `C:\Program Files\Java\jdk1.7.0\_80\bin`; for _git_ it might be `C:\Program Files\Git\bin`; and for maven it might be `C:\Users\user\Software\apache-maven-3.3.3\bin`. Open a console window and enter the command:

    echo %PATH%

to see the value of the `PATH` variable and verify that the above directories are present. If not, you can change its value clicking on the button at _Control Panel_ &#x21e8; _Advanced System Settings_ &#x21e8; _Advanced tab_ &#x21e8; _Environment Variables_.


Now run the following commands and ensure that the output is something similar to that shown in the table below:


<table>
<colgroup>
<col width="30%" />
<col width="70%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>Command</p></td>
<td align="left"><p>Output</p></td>
</tr>
<tr class="even">
<td align="left"><p><tt>javac -version</tt></p></td>
<td align="left"><p>javac 1.7.0_80</p></td>
</tr>
<tr class="odd">
<td align="left"><p><tt>java -version</tt></p></td>
<td align="left"><p>java version &quot;1.7.0_80&quot;</p>
<p>Java(TM) SE Runtime Environment (build 1.7.0_80-b15)</p>
<p>Java HotSpot(TM) 64-Bit Server VM (build 24.80-b11, mixed mode)</p></td>
</tr>
<tr class="even">
<td align="left"><p><tt>git --version</tt></p></td>
<td align="left"><p>git version 2.6.1.windows.1</p></td>
</tr>
<tr class="odd">
<td align="left"><p><tt>mvn --version</tt></p></td>
<td align="left"><p>Apache Maven 3.3.3 (7994120775791599e205a5524ec3e0dfe41d4a06; 2015-04-22T06:57:37-05:00)</p>
<p>Maven home: C:\Users\user\Software\apache-maven-3.3.3\bin\..</p>
<p>Java version: 1.7.0_80, vendor: Oracle Corporation</p>
<p>Java home: C:\Program Files\Java\jdk1.7.0_80\jre</p>
<p>Default locale: en_US, platform encoding: Cp1252</p>
<p>OS name: &quot;windows 8&quot;, version: &quot;6.2&quot;, arch: &quot;amd64&quot;, family: &quot;windows&quot;</p></td>
</tr>
</tbody>
</table>

Installing the Sandbox
----
The sandbox includes, as noted above, a complete, stand-alone, instance of the
Datatorrent RTS Enterprise Edition configured as a single-node Hadoop cluster. Please
see [DataTorrent RTS Sandbox](sandbox.md) for details on setting up the sandbox.

You can choose to develop either directly on the sandbox or on your development machine. The advantage of the former is that most of the tools (e.g. _jdk_, _git_, _maven_) are pre-installed and also the package files created by your project are directly available to the DataTorrent tools such as  **dtManage** and **Apex CLI**. The disadvantage is that the sandbox is a memory-limited environment so running a memory-hungry tool like a Java IDE on it may starve other applications of memory.


Creating a new Project
----
You can now use the maven archetype to create a basic Apache Apex project as follows: Put these lines in a Windows command file called, for example, `newapp.cmd` and run it (the
value for `archetypeVersion` can be a more recent version if available):

    @echo off
    @rem Script for creating a new application
    setlocal
    mvn -B archetype:generate ^
      -DarchetypeGroupId=org.apache.apex ^
      -DarchetypeArtifactId=apex-app-archetype ^
      -DarchetypeVersion=3.6.0-SNAPSHOT ^
      -DgroupId=com.example ^
      -Dpackage=com.example.myapexapp ^
      -DartifactId=myapexapp ^
      -Dversion=1.0-SNAPSHOT
    endlocal


The caret (^) at the end of some lines indicates that a continuation line follows.

This command will eventually become outdated, check the [apex-app-archetype README](https://github.com/apache/apex-core/blob/master/apex-app-archetype/README.md)
for the latest version, which includes the most recent archetypeVersion.

You can also, if you prefer, use an IDE to generate the project as described in
[Creating a New Apache Apex Project with your IDE](configure_IDE.md).

When the run completes successfully, you should see a new directory named `myapexapp` containing a maven project for building a basic Apache Apex application. It includes 3 source files:**Application.java**,  **RandomNumberGenerator.java** and **ApplicationTest.java**. You can now build the application by stepping into the new directory and running the appropriate maven command:

    cd myapexapp
    mvn clean package -DskipTests

The build should create the application package file `myapexapp\target\myapexapp-1.0-SNAPSHOT.apa`. This file can then be uploaded to the DataTorrent GUI tool (**dtManage**) on your cluster if you have DataTorrent RTS installed there, or on the sandbox and launched  from there. It generates a stream of random numbers and prints them out, each prefixed by the string  `hello world: `.

If you built this package on the host, you can transfer it to the sandbox using either a shared folder or the `pscp` tool bundled with `PuTTY` mentioned earlier.

You can also run this application from the generated unit test file as described in the
next section.

Running Unit Tests
----
To run unit tests on Linux or OSX, simply run the usual maven command, for example: `mvn test`
to run all tests or `mvn -Dcom.example.myapexapp.ApplicationTest#testApplication test` to run
a selected test. For the default application generated from the archetype, it should
print output like this:

     -------------------------------------------------------
      TESTS
     -------------------------------------------------------

     Running com.example.mydtapp.ApplicationTest
     hello world: 0.8015370953286478
     hello world: 0.9785359225545481
     hello world: 0.6322611586644047
     hello world: 0.8460953663451775
     hello world: 0.5719372906929072
     ...

     Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 11.863
     sec

     Results :

     Tests run: 1, Failures: 0, Errors: 0, Skipped: 0

On Windows, an additional file, `winutils.exe`, is required; download it from
<https://github.com/srccodes/hadoop-common-2.2.0-bin/archive/master.zip>
and unpack the archive to, say, `C:\hadoop`; this file should be present under
`hadoop-common-2.2.0-bin-master\bin` within it.

Set the `HADOOP_HOME` environment variable system-wide to
`c:\hadoop\hadoop-common-2.2.0-bin-master` as described at:
<https://www.microsoft.com/resources/documentation/windows/xp/all/proddocs/en-us/sysdm_advancd_environmnt_addchange_variable.mspx?mfr=true>. You should now be able to run unit tests normally.

If you prefer not to set the variable globally, you can set it on the command line or within
your IDE. For example, on the command line, specify the maven
property `hadoop.home.dir`:

    mvn -Dhadoop.home.dir=c:\hadoop\hadoop-common-2.2.0-bin-master test

or set the environment variable separately:

    set HADOOP_HOME=c:\hadoop\hadoop-common-2.2.0-bin-master
    mvn test

Within your IDE, set the environment variable and then run the desired
unit test in the usual way. For example, with NetBeans you can add:

    Env.HADOOP_HOME=c:/hadoop/hadoop-common-2.2.0-bin-master

at _Properties &#x21e8; Actions &#x21e8; Run project &#x21e8; Set Properties_.

Similarly, in Eclipse (Mars) add it to the
project properties at _Properties_ &#x21e8; _Run/Debug Settings_ &#x21e8; _ApplicationTest_
&#x21e8; _Environment_ tab.

Building the Sources
----
The Apache Apex source code is useful to have locally for a variety of reasons:
- It has more substantial demo applications which can serve as models for new
  applications in the same or similar domain.
- When extending a class, it is helpful to refer to the base class implementation
  of overrideable methods.
- The maven build file `pom.xml` can be a useful model when you need to add or delete
  plugins, dependencies, profiles, etc.
- Browsing the code is a good way to gain a deeper understanding of the platform.

You can download and build the source repositories by running the script `build-apex.cmd`
located in the same place in the examples repository described above. Alternatively, if
you do not want to use the script, you can follow these simple manual steps:


1.  Check out the source code repositories:

        git clone https://github.com/apache/incubator-apex-core
        git clone https://github.com/apache/incubator-apex-malhar

2.  Switch to the appropriate release branch and build each repository:

        pushd incubator-apex-core
        mvn clean install -DskipTests
        popd
        pushd incubator-apex-malhar
        mvn clean install -DskipTests
        popd

The `install` argument to the `mvn` command installs resources from each project to your
local maven repository (typically `.m2/repository` under your home directory), and
**not** to the system directories, so _Administrator_ privileges are not required.
The  `-DskipTests` argument skips running unit tests since they take a long time. If this is a first-time installation, it might take several minutes to complete because maven will download a number of associated plugins.

After the build completes, you should see application package files in the `target`
directories under each module; for example, the `Pi Demo` package file
`pi-demo-3.2.1-incubating-SNAPSHOT.apa` should be under
`incubator-apex-malhar\demos\pi\target`.

Linux
------------------

Most of the instructions for Linux (and other Unix-like systems) are similar to those for Windows described above, so we will just note the differences.


The pre-requisites (such as _git_, _maven_, etc.) are the same as for Windows described above; please run the commands in the table and ensure that appropriate versions are present in your PATH environment variable (the command to display that variable is: `echo $PATH`).


The maven archetype command is the same except that continuation lines use a backslash (`\`) instead of caret (`^`); the script for it is available in the same location and is named `newapp` (without the `.cmd` extension). The script to checkout and build the Apache Apex repositories is named `build-apex`.
