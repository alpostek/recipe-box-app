import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: RecipeListComponent  },
      { path: ':id', component: RecipeDetailsComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
