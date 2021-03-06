export class Recipe {
    recipeId: string;
    title: string;
    description: string;
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
