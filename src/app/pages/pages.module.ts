import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// External App Modules
import { MaterialModule } from '../material.module';
import { RecipesModule } from '../recipes/recipes.module';

// Module Components
import { AuthPageComponent } from './auth-page/auth-page.component';
import { CreateRecipePageComponent } from './create-recipe-page/create-recipe-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MyRecipesPageComponent } from './my-recipes-page/my-recipes-page.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';

@NgModule({
  declarations: [
    AuthPageComponent,
    HomePageComponent,
    MyRecipesPageComponent,
    RecipePageComponent,
    CreateRecipePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RecipesModule,
    RouterModule
  ]
})
export class PagesModule { }
