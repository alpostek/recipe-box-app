import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IRecipe } from '../recipe';
import { ModalService } from '../modal.service';
import { Form, NgForm } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';
import { initialRecipes } from '../initial-recipes';
import { ActivatedRoute } from '@angular/router';

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
  isAddMode! : boolean;

  initialRecipe: IRecipe = {
    name: "",
    source: "",
    img: ""
  }

  recipe!: IRecipe;

  constructor(private route: ActivatedRoute, private modalService: ModalService, private storageService: LocalStorageService) {
    
  }

  ngOnInit(): void {
    const passedName = String(this.route.snapshot.paramMap.get('name'));
    const editableRecipe = this.storageService.getRecipe(passedName)
    if(editableRecipe != undefined){
      this.initialRecipe = editableRecipe;
      this.isAddMode = false;
    } else{
      this.isAddMode = true;
    }
    this.recipe = {...this.initialRecipe}


  }
 

  handleSubmit(form: NgForm){
    if (form.valid){
      this.recipeTitle = this.recipeTitle;
      this.recipeLink = this.recipeLink;
      this.recipeImage = this.recipeImage;
      this.recipeAddEvent.emit(this.recipe);
      console.log(this.recipe);
      this.modalService.close();
    }
  }

}
