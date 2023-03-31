import LogtoClient from '@logto/next';

export const logtoClient = new LogtoClient({
  endpoint: 'https://5pl1bj.logto.app/',
  appId: '8s0Z5I64Z3mnmfSFqPhiX',
  appSecret: 'M0bnvLnDOWAp7lopLOU4o',
  baseUrl: 'http://localhost:3000', // Change to your own base URL
  cookieSecret: 'zWcToLBLVPzJO4joS0G5BScPFY3dIAx1', // Auto-generated 32 digit secret
  cookieSecure: process.env.NODE_ENV === 'production',
});