import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NotifyService } from '../../core-blocks/notify/notify.service';
import { RecipeForm } from '../recipe-form/recipe-form';
import { RecipeService } from '../recipe.service';
import { Ingredient, Recipe, Step } from '../recipe-models';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent extends RecipeForm implements OnInit {

  recipeId: string | null;
  originalTitle: string;

  constructor(
    private route: ActivatedRoute,
    private notifyService: NotifyService,
    private recipeService: RecipeService,
    private router: Router) {
    super();
  }

  async ngOnInit(): Promise<void> {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    await this.getRecipe();
  }

  async cancelEditRecipe(): Promise<void> {
    await this.getRecipe();
    this.editMode = false;
  }

  async deleteRecipe(): Promise<void> {
    try {
      if (this.recipeId) {
        await this.recipeService.deleteRecipe(this.recipe.recipeId);
      }
      this.router.navigate(['/home']);
    } catch (ex) {
      this.notifyService.error(`Unable to delete the recipe; please try again.`);
    }
  }

  editRecipe(): void {
    this.editMode = true;
  }

  async getRecipe(): Promise<void> {
    try {
      if (this.recipeId) {
        this.recipe = await this.recipeService.getRecipe(this.recipeId);
        this.originalTitle = this.recipe.title;
      } else {
        this.recipe = new Recipe();
        this.editMode = true;
      }
      this.loadFormGroup();
    } catch {
      this.notifyService.error(`Unable to get the recipe; please try again.`);
    }
  }

  async removeIngredient(ingredient: Ingredient): Promise<void> {
    // const index = this.recipe.ingredients.indexOf(ingredient);
    // if (index > -1) {
    //   this.recipe.ingredients.splice(index, 1);
    // }
  }

  async removeStep(step: Step): Promise<void> {
    const index = this.recipe.steps.indexOf(step);
    if (index > -1) {
      this.recipe.steps.splice(index, 1);
    }
  }

  async saveRecipe(): Promise<void> {
    if (this.form.valid) {
      try {
        this.mapRecipeForm();
        await this.recipeService.updateRecipe(this.recipe);
        this.resetForm();
      } catch (ex) {
        this.notifyService.error(`Unable to save the recipe; please try again`);
      }
    }
  }

  mapRecipeForm() {
    // this.recipe.cookTime = this.cookTime.value;
    // this.recipe.description = this.description.value;
    // this.recipe.prepTime = this.prepTime.value;
    // this.recipe.servings = this.servings.value;
    // this.recipe.title = this.title.value;
  }

}
