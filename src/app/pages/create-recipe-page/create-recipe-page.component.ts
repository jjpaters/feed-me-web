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

  recipe: Recipe;

  constructor(private recipeService: RecipeService, private router: Router) {
    this.recipe = new Recipe();
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
