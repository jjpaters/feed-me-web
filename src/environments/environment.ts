export const environment = {
  production: false,
  api: 'https://api.feed-me.io',
  auth: {
    domain: 'feed-me-np.us.auth0.com',
    clientId: 'hSuoo3rTQHZufL5igpgywsPSl0BZvqvK',
    audience: 'https://feed-me.io/api',
    httpInterceptor: {
      allowedList: [ 'https://api.feed-me.io/recipes' ]
    }
  }
};