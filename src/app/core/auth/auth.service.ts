import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import * as auth0 from 'auth0-js';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private webAuth = new auth0.WebAuth({
    clientID: environment.auth.clientId,
    domain: environment.auth.clientDomain,
    responseType: 'token',
    redirectUri: environment.auth.redirect,
    audience: environment.auth.audience,
    scope: environment.auth.scope
  });

  accessToken: string;
  expiresAt: number;
  userProfile: any;

  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);
  loggingIn: boolean;

  get tokenValid(): boolean {
    return Date.now() < JSON.parse(localStorage.getItem('expires_at'));
  }

  get userId(): string {
    return this.userProfile && this.userProfile.sub;
  }

  constructor(private router: Router) {
    if (JSON.parse(localStorage.getItem('expires_at')) > Date.now()) {
      this.renewToken();
    }
  }

  handleAuth() {
    this.webAuth.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        window.location.hash = '';
        this.getProfile(authResult);
      } else if (err) {
        this.clearRedirect();
        this.router.navigate(['/']);
      }
      this.router.navigate(['/']);
    });
  }

  login() {
    this.webAuth.authorize();
  }

  logout() {
    this.clearExpiration();

    this.webAuth.logout({
      clientId: environment.auth.clientId,
      returnTo: environment.self
    });
  }

  renewToken() {
    this.webAuth.checkSession({
      audience: environment.auth.audience,
      scope: environment.auth.scope
    }, (err, authResult) => {
      if (authResult && authResult.accessToken) {
        this.getProfile(authResult);
      } else {
        this.clearExpiration();
      }
    });
  }

  setLoggedIn(value: boolean) {
    this.loggedIn$.next(value);
    this.loggedIn = value;
  }

  setRedirect(route: string) {
    localStorage.setItem('authRedirect', route);
  }

  private clearExpiration() {
    localStorage.removeItem('expires_at');
  }

  private clearRedirect() {
    localStorage.removeItem('authRedirect');
  }

  private getProfile(authResult) {
    this.loggingIn = true;

    this.webAuth.client.userInfo(authResult.accessToken, (err, profile) => {
      if (profile) {
        this.setSession(authResult, profile);
        this.redirect();
      } else if (err) {
        console.warn(`Error retrieving profile: ${err.error}`);
      }
    });
  }

  private redirect() {
    const redirect = decodeURI(localStorage.getItem('authRedirect'));
    const navArr = [redirect || '/'];

    this.router.navigate(navArr);
    this.clearRedirect();
  }

  private setSession(authResult, profile?) {
    this.expiresAt = (authResult.expiresIn * 1000) + Date.now();
    localStorage.setItem('expires_at', JSON.stringify(this.expiresAt));

    this.accessToken = authResult.accessToken;
    this.loggingIn = false;
    this.userProfile = profile;
    this.setLoggedIn(true);
  }

}
