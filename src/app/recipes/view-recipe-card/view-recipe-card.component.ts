import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-view-recipe-card',
  templateUrl: './view-recipe-card.component.html',
  styleUrls: ['./view-recipe-card.component.scss']
})
export class ViewRecipeCardComponent {

  @Input() recipe: Recipe;

}
