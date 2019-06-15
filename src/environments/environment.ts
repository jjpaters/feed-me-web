export const environment = {
  production: false,
  api: {
    uri: 'http://localhost:3000/api'
  },
  auth: {
    clientId: 'wE9ro7uXyS2JTn0mcXItFW6ifLdCHNSP',
    clientDomain: 'jjpaters.auth0.com',
    audience: 'http://localhost:3000/api/',
    redirect: 'http://localhost:4200/callback',
    scope: 'openid profile'
  },
  self: 'http://localhost:4200/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
