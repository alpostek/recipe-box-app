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
  }

  set(recipe: IRecipe){
    this.storedRecipes.push(recipe);
    localStorage.setItem(this.storageName, JSON.stringify(this.storedRecipes));
    this.recipesSubject.next(this.storedRecipes);
  }
  getAll(){
    return this.storedRecipes;
  }
  getRecipe(passedName: string){
    let recipeByName = this.storedRecipes.find(x => x.name === passedName);
    return recipeByName;
  }

  delete(passedName: string){
    const idx = this.storedRecipes.findIndex(x => x.name === passedName);
    this.storedRecipes.splice(idx, 1);

    localStorage.setItem(this.storageName, JSON.stringify(this.storedRecipes));
    this.recipesSubject.next(this.storedRecipes);
  }

  edit(passedName: string, recipe: IRecipe){
    const idx = this.storedRecipes.findIndex(x => x.name === passedName);
    Object.assign(this.storedRecipes[idx], recipe);
    localStorage.setItem(this.storageName, JSON.stringify(this.storedRecipes));
    this.recipesSubject.next(this.storedRecipes);
  }

  deleteAll(){
    this.storedRecipes = [];
    localStorage.setItem(this.storageName, JSON.stringify(this.storedRecipes));
    this.recipesSubject.next(this.storedRecipes);
  }

  resetToDefault(){
    this.storedRecipes = initialRecipes;
    localStorage.setItem(this.storageName, JSON.stringify(this.storedRecipes) );
    this.recipesSubject.next(this.storedRecipes);
  }

}
