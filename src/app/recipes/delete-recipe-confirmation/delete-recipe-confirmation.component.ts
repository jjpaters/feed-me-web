import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-recipe-confirmation',
  templateUrl: './delete-recipe-confirmation.component.html',
  styleUrls: ['./delete-recipe-confirmation.component.scss']
})
export class DeleteRecipeConfirmationComponent {

  constructor(private dialog: MatDialogRef<DeleteRecipeConfirmationComponent>) { }

  close(confirm: boolean) {
    this.dialog.close(confirm);
  }
}
