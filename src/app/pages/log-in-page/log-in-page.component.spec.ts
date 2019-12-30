import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { LogInPageComponent } from './log-in-page.component';

describe('LogInPageComponent', () => {
  let component: LogInPageComponent;
  let fixture: ComponentFixture<LogInPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInPageComponent ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
