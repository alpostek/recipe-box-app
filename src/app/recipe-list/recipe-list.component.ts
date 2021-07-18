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
  counter!: number;

  constructor(private storageService: LocalStorageService ) { 
    
  }
  
  getRecipes():void{
    this.recipes = this.storageService.getAll();
    console.log(this.storageService.getAll())
  }

  addRecipeFromForm(recipeFromForm: IRecipe){
    
    this.counter++;
    recipeFromForm.id = this.counter;
    this.storageService.set(recipeFromForm);
  }

  ngOnInit(): void {
    //this.getRecipes();
    this.storageService.recipesSubject.subscribe(recipe => {
      this.recipes = recipe;
    });

    this.counter = (this.recipes.length - 1);
  }

}
