import { Recipe } from '../recipe-models';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationFormControl } from '../../auth-pages/form-controls/validation-form-control';

export class RecipeForm {

  editMode = false;
  form: FormGroup;
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

  loadFormGroup() {
    this.form = new FormGroup({
      title: new FormControl(this.recipe.title, [Validators.required]),
      servings: new FormControl(this.recipe.servings),
      prepTime: new FormControl(this.recipe.prepTime),
      cookTime: new FormControl(this.recipe.cookTime),
      description: new FormControl(this.recipe.description)
    });
  }

  resetForm() {
    this.editMode = false;
    this.submitted = false;
  }

}
