import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { IRecipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: IRecipe | undefined;
  //recipe: IRecipe[] = [];
  recipeTitle: string = 'Full recipe for'

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  getRecipe(id: number): void{
    this.recipe = this.recipeService.getRecipe(id);
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeTitle += `: ${id}`;
    if(id){
      this.getRecipe(id)
      console.log(this.recipe)
     }  
  }



}
