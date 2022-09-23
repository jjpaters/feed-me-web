import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreBlocksModule } from '../core-blocks.module';

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
});
