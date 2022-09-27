import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe-models';
import { NotifyService } from 'src/app/core-blocks/notify/notify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-search-page',
  templateUrl: './recipe-search-page.component.html',
  styleUrls: ['./recipe-search-page.component.scss']
})
export class RecipeSearchPageComponent implements OnInit {

  category: string | null;
  recipes: Recipe[];

  constructor(private notifyService: NotifyService, private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
    this.getRecipes();
  }

  async getRecipes(): Promise<void> {
    try {
      this.recipes = await this.recipeService.getRecipes(this.category);
    } catch (ex) {
      console.log(ex);
      this.notifyService.error(`Unable to get your recipes. Please try again.`);
    }
  }

}
