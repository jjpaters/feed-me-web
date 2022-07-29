import { Recipe } from '../recipe-models';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { ValidationFormControl } from 'src/app/core-blocks/form/validation-form-control';

export class RecipeForm {

  editMode = false;
  form: UntypedFormGroup;
  recipe: Recipe;
  submitted = false;

  get title() {
    return this.form.get('title');
  }

  get servings() {
    return this.form.get('servings');
  }

  get prepTime() {
    return this.form.get('prepTime');
  }

  get cookTime() {
    return this.form.get('cookTime');
  }

  get description() {
    return this.form.get('description');
  }

  get showTitleErrors() {
    return ValidationFormControl.showErrors(this.title, this.submitted);
  }

  constructor() { }

  loadFormGroup() {
    this.form = new UntypedFormGroup({
      title: new UntypedFormControl(this.recipe.title, [Validators.required]),
      servings: new UntypedFormControl(this.recipe.servings),
      prepTime: new UntypedFormControl(this.recipe.prepTime),
      cookTime: new UntypedFormControl(this.recipe.cookTime),
      description: new UntypedFormControl(this.recipe.description)
    });
  }

  resetForm() {
    this.editMode = false;
    this.submitted = false;
  }

}
