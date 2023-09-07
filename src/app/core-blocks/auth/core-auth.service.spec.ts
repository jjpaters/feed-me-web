import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule, AuthService } from '@auth0/auth0-angular';

import { CoreAuthService } from './core-auth.service';
import { environment } from 'src/environments/environment';

describe('CoreAuthService', () => {
  let service: CoreAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AuthModule.forRoot({
          domain: environment.auth.domain,
          clientId: environment.auth.clientId
        }),
      ]
    });
    service = TestBed.inject(CoreAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should invoke authService.loginWithRedirect', inject([AuthService], (authService: AuthService) => {
    spyOn(authService, 'loginWithRedirect'); 
    service.logIn();
    expect(authService.loginWithRedirect).toHaveBeenCalled();
  }));

  it('should invoke authService.logout', inject([AuthService], (authService: AuthService) => {
    spyOn(authService, 'logout');
    service.logOut();
    expect(authService.logout).toHaveBeenCalled();
  }));
});
