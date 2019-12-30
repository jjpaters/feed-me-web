import { TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotifyService } from './notify.service';

describe('NotifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      NgbModule
    ]
  }));

  it('should be created', () => {
    const service: NotifyService = TestBed.get(NotifyService);
    expect(service).toBeTruthy();
  });
});
