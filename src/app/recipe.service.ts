import { Injectable } from '@angular/core';
import { IRecipe } from './recipe';
import { initialRecipes } from './initial-recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  private recipes: IRecipe[] = initialRecipes;

  getRecipes() : IRecipe[]{
    return this.recipes;
  }
  
  getRecipe(recipeId: number) : IRecipe | undefined {
    //return this.getRecipes().filter(r => r.id === recipeId)[0];
    return this.getRecipes().find(r => r.id === recipeId);
  }

  addRecipe(newRecipe: IRecipe) {
    this.recipes.push(newRecipe);
  }
}
