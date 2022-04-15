import { TestBed } from '@angular/core/testing';

import { CoreBlocksModule } from '../core-blocks/core-blocks.module';
import { ProfileGuard } from './profile.guard';

describe('ProfileGuard', () => {
  let guard: ProfileGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreBlocksModule
      ]
    });
    guard = TestBed.inject(ProfileGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
