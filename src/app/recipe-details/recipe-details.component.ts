import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';
import { IRecipe } from '../recipe';
import { LocalStorageService } from '../local-storage.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: IRecipe | undefined;
  recipeTitle: string = 'Full recipe for';
  @Output() onDeletedRecipe = new EventEmitter();

  constructor(private route: ActivatedRoute,  private router: Router, private storageService: LocalStorageService, private modalService: ModalService) {
    
   }

  getRecipe(name: string): void{
    this.recipe = this.storageService.getRecipe(name);
  }

  onBack(): void{
    this.router.navigate(['/'])
  }

  addRecipeFromForm(name: string, recipeFromForm: IRecipe): void{
    this.storageService.edit(name, recipeFromForm);
  }

  onDelete(name: string): void{
    this.storageService.delete(name);
    this.onBack();
  }

  onAll(){
    console.log(this.storageService.getAll())
  }

  showForm(){
    this.modalService.open();
  }

  ngOnInit(): void {
    const passedName = String(this.route.snapshot.paramMap.get('name'));
    console.log(passedName)
    if(passedName){
      this.getRecipe(passedName)
    }  
  }

}
