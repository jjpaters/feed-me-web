import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowAltCircleLeft, faTrash, faWrench } from '@fortawesome/free-solid-svg-icons';

import { NotifyService } from '../../core-blocks/notify/notify.service';
import { RecipeForm } from '../recipe-form/recipe-form';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent extends RecipeForm implements OnInit {

  iconBack = faArrowAltCircleLeft;
  iconDelete = faTrash;
  iconEdit = faWrench;
  recipeId: string;
  originalTitle: string;

  constructor(private route: ActivatedRoute, private notifyService: NotifyService, private recipeService: RecipeService) {
    super();
  }

  async ngOnInit(): Promise<void> {
    this.recipeId = this.route.snapshot.paramMap.get('id');
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
      this.recipe = await this.recipeService.getRecipe(this.recipeId);
      this.originalTitle = this.recipe.title;
      this.loadFormGroup();
    } catch {
      this.notifyService.error(`Unable to get the recipe; please try again.`);
    }
  }

  async saveRecipe() {
    this.resetForm();
  }

}
