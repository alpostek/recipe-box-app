import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';
import { IRecipe } from '../recipe';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: IRecipe | undefined;
  recipeTitle: string = 'Full recipe for';
  @Output() onDeletedRecipe = new EventEmitter();

  constructor(private route: ActivatedRoute,  private router: Router, private storageService: LocalStorageService) {
    
   }

  getRecipe(id: number): void{
    this.recipe = this.storageService.getRecipe(id);
  }

  onBack(): void{
    this.router.navigate(['/'])
  }

  onDelete(id: number): void{
    this.storageService.delete(id);
    this.onBack();
  }

  onAll(){
    console.log(this.storageService.getAll())
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeTitle += `: ${id}`;
    if(id >= 0){
      this.getRecipe(id);
     }  
  }

}
