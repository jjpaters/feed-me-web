import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Recipe } from './recipe-models';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes = new Array<Recipe>();

  constructor(private http: HttpClient) {
    const recipe = new Recipe();
    recipe.description = 'Delicious mac and cheese';
    recipe.title = 'Mac and Cheese';
    recipe.recipeId = '1234'

    this.recipes.push(recipe);
    this.recipes.push(recipe);
    this.recipes.push(recipe);
    this.recipes.push(recipe);
    this.recipes.push(recipe);
    this.recipes.push(recipe);
    this.recipes.push(recipe);
  }

  async getRecipes(userId: string): Promise<Recipe[]> {
    return this.recipes;
  }

  async getRecipe(userId: string, recipeId: string): Promise<Recipe> {
    return this.recipes[0];
  }
}
