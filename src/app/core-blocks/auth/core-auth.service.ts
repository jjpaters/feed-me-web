import { Injectable } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CoreAuthService {

  isAuthenticated$: Observable<boolean>;
  user$: Observable<User | null | undefined>;

  constructor(private authService: AuthService, private router: Router) {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
    this.user$ = this.authService.user$;
  }

  logIn(): Observable<void> {
    return this.authService.loginWithRedirect();
  }

  logOut(): void {
    this.authService.logout();
  }

}
