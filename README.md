#updating

npm install aurelia-binding@latest aurelia-bootstrapper@latest aurelia-dependency-injection@latest aurelia-event-aggregator@latest aurelia-framework@latest aurelia-history@latest aurelia-history-browser@latest aurelia-loader@latest aurelia-loader-default@latest aurelia-logging@latest aurelia-logging-console@latest aurelia-metadata@latest aurelia-pal@latest aurelia-pal-browser@latest aurelia-path@latest aurelia-polyfills@latest aurelia-router@latest aurelia-route-recognizer@latest aurelia-task-queue@latest aurelia-templating@latest aurelia-templating-binding@latest aurelia-templating-router@latest aurelia-templating-resources@latest aurelia-validation@latest aurelia-validatejs@latest --save

#smoke test

gulp export
gulp serve-export

#publish

gulp export-gh-pages
