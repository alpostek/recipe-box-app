import { Directive } from '@angular/core';
import { FormControl, Validator, NG_VALIDATORS } from '@angular/forms';
import { LocalStorageService } from './local-storage.service';

@Directive({
  selector: '[appRecipeTitleValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: RecipeTitleValidatorDirective,
      multi: true
    }
  ]
})
export class RecipeTitleValidatorDirective implements Validator{

  constructor(private storageService: LocalStorageService) {
  }

  validate(control: FormControl){
    return this.recipeTitleValidator(control);
  }

  recipeTitleValidator(control: FormControl) {
        if (!this.storageService.getRecipe(control.value) ){
          return null;
        }
        else {
          return {
            recipeTitleValidator: {valid: false}
        }
      }

  }
}
