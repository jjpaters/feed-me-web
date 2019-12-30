import { TestBed, async } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotifyService } from './notify.service';
import { NotifyServiceModule } from './notify-service.module';

describe('NotifyService', () => {
  let service: NotifyService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NotifyServiceModule,
        NgbModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(NotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open NotifyComponent when notify() is called', () => {
    const modal = service.notify('title', 'message');
    expect(modal).toBeTruthy();
  });

});
