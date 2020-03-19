import { TestBed } from '@angular/core/testing';
import { AmplifyService } from 'aws-amplify-angular';

import { AuthService } from './auth.service';
import { COGNITO_AUTH_CONFIG } from './cognito-auth-models';

describe('AuthService', () => {
  let service: AuthService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AmplifyService,
        {
          provide: COGNITO_AUTH_CONFIG,
          useValue: {
            region: 'us-east-1',
            userPoolId: 'us-east-1_aaaaaaaaa',
            userPoolWebClientId: '1aa11aaa1aaaaaa1aaaa1a1aaa',
          }
        }
      ]
    });
    service = TestBed.get(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
