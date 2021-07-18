import { Injectable } from '@angular/core';
import { IRecipe } from './recipe';
import { initialRecipes } from './initial-recipes';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  storageName: string = "recipeStorage";

  private storedRecipes : IRecipe[] = [];

  constructor() { 
    const recipesJSON = localStorage.getItem(this.storageName);
    this.storedRecipes = recipesJSON !== null ? JSON.parse(recipesJSON) : initialRecipes;
  }
  
  set(recipe: IRecipe){
    this.storedRecipes.push(recipe);
    localStorage.setItem(this.storageName, JSON.stringify(this.storedRecipes));
  }
  getAll(){
    return this.storedRecipes;
  }
  getRecipe(id: number){
    return this.storedRecipes[id];
  }
  
  delete(id: number){
    this.storedRecipes.splice(id);
    localStorage.setItem(this.storageName, JSON.stringify(this.storedRecipes));
  }

}
