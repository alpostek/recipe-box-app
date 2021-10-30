import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Directive({
  selector: '[appRecipeEditTitleValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: RecipeEditTitleValidatorDirective,
      multi: true
    }
  ]
})

export class RecipeEditTitleValidatorDirective {
  editedRecipeTitle : string;

  constructor(private route: ActivatedRoute, private storageService: LocalStorageService) {
      this.editedRecipeTitle = String(this.route.snapshot.paramMap.get('name'));
   }
  validate(control: FormControl){
    return this.recipeTitleValidator(control);
  }

  recipeTitleValidator(control: FormControl) {
    
        if (control.value === this.editedRecipeTitle ){
          return null;
        } else if (!this.storageService.getRecipe(control.value)){
          return null;
        }
        else {
          return {
            recipeTitleValidator: {valid: false}
        }
      }

  }

}
