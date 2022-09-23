import { IngredientGroup, Recipe, Step } from '../recipe-models';
import { FormGroup, FormArray, FormControl, AbstractControl, Validators } from '@angular/forms';
import { ValidationFormControl } from 'src/app/core-blocks/form/validation-form-control';

export class RecipeForm {

  isInEditMode = false;
  form: FormGroup;
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

  get ingredients(): FormArray {
    return <FormArray>this.form.get('ingredients');
  }

  get steps(): FormArray {
    return <FormArray>this.form.get('steps');
  }

  constructor() { }

  loadFormGroup() {
    const ingredientGroupFormArray = new FormArray<any>([], Validators.required);
    const stepFormArray = new FormArray<any>([], Validators.required);

    if (this.recipe.ingredientGroups) {
      this.recipe.ingredientGroups.forEach((element: IngredientGroup) => {
        ingredientGroupFormArray.push(new FormControl(element.ingredientGroupName));
      });
    }

    if (this.recipe.steps) {
      this.recipe.steps.forEach((element: Step) => {
        stepFormArray.push(new FormControl(element.text));
      });
    }

    this.form = new FormGroup({
      title: new FormControl(this.recipe.title, [Validators.required]),
      description: new FormControl(this.recipe.description),
      category: new FormControl(this.recipe.category, [Validators.required]),
      servings: new FormControl(this.recipe.servings, [Validators.required, Validators.min(1)]),
      prepTime: new FormControl(this.recipe.prepTime, [Validators.required]),
      cookTime: new FormControl(this.recipe.cookTime, [Validators.required]),
      ingredients: ingredientGroupFormArray,
      steps: stepFormArray
    });
  }

  addIngredientFormControl(value: string): void {
    if (value) {
      this.ingredients.push(new FormControl(value));
    }
  }

  addStepFormControl(value: string): void {
    if (value) {
      this.steps.push(new FormControl(value));
    }
  }

  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  removeStep(index: number): void {
    this.steps.removeAt(index);
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
