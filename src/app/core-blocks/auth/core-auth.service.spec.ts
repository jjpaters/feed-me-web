import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule } from '@auth0/auth0-angular';

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
});
