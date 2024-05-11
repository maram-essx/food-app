import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavRoutingModule } from './fav-routing.module';
import { FavComponent } from './fav.component';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [
    FavComponent
  ],
  imports: [
    CommonModule,
    FavRoutingModule,ShareModule
  ]
})
export class FavModule { }
