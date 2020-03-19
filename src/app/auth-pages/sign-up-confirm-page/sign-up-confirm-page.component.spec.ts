import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpConfirmPageComponent } from './sign-up-confirm-page.component';

describe('SignUpConfirmPageComponent', () => {
  let component: SignUpConfirmPageComponent;
  let fixture: ComponentFixture<SignUpConfirmPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpConfirmPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpConfirmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
