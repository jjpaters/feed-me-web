import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlModalComponent } from './form-control-modal.component';

describe('FormControlModalComponent', () => {
  let component: FormControlModalComponent;
  let fixture: ComponentFixture<FormControlModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormControlModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormControlModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
