import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material.module';

import { RecipeService } from './recipe.service';
import { ViewRecipeCardComponent } from './view-recipe-card/view-recipe-card.component';
import { DeleteRecipeConfirmationComponent } from './delete-recipe-confirmation/delete-recipe-confirmation.component';

@NgModule({
  declarations: [
    ViewRecipeCardComponent,
    DeleteRecipeConfirmationComponent
  ],
  exports: [
    ViewRecipeCardComponent
  ],
  entryComponents: [
    DeleteRecipeConfirmationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  providers: [
    RecipeService
  ]
})
export class RecipesModule { }
