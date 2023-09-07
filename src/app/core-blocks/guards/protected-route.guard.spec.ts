import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreBlocksModule } from '../core-blocks.module';

import { CoreAuthService } from '../auth/core-auth.service';
import { ProtectedRouteGuard } from './protected-route.guard';

describe('ProtectedRouteGuard', () => {
  let guard: ProtectedRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreBlocksModule,
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(ProtectedRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should invoke coreAuthService.isAuthenticated', inject([CoreAuthService], (coreAuthService: CoreAuthService) => {
    spyOn(coreAuthService, 'isAuthenticated'); 
    guard.canActivate();
    expect(coreAuthService.isAuthenticated).toHaveBeenCalled();
  }));
});
