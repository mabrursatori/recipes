import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements  OnInit{
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(private recipeSevice: RecipeService) {
  }
  onRecipeSelected(recipe: Recipe){
    console.log(recipe)
  this.recipeWasSelected.emit(recipe);
  }

  ngOnInit(): void {
    this.recipes = this.recipeSevice.getRecipes();
  }
}
