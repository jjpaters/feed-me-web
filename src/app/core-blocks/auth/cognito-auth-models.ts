import { InjectionToken } from '@angular/core';

export const COGNITO_AUTH_CONFIG = new InjectionToken(
    'COGNITO_AUTH_CONFIG'
);

export interface CognitoAuthConfig {
    region: string;
    userPoolId: string;
    userPoolWebClientId: string;
}

export interface ClientMetadata {
    [key: string]: string;
}
