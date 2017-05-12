// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  debug: true,
  firebase : {
    apiKey: 'AIzaSyCPJc2HcHKjflMgUZPgEF_Xz-5bQjrk7u8',
    authDomain: 'ng-office-ca7f8.firebaseapp.com',
    databaseURL: 'https://ng-office-ca7f8.firebaseio.com',
    projectId: 'ng-office-ca7f8',
    storageBucket: 'ng-office-ca7f8.appspot.com',
    messagingSenderId: '805140463325'
  }
};
