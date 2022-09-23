import { Component, OnInit } from '@angular/core';
import { RecipeSummary } from '../recipe-models';

@Component({
  selector: 'app-recipe-summary-page',
  templateUrl: './recipe-summary-page.component.html',
  styleUrls: ['./recipe-summary-page.component.scss']
})
export class RecipeSummaryPageComponent implements OnInit {

  recipeSummaries: RecipeSummary[];

  constructor() {
    this.recipeSummaries = [
      {
        name: 'Breakfast',
        imageUri: './assets/images/recipe-summaries/breakfast.jpg',
        url: '/recipes/Breakfast'
      },
      {
        name: 'Brunch',
        imageUri: 'assets/images/recipe-summaries/brunch.jpg',
        url: '/recipes/Brunch'
      },
      {
        name: 'Lunch',
        imageUri: 'assets/images/recipe-summaries/lunch.jpg',
        url: '/recipes/Lunch'
      },
      {
        name: 'Appetizers',
        imageUri: 'assets/images/recipe-summaries/appetizers.jpg',
        url: '/recipes/Appetizers'
      },
      {
        name: 'Dinner',
        imageUri: 'assets/images/recipe-summaries/dinner.jpg',
        url: '/recipes/Dinner'
      },
      {
        name: 'Dessert',
        imageUri: 'assets/images/recipe-summaries/dessert.jpg',
        url: '/recipes/Dessert'
      },
      {
        name: 'Snacks',
        imageUri: 'assets/images/recipe-summaries/snacks.jpg',
        url: '/recipes/Snacks'
      },
      {
        name: 'Drinks',
        imageUri: 'assets/images/recipe-summaries/drinks.jpg',
        url: '/recipes/Drinks'
      },
    ];
  }

  ngOnInit(): void {
  }

}
