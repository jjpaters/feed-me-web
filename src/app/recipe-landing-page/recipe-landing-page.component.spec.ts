import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeLandingPageComponent } from './recipe-landing-page.component';

describe('RecipeLandingPageComponent', () => {
  let component: RecipeLandingPageComponent;
  let fixture: ComponentFixture<RecipeLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
