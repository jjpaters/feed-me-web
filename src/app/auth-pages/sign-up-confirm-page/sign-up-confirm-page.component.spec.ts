import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CoreBlocksModule } from 'src/app/core-blocks/core-blocks.module';
import { SignUpConfirmPageComponent } from './sign-up-confirm-page.component';

describe('SignUpConfirmPageComponent', () => {
  let component: SignUpConfirmPageComponent;
  let fixture: ComponentFixture<SignUpConfirmPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpConfirmPageComponent ],
      imports: [
        CoreBlocksModule,
        ReactiveFormsModule,
        RouterTestingModule
      ]
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
