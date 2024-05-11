import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { adminGuard } from '../core/guards/admin.guard';
import { userGuard } from '../core/guards/user.guard';
import { HomeComponent } from '../share/home/home.component';
import { CategoriesComponent } from '../admin/categories/categories.component';

const routes: Routes = [




  {path: '', component: DashboardComponent, children: [

 {path:'home', component: HomeComponent},
  {path:'categories', component: CategoriesComponent},
      { path: 'admin', canActivate: [adminGuard], loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule) },

      { path: 'user', canActivate: [userGuard], loadChildren: () => import('../user/user.module').then(m => m.UserModule) },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class DashboardRoutingModule { }
