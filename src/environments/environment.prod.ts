export const environment = {
  production: true,
  auth: {
    region: 'us-east-2',
    userPoolId: 'us-east-1_KLhotzEne',
    userPoolWebClientId: '5te7v4a3tm0m1lki6icjmkckvh',
    oauth: {
        domain: 'https://feed-me-np.auth.us-east-1.amazoncognito.com',
        scope: ['email', 'openid', 'profile'],
        redirectSignIn: 'https://feed-me.io/',
        redirectSignOut: 'https://feed-me.io/',
        responseType: 'code'
    }
  }
};