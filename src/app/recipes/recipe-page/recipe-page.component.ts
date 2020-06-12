import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe-models';
import { ValidationFormControl } from '../../auth-pages/form-controls/validation-form-control';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit {

  editMode = false;
  form: FormGroup;
  iconDelete = faTrash;
  recipeId: string;
  userId: string;
  recipe: Recipe;
  submitted = false;

  get title() {
    return this.form.get('title');
  }

  get description() {
    return this.form.get('description');
  }

  get showTitleErrors() {
    return ValidationFormControl.showErrors(this.title, this.submitted);
  }

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    this.userId = '';
    await this.getRecipe();
  }

  async cancelEditRecipe() {
    await this.getRecipe();
    this.editMode = false;
  }

  async deleteRecipe() {

  }

  async editRecipe() {
    this.editMode = true;
  }

  async getRecipe(): Promise<void> {
    try {
      this.recipe = await this.recipeService.getRecipe(this.userId, this.recipeId);
      this.loadForm();
    } catch {

    }
  }

  async saveRecipe() {

  }

  private loadForm() {
    this.form = new FormGroup({
      title: new FormControl(this.recipe.title, [Validators.required]),
      description: new FormControl(this.recipe.description)
    });
  }



}
