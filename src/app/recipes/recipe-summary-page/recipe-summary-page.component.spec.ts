import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSummaryPageComponent } from './recipe-summary-page.component';

describe('RecipeSummaryPageComponent', () => {
  let component: RecipeSummaryPageComponent;
  let fixture: ComponentFixture<RecipeSummaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeSummaryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeSummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
