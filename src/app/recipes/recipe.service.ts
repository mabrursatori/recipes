import {Recipe} from "./recipe.model";

export class RecipeService{
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test",
      'https://i0.wp.com/rasabunda.com/wp-content/uploads/2021/09/Nasi-Goreng-Jawa.jpg?fit=450%2C600&ssl=1')
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}
