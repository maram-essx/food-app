import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

interface IMenu{
  text:string;
  icon:string;
  link ?:string;
  isActive:boolean
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private _AuthService:AuthService) {

  }
  isAdmin():boolean{
return this._AuthService.role =='SuperAdmin' ? true : false;
  }
  isUser():boolean{
    return this._AuthService.role =='SystemUser' ? true : false;
      }
menu:IMenu[]=[
  {
    text:'Home',
    icon:'fa-solid fa-home',
    link:'/dashboard/home',
    isActive:this.isAdmin()||this.isUser()
  },
  {
    text:'Users',
    icon:'fa-solid fa-user-group',
    isActive:this.isAdmin()
  },
  {
    text:' Recipes',
    icon:'fa-solid fa-table-list',
    link:'/dashboard/admin/recipes',
    isActive:this.isAdmin()
  },
  {
    text:'categories',
    icon:'fa-regular fa-calendar-days',
    link:'/dashboard/admin/categories',
    isActive:this.isAdmin()
  }
  ,
  {
    text:'Recipes',
    icon:'fa-solid fa-table-list',
    link:'/dashboard/user/user-recipes',
    isActive:this.isUser() 
  }
  ,
  {
    text:'favorites',
    icon:'fa-regular fa-heart',
    link:'user/favorites',
    isActive:this.isUser()
  }
 

]


}
