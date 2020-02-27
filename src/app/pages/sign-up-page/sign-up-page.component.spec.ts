import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CoreBlocksModule } from 'src/app/core-blocks/core-blocks.module';
import { SignUpPageComponent } from './sign-up-page.component';

describe('SignUpPageComponent', () => {
  let component: SignUpPageComponent;
  let fixture: ComponentFixture<SignUpPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpPageComponent],
      imports: [
        CoreBlocksModule,
        ReactiveFormsModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set "submittted" to false when onReset() is called', () => {
    component.onReset();
    expect(component.submitted).toBeFalsy();
  });

  it('should set "submittted" to true when onReset() is called', () => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });

});
