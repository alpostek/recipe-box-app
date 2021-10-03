import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IRecipe } from '../recipe';
import { ModalService } from '../modal.service';
import { FormControl, NgForm, NgModel } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})

export class RecipeFormComponent implements OnInit {
  @Output() recipeAddEvent = new EventEmitter();

  recipeTitle!: string;
  recipeLink!: string;
  recipeImage!: string;

  initialRecipe: IRecipe = {
    name: "",
    source: "",
    img: ""
  }

  recipe: IRecipe = {...this.initialRecipe}

  constructor(private modalService: ModalService, private storageService: LocalStorageService) {
   }

  ngOnInit(): void {
   
  }

  handleSubmit(form: NgForm){
    console.log('in on Submit ', form.valid);
    if (form.valid){
      this.recipeTitle = this.recipeTitle;
      this.recipeLink = this.recipeLink;
      this.recipeImage = this.recipeImage;
      this.recipeAddEvent.emit(this.recipe);
      this.modalService.close();
    }
  }

}
