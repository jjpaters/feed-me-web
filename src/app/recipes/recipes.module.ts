import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreBlocksModule } from '../core-blocks/core-blocks.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipeService } from './recipe.service';
import { AddRecipePageComponent } from './add-recipe-page/add-recipe-page.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { RecipeSearchPageComponent } from './recipe-search-page/recipe-search-page.component';

const routes: Routes = [
  { path: 'add-recipe', component: AddRecipePageComponent },
  { path: 'recipes', component: RecipeSearchPageComponent },
  { path: 'recipes/:id', component: RecipePageComponent }
];

@NgModule({
  declarations: [
    AddRecipePageComponent,
    RecipeCardComponent,
    RecipePageComponent,
    RecipeSearchPageComponent
  ],
  imports: [
    CommonModule,
    CoreBlocksModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    RecipeService
  ]
})
export class RecipesModule { }
