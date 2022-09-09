import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CoreAuthService {

  isAuthenticated: BehaviorSubject<boolean>;

  constructor(private authService: AuthService, private router: Router) {
    this.isAuthenticated = new BehaviorSubject<boolean>(false);
  }

  logIn(): Observable<void> {
    return this.authService.loginWithRedirect();
  }

  logOut(): void {
    this.authService.logout();
  }

}
