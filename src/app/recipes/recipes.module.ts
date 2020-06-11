import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipeService } from './recipe.service';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { RecipeSearchPageComponent } from './recipe-search-page/recipe-search-page.component';

const routes: Routes = [
  { path: 'recipes', component: RecipeSearchPageComponent },
  { path: 'recipes/:id', component: RecipePageComponent }
];

@NgModule({
  declarations: [
    RecipeCardComponent,
    RecipePageComponent,
    RecipeSearchPageComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    RecipeService
  ]
})
export class RecipesModule { }
