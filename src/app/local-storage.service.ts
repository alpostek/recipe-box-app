import { Injectable } from '@angular/core';
import { IRecipe } from './recipe';
import { initialRecipes } from './initial-recipes';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  storageName: string = "recipeStorage";

  public storedRecipes : IRecipe[] = [];
  public recipesSubject : BehaviorSubject<any>;

  constructor() { 
    let recipesJSON = localStorage.getItem(this.storageName);
    if (recipesJSON === null){
      localStorage.setItem(this.storageName, JSON.stringify(initialRecipes));
    }
    this.storedRecipes = recipesJSON !== null ? 
    JSON.parse(recipesJSON) : initialRecipes;
    this.recipesSubject = new BehaviorSubject(this.storedRecipes)
    console.log(this.storedRecipes)
  }
  
  set(recipe: IRecipe){
    this.storedRecipes.push(recipe);
    localStorage.setItem(this.storageName, JSON.stringify(this.storedRecipes));
  }
  getAll(){
    console.log(this.storedRecipes)
    return this.storedRecipes;
  }
  getRecipe(passedId: number){
    let recipeById = this.storedRecipes.find(x => x.id === passedId);
    return recipeById;
    
    //return this.storedRecipes[id];
  } 
  
  delete(id: number){
    const recipesWithoutRemoved = this.storedRecipes.filter(item => item.id !== id);
    localStorage.setItem(this.storageName, JSON.stringify(recipesWithoutRemoved));
    this.recipesSubject.next(this.storedRecipes = recipesWithoutRemoved);
  }

}
