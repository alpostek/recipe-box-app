import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { IRecipe } from '../recipe';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: IRecipe[] = [];
  counter!: number;

  constructor(private recipesService: RecipeService, private storageService: LocalStorageService ) { 
    
  }
  
  getRecipes():void{
    //this.recipes = this.storageService.get();
    this.recipes = this.recipesService.getRecipes();
  }



  addRecipeFromForm(recipeFromForm: IRecipe){
    
    this.counter++;
    console.log(recipeFromForm);
    recipeFromForm.id = this.counter;
    this.recipesService.addRecipe(recipeFromForm);
    //this.storageService.set(recipeFromForm);
    console.log(this.recipes);
  }

  ngOnInit(): void {
    this.getRecipes();
    this.counter = this.recipes.length;
  }

}
