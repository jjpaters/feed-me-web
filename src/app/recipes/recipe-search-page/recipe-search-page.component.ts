import { Component, OnInit } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe-models';

@Component({
  selector: 'app-recipe-search-page',
  templateUrl: './recipe-search-page.component.html',
  styleUrls: ['./recipe-search-page.component.scss']
})
export class RecipeSearchPageComponent implements OnInit {

  iconAdd = faPlusSquare;
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  async ngOnInit(): Promise<void> {
    await this.getRecipes();
  }

  async getRecipes(): Promise<void> {
    try {
      this.recipes = await this.recipeService.getRecipes();
    } catch {

    }
  }

}
