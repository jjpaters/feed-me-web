import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AccountPageGuard } from './account-page.guard';

describe('AccountPageGuard', () => {
  let guard: AccountPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [AccountPageGuard]
    });
  });

  beforeEach(() => {
    guard = TestBed.get(AccountPageGuard);
  });

  it('should create', () => {
    expect(guard).toBeTruthy();
  });

  it('should be false and navigate to "login"', () => {
    guard.canActivate().subscribe((res) => {
      expect(res).toBeFalsy();
    });
  });
});
