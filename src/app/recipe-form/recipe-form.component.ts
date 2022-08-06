import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IRecipe } from '../recipe';
import { ModalService } from '../modal.service';
import { NgForm } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common'; 

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
  recipeRating? : number;
  isAddMode! : boolean;
  passedName : string | undefined = undefined;

  initialRecipe: IRecipe = {
    name: "",
    source: "",
    img: ""
  }

  recipe!: IRecipe;

  constructor(private route: ActivatedRoute, private modalService: ModalService, private storageService: LocalStorageService, private location: Location,
    private router: Router) {
    
  }

  ngOnInit(): void {
    let editableRecipe;
    this.route.paramMap.subscribe((param) =>{
      this.passedName = String(param.get('name'));
    })
    
    if (this.passedName){
      editableRecipe = this.storageService.getRecipe(this.passedName);
    }

    editableRecipe ? (this.initialRecipe = editableRecipe, this.isAddMode = false) : this.isAddMode = true;
    this.recipe = {...this.initialRecipe}

  }
 

  handleSubmit(form: NgForm): void{
    if (form.valid){

      if(!this.isAddMode){
        if (this.recipe.name !== this.initialRecipe!.name){
          this.router.navigate([this.recipe.name]);
        }
      }

      this.recipeAddEvent.emit(this.recipe);
      
      this.modalService.close();

  }
}

}
