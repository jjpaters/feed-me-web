import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.loggedIn) {
      this.authService.setRedirect(state.url);
    }

    if (!this.authService.tokenValid && !this.authService.loggedIn) {
      this.authService.login();
      return false;
    }

    if (this.authService.tokenValid && this.authService.loggedIn) {
      return true;
    }
  }
}
