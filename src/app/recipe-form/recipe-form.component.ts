import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IRecipe } from '../recipe';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})

export class RecipeFormComponent implements OnInit {
  @Output() recipeAddEvent = new EventEmitter();
  recipe!: IRecipe;
  recipeTitle!: string;
  recipeLink!: string;
  recipeImage!: string;

  constructor(private modalService: ModalService) {
    
   }

  ngOnInit(): void {
    this.recipe = {
      id: 0,
      name: "",
      source: "",
      img: ""
    }
  }
  handleSubmit(){
    this.recipe.name = this.recipeTitle;
    this.recipe.source = this.recipeLink;
    this.recipe.img = this.recipeImage;
    this.recipeAddEvent.emit(this.recipe);
    this.modalService.close();
  }

}
