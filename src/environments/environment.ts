// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  debug: true,
  firebase : {
    apiKey: 'AIzaSyAu3xKjgih0uVHW5iWpbjM_RN20Z9KcxGE',
    authDomain: 'ng-office.firebaseapp.com',
    databaseURL: 'https://ng-office.firebaseio.com',
    projectId: 'ng-office',
    storageBucket: 'ng-office.appspot.com',
    messagingSenderId: '212487521495'
  }
};
