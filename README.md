# DataTorrent Documentation

DataTorrent documentation repository for content available on http://docs.datatorrent.com/

Documentation is written in [Markdown](https://guides.github.com/features/mastering-markdown/) format and statically generated into HTML using [MkDocs](http://www.mkdocs.org/).  All documentation is located in the [docs](docs) directory, and [mkdocs.yml](mkdocs.yml) file describes the navigation structure of the published documentation.

## Development Environment Setup

Start by installing mkdocs using Python package manager, pip.  For additional installation questions see http://www.mkdocs.org/

```bash
pip install mkdocs
```

**NOTE** Please make sure to use mkdocs v0.17.2 or later by running `mkdocs --version`.  If you have an older version of mkdocs installed upgrade with:

```bash
sudo pip install --upgrade mkdocs
```

Additionally the `http-server` tool may be useful to test multi-version content in the site folder independently of `mkdocs`.  To install the `http-server` run

```bash
npm install -g http-server
```

## Authoring

New pages can be added under [docs](docs) or related sub-category, and a reference to the new page must be added to the [mkdocs.yml](mkdocs.yml) file to make it available in the navigation.  Embedded images are typically added to images folder at the same level as the new page.

When creating or editing pages, it can be useful to see the live results, and how the documents will appear when published.  Live preview feature is available by running the following command at the root of the repository:

```bash
mkdocs serve
```

**NOTE**: This approach does not provide full versioning support available with the `run` tool.  See [build](#build-and-deploy) section below.

For additional details see [writing your docs](http://www.mkdocs.org/user-guide/writing-your-docs/) guide.

## Custom Styles and Themes

In order to support multiple documentation version, navigation bar style changes, and other custom features, a custom theme was created and added to `docs/custom/readthedocs_dt` folder.

Guides on applying site-wide [configuration](http://www.mkdocs.org/user-guide/configuration/) and [themeing](http://www.mkdocs.org/user-guide/styling-your-docs/) are available on the MkDocs site.


## Build and Deploy

All the builds and deploys are done with the `run` tool, which was created to support multiple documentation versions.  It currently supports the following commands

```
$ run 
Usage: run <command> [options]

Commands:
  run build   Builds a documentation version using the specified git-tag and makes contents available for testing in site folder.
  run delete  Removes a version.  Note: Delete does not handle linked versions correctly.
  run link    Links one version to another by creating a symbolic link in the "v" directory.  Also adds version (docs-version) to the versions.json file.
  run deploy  Deploy contents of build directory to the deploy branch and push the changes to Github.

```

To build a single version of the documentation for testing the folloing command can be used

```bash
run build --git-tag=d8fa1ba554d9560fac97004f03b4a7c7dab811e7 --docs-version=3.10.0   
```

This builds the documents for version 3.10.0 using git hash d8fa1ba554d9560fac97004f03b4a7c7dab811e7 and generates the document content as static HTML files in the `site` folder for testing.  This build can then be tested by running the folloiwng command.

```bash
http-server site
```

Additionally, `run` tool supports version linking, which allows multiple versions to share the same contents

```bash
# Creates symbolic link in the "v" directory 3.9.0 -> 3.9.2 and adds the 3.9.0 version to the versions.json file.
run link --docs-version 3.9.0 --target-version 3.9.2
```

and version deletion for cleaning up obsolete versions

```bash
# Removes the specified version                               
run delete --docs-version 3.9.2                                                        
```

### Building and Deploying a New Version

To build a single new version of documentation and add it to all the current versions the following command can be used

```bash
run build --docs-version 3.10.0 --git-tag d8fa1ba554d9560fac97004f03b4a7c7dab811e7 -v
```

This results in all the documentation under [docs](docs) being statically generated into HTML files and placed into the `site` folder, along with all the previous docs HTML files which were added from the `gh-pages` branch.  Build can be tested before deployment on http://localhost:8080 by running

```bash
http-server site
```

After testing is complete, to deploy this version and make it live on http://docs.datatorrent.com use the following command

```bash
run deploy --docs-version 3.10.0 -v
```

This results in all the documentation under [docs](docs) being statically generated into HTML files and deployed as top level in [gh-pages](https://github.com/DataTorrent/docs/tree/gh-pages) branch.


### Building and Deploying All Versions

After major theme changes or other core documentaion updates, it may be necessary to re-build all previous version of the docs. Following commands can be used to re-build all of the previous available versions up to version 3.10

```bash
rm -rf site
run build --git-tag=d8fa1ba554d9560fac97004f03b4a7c7dab811e7 --build-skip-deployed-versions --docs-version=3.10.0 -v
run build --git-tag=59904d6f813944cead3cf65da292223300e07fe1 --build-skip-deployed-versions --docs-version=3.9.2 -v
run link --build-skip-deployed-versions --docs-version=3.9.1 --target-version=3.9.2 -v
run link --build-skip-deployed-versions --docs-version=3.9.0 --target-version=3.9.2 -v
run build --git-tag=7c6200265787f548eb2ba4db392833791b518310 --build-skip-deployed-versions --docs-version=3.8.1 -v
run link --build-skip-deployed-versions --docs-version=3.8.0 --target-version=3.8.1 -v
run build --git-tag=3c643d3c00f0f27061a53e37a54f5dc241493ac4 --build-skip-deployed-versions --docs-version=3.7.1 -v
run link --build-skip-deployed-versions --docs-version=3.7.0 --target-version=3.7.1 -v
run build --git-tag=778a9321334c65a5390f503ecbeb17575971bf69 --build-skip-deployed-versions --docs-version=3.6.0 -v
run build --git-tag=046b067fc87879497d826b79af8461e69d8fe6bd --build-skip-deployed-versions --docs-version=3.5.0 -v
run build --git-tag=e37bf553093256d7297764df95c917f571aa0e69 --build-skip-deployed-versions --docs-version=3.4.0 -v
run build --git-tag=c5817624b38fb2c822d9c9364cff96a6cfa02144 --build-skip-deployed-versions --docs-version=3.3.0 -v
run build --git-tag=0cc96605baa7a61b9135524aed24f6ca718318d8 --build-skip-deployed-versions --docs-version=3.2.1 -v
run link --build-skip-deployed-versions --docs-version=3.2.0 --target-version=3.2.1 -v
```

All the document versions are placed into the `site` folder, where they can be tested before their deployment on http://localhost:8080 by running

```bash
# To install http-server run: npm install -g http-server
http-server site
```

After testing is complete, deploy of all the versions can be performed with the following command

```bash
run deploy --docs-version 3.10.0 -v
```


### Historical Deployments (NON-VERSIONED)

**NOTE**: DO NOT USE THIS DEPLOYMENT METHOD

Prior to RTS 3.10.0 documentation was not versioned.  Every deploy replaced the previous documentation set.  These deployments were done by checking out the master branch and running

```bash
mkdocs gh-deploy --clean
```

For more details on how this is done see [MkDocs - Deploying Github Pages](http://www.mkdocs.org/user-guide/deploying-your-docs/#github-pages).

## Hosting

Currently docs.datatorrent.com is hosted on Github Pages.  The deployment requires that a custom [CNAME](docs/CNAME) be present at docs level, and DNS entry for docs.datatorrent.com point to datatorrent.github.io.
