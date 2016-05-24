// import {HttpClient} from 'aurelia-fetch-client';
// import {HttpClient as Foo} from 'aurelia-http-client';
// import {ValidationEngine} from 'aurelia-validation';
// import {I18N} from 'aurelia-i18n';
// import {VirtualRepeat} from 'aurelia-ui-virtualization';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();
    // .plugin('aurelia-ui-virtualization')
    // .plugin('aurelia-i18n')
    // .plugin('aurelia-breeze');

  aurelia.start().then(() => aurelia.setRoot());
}
