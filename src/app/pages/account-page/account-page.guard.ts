import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CognitoAuthService } from '@jjpaters/cognito-auth-lib';

@Injectable({
  providedIn: 'root'
})
export class AccountPageGuard implements CanActivate {

  constructor(private authService: CognitoAuthService, private router: Router) { }

  canActivate(): boolean {
    if (!this.authService.signedIn) {
      this.router.navigate(['login']);
    }

    return this.authService.signedIn;
  }

}
