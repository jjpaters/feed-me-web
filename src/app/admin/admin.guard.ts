import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';

import { AuthService } from '../core-blocks/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  async canActivate(): Promise<boolean | UrlTree> {
    try {
      await this.authService.currentAuthenticatedUser();
      return true;
    } catch {
      return this.router.createUrlTree(['/login']);
    }
  }

}
