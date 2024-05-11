import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { AddEditRecipeComponent } from './components/add-edit-recipe/add-edit-recipe.component';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [
    RecipesComponent,
    AddEditRecipeComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    ShareModule
  ]
})
export class RecipesModule { }
