import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NotifyService } from '../../core-blocks/notify/notify.service';
import { RecipeForm } from '../recipe-form/recipe-form';
import { RecipeService } from '../recipe.service';
import { IngredientGroup, Recipe, Step } from '../recipe-models';
import { ConfirmModalService } from 'src/app/core-blocks/confirm-modal/confirm-modal.service';
import { FormControlModalService } from 'src/app/core-blocks/form-control-modal/form-control-modal.service';
import { AbstractControl } from '@angular/forms';

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
    private modalService: ConfirmModalService,
    private formControlModalService: FormControlModalService,
    private notifyService: NotifyService,
    private recipeService: RecipeService,
    private router: Router) {
    super();
  }

  get recipeTitle(): string {
    return this.isNewRecipe ? 'New Recipe' : this.title?.value;
  }

  get isNewRecipe(): boolean {
    return this.recipeId ? false : true;
  }

  async ngOnInit(): Promise<void> {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    await this.getRecipe();
  }

  async cancelEditRecipe(): Promise<void> {
    await this.getRecipe();
    this.isInEditMode = false;
  }

  deleteRecipe(): void {
    const modal = this.modalService.open('Are you sure you want to delete the recipe? This action cannot be undone.');
    modal.closed.subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.confirmedDeleteRecipe();
      }
    });
  }

  editRecipe(): void {
    this.isInEditMode = true;
  }

  addIngredient(input: HTMLInputElement): void {
    this.addIngredientFormControl(input.value);
    input.value = '';
  }

  addStep(input: HTMLInputElement): void {
    this.addStepFormControl(input.value);
    input.value = '';
  }

  editFormControl(formControl: AbstractControl<any, any>, name: string): void {
    this.formControlModalService.open(this.form, formControl, name);
  }

  async getRecipe(): Promise<void> {
    try {
      if (this.recipeId) {
        this.recipe = await this.recipeService.getRecipe(this.recipeId);
        this.originalTitle = this.recipe.title;
      } else {
        this.recipe = new Recipe();
        this.isInEditMode = true;
      }
      this.loadFormGroup();
    } catch {
      this.notifyService.error(`Unable to get the recipe; please try again.`);
    }
  }

  async saveRecipe(): Promise<void> {
    this.submitted = true;
    if (this.form.valid) {
      this.mapRecipeForm();
      try {
        if (this.isNewRecipe) {
          await this.recipeService.createRecipe(this.recipe);
        } else {
          await this.recipeService.updateRecipe(this.recipe);
        }
        this.resetForm();
      } catch (ex) {
        this.notifyService.error(`Unable to save the recipe; please try again`);
      }
    }
  }

  private async confirmedDeleteRecipe() {
    try {
      await this.recipeService.deleteRecipe(this.recipe.recipeId);
      this.router.navigate(['/recipes']);
    } catch (ex) {
      this.notifyService.error(`Unable to delete the recipe; please try again.`);
    }
  }

  private mapRecipeForm(): void {
    this.recipe.title = this.title?.value;
    this.recipe.description = this.description?.value;
    this.recipe.category = this.category?.value;
    this.recipe.servings = this.servings?.value;
    this.recipe.prepTime = this.prepTime?.value;
    this.recipe.cookTime = this.cookTime?.value;
    this.recipe.notes = this.notes?.value;

    this.recipe.ingredientGroups = new Array<IngredientGroup>();
    this.ingredients?.value.forEach((element: string) => {
      const ingredientGroup = new IngredientGroup();
      ingredientGroup.ingredientGroupName = element;
      this.recipe.ingredientGroups.push(ingredientGroup)
    });

    this.recipe.steps = new Array<Step>();
    this.steps?.value.forEach((element: string, index: number) => {
      const step = new Step();
      step.text = element;
      step.orderNumber = index;
      this.recipe.steps.push(step)
    });
  }

}
