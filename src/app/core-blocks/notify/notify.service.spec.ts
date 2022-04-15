import { TestBed, waitForAsync } from '@angular/core/testing';
import { AuthModule } from '@auth0/auth0-angular';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { environment } from 'src/environments/environment';

import { NotifyService } from './notify.service';

describe('NotifyService', () => {
  let service: NotifyService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AuthModule.forRoot(environment.auth),
        MatSnackBarModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(NotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
