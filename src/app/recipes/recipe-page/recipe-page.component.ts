import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe-models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit {

  recipeId: string;
  recipe: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.recipeId = this.route.snapshot.params['id'];
    await this.getRecipe('', this.recipeId);
  }

  async getRecipe(userId: string, recipeId: string): Promise<void> {
    try {
      this.recipe = await this.recipeService.getRecipe(userId, recipeId);
    } catch {

    }
  }

}
