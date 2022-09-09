import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe-models';
import { NotifyService } from 'src/app/core-blocks/notify/notify.service';

@Component({
  selector: 'app-recipe-search-page',
  templateUrl: './recipe-search-page.component.html',
  styleUrls: ['./recipe-search-page.component.scss']
})
export class RecipeSearchPageComponent implements OnInit {

  recipes: Recipe[];

  constructor(private notifyService: NotifyService, private recipeService: RecipeService) { }

  async ngOnInit(): Promise<void> {
    await this.getRecipes();
  }

  async getRecipes(): Promise<void> {
    try {
      this.recipes = await this.recipeService.getRecipes();
    } catch {
      this.notifyService.error(`Unable to get your recipes. Please try again.`);
    }
  }

}
