import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();

  private  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test",
      'https://i0.wp.com/rasabunda.com/wp-content/uploads/2021/09/Nasi-Goreng-Jawa.jpg?fit=450%2C600&ssl=1',
      [new Ingredient('Meat', 3),
      new Ingredient('Buns', 10)]),
    new Recipe("A Test Recipe", "This is simply a test",
      'https://i0.wp.com/rasabunda.com/wp-content/uploads/2021/09/Nasi-Goreng-Jawa.jpg?fit=450%2C600&ssl=1',
      [new Ingredient('Shrimp', 4),
      new Ingredient('Salt', 6)])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]){
      this.slService.addIngredients(ingredients);
  }
}
