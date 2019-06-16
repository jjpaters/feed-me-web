import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material';

import { MaterialModule } from '../../material.module';
import { DeleteRecipeConfirmationComponent } from './delete-recipe-confirmation.component';

describe('DeleteRecipeConfirmationComponent', () => {
  let component: DeleteRecipeConfirmationComponent;
  let fixture: ComponentFixture<DeleteRecipeConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteRecipeConfirmationComponent],
      imports: [
        MaterialModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRecipeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
