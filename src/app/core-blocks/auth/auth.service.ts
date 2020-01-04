import { Injectable } from '@angular/core';
import Auth from '@aws-amplify/auth';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  changePassword(oldPassword: string, newPassword: string): Observable<any> {
    return of(Auth.confirmSignUp(oldPassword, newPassword));
  }

  confirmSignUp(username: string, code: string): Observable<any> {
    return of(Auth.confirmSignUp(username, code));
  }

  forgotPassword(username: string): Observable<any> {
    return of(Auth.forgotPassword(username));
  }

  forgotPasswordSubmit(username: string, code: string, newPassword: string): Observable<any> {
    return of(Auth.forgotPasswordSubmit(username, code, newPassword));
  }

  resendSignUp(username: string): Observable<any> {
    return of(Auth.resendSignUp(username));
  }

  signIn(username: string, password: string): Observable<any> {
    return of(Auth.signIn(username, password));
  }

  signOut(): Observable<any> {
    return of(Auth.signOut());
  }

  signUp(username: string, password: string): Observable<any> {
    return of(Auth.signUp(username, password));
  }

}
