import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CoreAuthService } from '../auth/core-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProtectedRouteGuard implements CanActivate {

  constructor(private coreAuthService: CoreAuthService) { }

  canActivate(): Observable<boolean> {
    return this.coreAuthService.isAuthenticated$;
  }

}
