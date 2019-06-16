import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material.module';

import { RecipeService } from './recipe.service';
import { ViewRecipeCardComponent } from './view-recipe-card/view-recipe-card.component';

@NgModule({
  declarations: [
    ViewRecipeCardComponent
  ],
  exports: [
    ViewRecipeCardComponent
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
