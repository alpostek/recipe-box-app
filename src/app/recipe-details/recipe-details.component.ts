import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { IRecipe } from '../recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: IRecipe | undefined;
  recipeTitle: string = 'Full recipe for'

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeTitle += `: ${id}`;
  }

}
