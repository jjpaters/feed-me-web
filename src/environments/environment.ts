// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth: {
    region: 'us-east-2',
    userPoolId: 'us-east-1_KLhotzEne',
    userPoolWebClientId: '5te7v4a3tm0m1lki6icjmkckvh',
    oauth: {
        domain: 'https://feed-me-np.auth.us-east-1.amazoncognito.com',
        scope: ['email', 'openid', 'profile'],
        redirectSignIn: 'http://localhost:4200/',
        redirectSignOut: 'http://localhost:4200/',
        responseType: 'code'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
