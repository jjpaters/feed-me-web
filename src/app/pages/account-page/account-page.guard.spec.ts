import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AccountPageGuard } from './account-page.guard';

describe('AccountPageGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [AccountPageGuard]
    });
  });

  it('should ...', inject([AccountPageGuard], (guard: AccountPageGuard) => {
    expect(guard).toBeTruthy();
  }));
});
