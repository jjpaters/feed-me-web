import { Injectable } from '@angular/core';

import { Recipe } from './recipe-models';
import { ProtectedService } from '../core-blocks/auth/protected.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private protectedService: ProtectedService) { }

  async createRecipe(recipe: Recipe): Promise<Recipe> {
    const userId = await this.protectedService.getUserId();
    const res = await this.protectedService.post(`users/${userId}/recipes`, recipe);
    return res;
  }

  async deleteRecipe(recipeId: string): Promise<void> {
    const userId = await this.protectedService.getUserId();
    await this.protectedService.delete(`users/${userId}/recipes/${recipeId}`);
  }

  async getRecipes(): Promise<Recipe[]> {
    const userId = await this.protectedService.getUserId();
    const res = await this.protectedService.get(`users/${userId}/recipes`);
    return res;
  }

  async getRecipe(recipeId: string): Promise<Recipe> {
    const userId = await this.protectedService.getUserId();
    const res = await this.protectedService.get(`users/${userId}/recipes/${recipeId}`);
    return res;
  }

  async updateRecipe(recipe: Recipe): Promise<Recipe> {
    const userId = await this.protectedService.getUserId();
    const res = await this.protectedService.patch(`users/${userId}/recipes/${recipe.recipeId}`, recipe);
    return res;
  }

}
