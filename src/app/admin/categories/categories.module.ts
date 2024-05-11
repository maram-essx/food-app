import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { AddEditCategoryComponent } from './components/add-edit-category/add-edit-category.component';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [
    CategoriesComponent,
    AddEditCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    ShareModule
  ]
})
export class CategoriesModule { }
