import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotifyComponent } from './notify.component';
import { NotifyService } from './notify.service';

describe('NotifyComponent', () => {
  let component: NotifyComponent;
  let fixture: ComponentFixture<NotifyComponent>;
  let notifyService: NotifyService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifyComponent ],
      imports: [
        NgbModule
      ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyComponent);
    component = fixture.componentInstance;
    notifyService = TestBed.inject(NotifyService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('close should clear the notification', () => {
    const spy = spyOn(notifyService, 'clear');
    component.close();
    expect(spy).toHaveBeenCalled();
  });

});
