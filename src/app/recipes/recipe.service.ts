import { Injectable } from '@angular/core';

import { Recipe } from './recipe-models';
import { ProtectedService } from '../core-blocks/auth/protected.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private protectedService: ProtectedService) { }

  async getRecipes(): Promise<Recipe[]> {
    let recipes: Recipe[];

    try {
      const userId = await this.protectedService.getUserId();
      recipes = await this.protectedService.get(`users/${userId}/recipes`);
    } catch (ex) {
      recipes = new Array<Recipe>();
      console.log(`${ex.message}`);
    }

    return recipes;
  }

  async getRecipe(recipeId: string): Promise<Recipe> {
    let recipe: Recipe;

    try {
      const userId = await this.protectedService.getUserId();
      recipe = await this.protectedService.get(`users/${userId}/recipes/${recipeId}`);
    } catch (ex) {
      console.log(`${ex.message}`);
    }

    return recipe;
  }

}
