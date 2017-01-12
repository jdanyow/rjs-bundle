# initial setup

```shell
npm install
```

#updating

Execute the following command to update all the aurelia libs:

```shell
npm install aurelia-binding@latest aurelia-bootstrapper@latest aurelia-dependency-injection@latest aurelia-event-aggregator@latest aurelia-framework@latest aurelia-history@latest aurelia-history-browser@latest aurelia-loader@latest aurelia-loader-default@latest aurelia-logging@latest aurelia-logging-console@latest aurelia-metadata@latest aurelia-pal@latest aurelia-pal-browser@latest aurelia-path@latest aurelia-polyfills@latest aurelia-router@latest aurelia-route-recognizer@latest aurelia-task-queue@latest aurelia-templating@latest aurelia-templating-binding@latest aurelia-templating-router@latest aurelia-templating-resources@latest aurelia-validation@latest aurelia-fetch-client@latest aurelia-http-client@latest  --save
```

#smoke test

To verify things are working, execute the following commands and navigate to [http://localhost:9000](http://localhost:9000).  You should see a form with some validation wired up.

```shell
gulp export
gulp serve-export
```

#publish

To publish, follow these steps...

>Note: publishing will effectively update **ALL** gists that reference this bundle. 

1. Execute

  ```shell
  gulp export-gh-pages
  ```
 
2. On the github site, navigate to the gh-pages branch and add an empty file named `.nojekyll`. 
  *todo: figure out why the export task isn't including this file*
  
3. Here's a gist to check after publishing: https://gist.run/?id=7542e061bc940cde506b 
