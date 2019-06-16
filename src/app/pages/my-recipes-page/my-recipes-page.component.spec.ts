import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MaterialModule } from '../../material.module';
import { RecipesModule } from '../../recipes/recipes.module';

import { MyRecipesPageComponent } from './my-recipes-page.component';

describe('MyRecipesPageComponent', () => {
  let component: MyRecipesPageComponent;
  let fixture: ComponentFixture<MyRecipesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRecipesPageComponent ],
      imports: [
        HttpClientTestingModule,
        MaterialModule,
        RecipesModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRecipesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
