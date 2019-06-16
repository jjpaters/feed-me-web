import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../recipes/recipe';
import { RecipeService } from '../../recipes/recipe.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit {

  recipe: Recipe;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipe(this.route.snapshot.paramMap.get('id'));
  }

  getRecipe(recipeId: string) {
    this.recipeService.getRecipe(recipeId).subscribe((res: Recipe) => {
      this.recipe = res;
    }, (err) => {
      console.log(`RecipePageError: ${JSON.stringify(err)}`);
    });
  }

}
