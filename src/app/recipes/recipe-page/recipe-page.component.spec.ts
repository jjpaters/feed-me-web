import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CoreBlocksModule } from 'src/app/core-blocks/core-blocks.module';
import { RecipePageComponent } from './recipe-page.component';

describe('RecipePageComponent', () => {
  let component: RecipePageComponent;
  let fixture: ComponentFixture<RecipePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipePageComponent ],
      imports: [
        CoreBlocksModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
