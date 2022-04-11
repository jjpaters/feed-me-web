export const environment = {
  production: true,
  api: 'https://api.feed-me.io',
  auth: {
    domain: 'feed-me-np.us.auth0.com',
    clientId: 'hSuoo3rTQHZufL5igpgywsPSl0BZvqvK',
    audience: 'https://feed-me-np.us.auth0.com/api/v2/',
    scope: 'read:current_user',
    httpInterceptor: {
      allowedList: [
        {
          uri: 'https://api.feed-me.io/*',
          tokenOptions: {
            audience: 'https://feed-me-np.us.auth0.com/api/v2/',
            scope: 'read:current_user'
          }
        }
      ]
    }
  }
};