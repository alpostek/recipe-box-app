import { Injectable } from '@angular/core';
import { IRecipe } from './recipe';
import { initialRecipes } from './initial-recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }
  getRecipes() : IRecipe[]{
    return initialRecipes;
  }
  
  getRecipe(recipeId: number) : IRecipe | undefined {
    //return this.getRecipes().filter(r => r.id === recipeId)[0];
    return this.getRecipes().find(r => r.id === recipeId);
  }
}
