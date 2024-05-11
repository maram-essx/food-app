import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
   declarations: [ShareComponent, SidebarComponent,
    NavbarComponent,HomeComponent,DeleteComponent
   ],

  imports: [
    CommonModule,
    NgxDropzoneModule,ReactiveFormsModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,FormsModule,MatPaginatorModule,MatSelectModule,

  ],

  exports: [

    NgxDropzoneModule,ReactiveFormsModule,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,MatMenuModule,MatIconModule,MatButtonModule,MatInputModule, MatFormFieldModule,
    MatDialogModule,FormsModule,MatPaginatorModule,MatSelectModule
  ]
})
export class ShareModule { }











