import { AuthConfig } from 'angular-oauth2-oidc';
export const authConfig: AuthConfig = {
  issuer: 'https://ah4orum6y.accounts.ondemand.com', 
  clientId: '42569914-b807-4f95-b5b0-4cb0bf892559',
  redirectUri: window.location.origin,
  responseType: 'code',
  scope: 'openid profile email',
  showDebugInformation: true, 
};
