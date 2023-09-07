import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { CoreAuthService } from '../auth/core-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProtectedRouteGuard {

  constructor(private coreAuthService: CoreAuthService) { }

  canActivate(): Observable<boolean> {
    return this.coreAuthService.isAuthenticated$;
  }

}
