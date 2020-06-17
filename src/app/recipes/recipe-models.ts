export class Recipe {
    recipeId: string;
    title: string;
    description: string;
    categories: string[];
    servings: number;
    prepTime: string;
    cookTime: string;
    ingredients: Ingredient[];
    steps: Step[];
}

export class Ingredient {
    text: string;
}

export class Step {
    orderNumber: number;
    text: string;
}
