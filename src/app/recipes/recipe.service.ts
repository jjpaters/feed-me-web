import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../core/auth/auth.service';
import { environment } from '../../environments/environment';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private authService: AuthService, private http: HttpClient) { }

  createRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(`${environment.api.uri}/recipes`, recipe);
  }

  deleteRecipe(recipeId: string): Observable<Object> {
    return this.http.delete(`${environment.api.uri}/recipes/${recipeId}`);
  }

  getRecipe(recipeId: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${environment.api.uri}/recipes/${recipeId}`);
  }

  getRecipes(): Observable<Recipe[]> {
    const userId = this.authService.userId;
    return this.http.get<Recipe[]>(`${environment.api.uri}/recipes?userId=${userId}`);
  }

  updateRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(`${environment.api.uri}/recipes/${recipe.id}`, recipe);
  }

}
