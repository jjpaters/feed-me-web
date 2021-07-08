import { Injectable } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Auth } from 'aws-amplify';
import { from, Observable } from 'rxjs';

import { ClientMetadata } from './cognito-auth-models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signedIn: boolean;
  user: any;

  constructor(private amplifyService: AmplifyService) {
    this.amplifyService.authStateChange$.subscribe(authState => {
      this.signedIn = authState.state === 'signedIn';
      if (!authState.user) {
        this.user = null;
      } else {
        this.user = authState.user;
      }
    });
  }

  changePassword(user: any, oldPassword: string, newPassword: string, clientMetadata?: ClientMetadata): Observable<any> {
    return from(Auth.changePassword(user, oldPassword, newPassword, clientMetadata));
  }

  completeNewPassword(user: any, password: string, requiredAttributes: any, clientMetadata?: ClientMetadata): Observable<any> {
    return from(Auth.completeNewPassword(user, password, requiredAttributes, clientMetadata));
  }

  confirmSignIn(user: any, code: string): Observable<any> {
    return from(Auth.confirmSignIn(user, code));
  }

  confirmSignUp(username: string, code: string, options?: any): Observable<any> {
    return from(Auth.confirmSignUp(username, code, options));
  }

  async currentAuthenticatedUser(): Promise<any> {
    return await Auth.currentAuthenticatedUser();
  }

  async currentSession(): Promise<any> {
    return await Auth.currentSession();
  }

  currentUserInfo(): Observable<any> {
    return from(Auth.currentUserInfo());
  }

  forgotPassword(username: string, clientMetadata?: ClientMetadata): Observable<any> {
    return from(Auth.forgotPassword(username, clientMetadata));
  }

  forgotPasswordSubmit(username: string, code: string, password: string, clientMetadata?: ClientMetadata): Observable<any> {
    return from(Auth.forgotPasswordSubmit(username, code, password, clientMetadata));
  }

  resendSignUp(username: string, clientMetadata?: ClientMetadata): Observable<any> {
    return from(Auth.resendSignUp(username, clientMetadata));
  }

  signIn(username: string, password: string, clientMetadata?: ClientMetadata): Observable<any> {
    return from(Auth.signIn(username, password, clientMetadata));
  }

  signUp(username: string, password: string): Observable<any> {
    return from(Auth.signUp(username, password));
  }

  signOut(): Observable<any> {
    return from(Auth.signOut());
  }

}
