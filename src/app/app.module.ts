import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { ModalComponent } from './modal/modal.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipeTitleValidatorDirective } from './recipe-title-validator.directive';
import { RecipeEditTitleValidatorDirective } from './recipe-edit-title-validator.directive';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    ModalComponent,
    RecipeFormComponent,
    RecipeTitleValidatorDirective,
    RecipeEditTitleValidatorDirective,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: RecipeListComponent, canActivate: [AuthGuard]},
      {path: 'login', component: AuthComponent},
      {path: 'recipes', component: RecipeListComponent},
      {path: 'auth', component: AuthComponent},
      { path: ':name', component: RecipeDetailsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
