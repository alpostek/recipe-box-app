import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { IRecipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: IRecipe[] = [];
  constructor(private storageService: LocalStorageService ) { 
    
  }
  
  getRecipes():void{
    this.recipes = this.storageService.getAll();
  }

  addRecipeFromForm(recipeFromForm: IRecipe){
    this.storageService.set(recipeFromForm);
  }

  ngOnInit(): void {
    this.storageService.recipesSubject.subscribe(recipe => {
      this.recipes = recipe;
    });
  }

}
