import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotifyService } from './notify.service';
import { NotifyServiceModule } from './notify-service.module';

describe('NotifyService', () => {
  let service: NotifyService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NotifyServiceModule,
        NgbModule
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

  it('clear should reset the notification', () => {
    service.title = 'title';
    service.message = 'message';
    service.show = true;
    service.clear();

    expect(service.title).toEqual('');
    expect(service.message).toEqual('');
    expect(service.show).toBeFalsy();
  });

  it('info should show the notification', () => {
    service.clear();
    service.info('info');

    expect(service.message).toEqual('info');
    expect(service.show).toBeTruthy();
  });

  it('info should show the notification', () => {
    service.clear();
    service.error('error');

    expect(service.message).toEqual('error');
    expect(service.show).toBeTruthy();
  });



});
