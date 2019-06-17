import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Recipe } from '../../recipes/recipe';
import { RecipeService } from '../../recipes/recipe.service';

@Component({
  selector: 'app-create-recipe-page',
  templateUrl: './create-recipe-page.component.html',
  styleUrls: ['./create-recipe-page.component.scss']
})
export class CreateRecipePageComponent {

  ingredient: string;
  step: string;
  recipe: Recipe;

  constructor(private recipeService: RecipeService, private router: Router) {
    this.recipe = new Recipe();
  }

  addIngredient(ingredient: string) {
    this.recipe.ingredients.push(ingredient);
    this.ingredient = undefined;
  }

  addStep(step: string) {
    this.recipe.steps.push(step);
    this.step = undefined;
  }

  removeIngredient(ingredient: string) {
    const index = this.recipe.ingredients.indexOf(ingredient);
    this.recipe.ingredients.splice(index, 1);
  }

  removeStep(step: string) {
    const index = this.recipe.steps.indexOf(step);
    this.recipe.steps.splice(index, 1);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.recipeService.createRecipe(this.recipe).subscribe((res) => {
        this.router.navigate(['/my-recipes']);
      }, (err) => {
        console.log(`CreateRecipeError: ${JSON.stringify(err)}`);
      });
    }
  }

}
