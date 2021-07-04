import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../recipe';
import  InitialRecipes  from '../initial-recipes';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor() { }
  recipes: IRecipe[] = InitialRecipes;

  ngOnInit(): void {
    console.log(this.recipes);
  }

}
