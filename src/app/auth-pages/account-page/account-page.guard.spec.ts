import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule } from '@auth0/auth0-angular';

import { CoreBlocksModule } from 'src/app/core-blocks/core-blocks.module';
import { AccountPageGuard } from './account-page.guard';

describe('AccountPageGuard', () => {
  let guard: AccountPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AuthModule.forRoot({
          domain: '',
          clientId: ''
        }),
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

});
