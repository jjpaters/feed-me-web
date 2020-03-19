import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CoreBlocksModule } from 'src/app/core-blocks/core-blocks.module';
import { AccountPageGuard } from './account-page.guard';

describe('AccountPageGuard', () => {
  let guard: AccountPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreBlocksModule,
        RouterTestingModule
      ],
      providers: [AccountPageGuard]
    });
  });

  beforeEach(() => {
    guard = TestBed.inject(AccountPageGuard);
  });

  it('should create', () => {
    expect(guard).toBeTruthy();
  });

  it('should be false and navigate to "login"', () => {
    const res = guard.canActivate();
    expect(res).toBeFalsy();
  });
});
