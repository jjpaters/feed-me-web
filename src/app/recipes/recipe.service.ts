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
    const res = await this.http.post<Recipe>(`${environment.api}/recipes`, recipe).toPromise();
    return res;
  }

  async deleteRecipe(recipeId: string): Promise<void> {
    await this.http.delete(`${environment.api}/recipes/${recipeId}`).toPromise();
  }

  async getRecipes(category: string | null): Promise<Recipe[]> {
    let url = `${environment.api}/recipes`;
    
    if (category !== null) {
      url += `?category=${category}`
    }
    
    const res = await this.http.get<Recipe[]>(url).toPromise();
    return res;
  }

  async getRecipe(recipeId: string): Promise<Recipe> {
    const res = await this.http.get<Recipe>(`${environment.api}/recipes/${recipeId}`).toPromise();
    return res;
  }

  async updateRecipe(recipe: Recipe): Promise<Recipe> {
    const res = await this.http.put<Recipe>(`${environment.api}/recipes/${recipe.recipeId}`, recipe).toPromise();
    return res;
  }

}
