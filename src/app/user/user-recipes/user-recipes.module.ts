import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRecipesRoutingModule } from './user-recipes-routing.module';
import { UserRecipesComponent } from './user-recipes.component';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [
    UserRecipesComponent
  ],
  imports: [
    CommonModule,
    UserRecipesRoutingModule,ShareModule
  ]
})
export class UserRecipesModule { }
