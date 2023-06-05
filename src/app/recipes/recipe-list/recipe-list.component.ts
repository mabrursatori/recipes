import { Component } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test",
      'https://i0.wp.com/rasabunda.com/wp-content/uploads/2021/09/Nasi-Goreng-Jawa.jpg?fit=450%2C600&ssl=1')
  ];
}
