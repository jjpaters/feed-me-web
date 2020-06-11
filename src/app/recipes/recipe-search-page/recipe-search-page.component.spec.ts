import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { RecipeSearchPageComponent } from './recipe-search-page.component';

describe('RecipeSearchPageComponent', () => {
  let component: RecipeSearchPageComponent;
  let fixture: ComponentFixture<RecipeSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        RecipeCardComponent,
        RecipeSearchPageComponent
       ],
       imports: [
         HttpClientTestingModule,
         RouterTestingModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
