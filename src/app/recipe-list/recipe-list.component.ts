import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../recipe';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor(private recipesService: RecipeService ) { }
  
  recipes: IRecipe[] = [];

  getRecipes():void{
    this.recipes = this.recipesService.getRecipes();
  }

  ngOnInit(): void {
    this.getRecipes();
  }

}
