import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { MaterialModule } from '../../material.module';

import { CreateRecipePageComponent } from './create-recipe-page.component';

describe('CreateRecipePageComponent', () => {
  let component: CreateRecipePageComponent;
  let fixture: ComponentFixture<CreateRecipePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRecipePageComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        MaterialModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecipePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
