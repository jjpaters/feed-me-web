export const environment = {
  production: true,
  api: {
    uri: 'https://feed-me-already-api.herokuapp.com/api'
  },
  auth: {
    clientId: 'wE9ro7uXyS2JTn0mcXItFW6ifLdCHNSP',
    clientDomain: 'jjpaters.auth0.com',
    audience: 'https://feed-me-already-api.herokuapp.com/',
    redirect: 'https://feed-me-already.herokuapp.com/callback',
    scope: 'openid profile'
  },
  self: 'https://feed-me-already.herokuapp.com/'
};
