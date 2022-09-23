import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Recipe } from './recipe-models';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  async createRecipe(recipe: Recipe): Promise<Recipe> {
    const userId = `1`;
    const res = await this.http.post<Recipe>(`${environment.api}/recipes`, recipe).toPromise();
    return res;
  }

  async deleteRecipe(recipeId: string): Promise<void> {
    const userId = `1`;
    await this.http.delete(`${environment.api}/recipes/${recipeId}`).toPromise();
  }

  async getRecipes(): Promise<Recipe[]> {
    const userId = `1`;
    const res = await this.http.get<Recipe[]>(`${environment.api}/recipes`).toPromise();
    return res;
  }

  async getRecipe(recipeId: string): Promise<Recipe> {
    const userId = `1`;
    const res = await this.http.get<Recipe>(`${environment.api}/recipes/${recipeId}`).toPromise();
    return res;
  }

  async updateRecipe(recipe: Recipe): Promise<Recipe> {
    const userId = `1`;
    const res = await this.http.patch<Recipe>(`${environment.api}/recipes/${recipe.recipeId}`, recipe).toPromise();
    return res;
  }

}
