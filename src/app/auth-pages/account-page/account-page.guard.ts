import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from 'src/app/core-blocks/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountPageGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (!this.authService.signedIn) {
      this.router.navigate(['login']);
    }

    return this.authService.signedIn;
  }

}
