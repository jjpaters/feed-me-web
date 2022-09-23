import { Recipe } from '../recipe-models';
import { UntypedFormGroup, UntypedFormControl, Validators, AbstractControl } from '@angular/forms';
import { ValidationFormControl } from 'src/app/core-blocks/form/validation-form-control';

export class RecipeForm {

  isInEditMode = false;
  form: UntypedFormGroup;
  recipe: Recipe;
  submitted = false;

  get title(): AbstractControl<any, any> | null {
    return this.form.get('title');
  }

  get description(): AbstractControl<any, any> | null {
    return this.form.get('description');
  }

  get category(): AbstractControl<any, any> | null {
    return this.form.get('category');
  }

  get servings(): AbstractControl<any, any> | null {
    return this.form.get('servings');
  }

  get prepTime(): AbstractControl<any, any> | null {
    return this.form.get('prepTime');
  }

  get cookTime(): AbstractControl<any, any> | null {
    return this.form.get('cookTime');
  }

  constructor() { }

  loadFormGroup() {
    this.form = new UntypedFormGroup({
      title: new UntypedFormControl(this.recipe.title, [Validators.required]),
      description: new UntypedFormControl(this.recipe.description),
      category: new UntypedFormControl(this.recipe.category, [Validators.required]),
      servings: new UntypedFormControl(this.recipe.servings, [Validators.required, Validators.min(1)]),
      prepTime: new UntypedFormControl(this.recipe.prepTime, [Validators.required]),
      cookTime: new UntypedFormControl(this.recipe.cookTime, [Validators.required])
    });
  }

  resetForm() {
    this.isInEditMode = false;
    this.submitted = false;
  }

  showErrors(controlName: string): boolean {
    const control = this.form.get(controlName)
    if (control) {
      return ValidationFormControl.showErrors(control, this.submitted);
    }
    return false;
  }

}
