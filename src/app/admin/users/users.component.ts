import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { DeleteComponent } from 'src/app/share/delete/delete.component';
import { CategoryService } from '../categories/services/category.service';
import { ITag, ICategoryData } from '../recipes/recipe';
import { RecipeService } from '../recipes/services/recipe.service';
import { UsersService } from './services/users.service';
import { ViewUserComponent } from './components/view-user/view-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  baseUrlImg: string = 'https://upskilling-egypt.com:3006/';
  emptyImg: string = '../../../assets/images/auth-bg.png';
  searchValue: string = '';
  hidePageSize = false;
  showPageSizeOptions = true;   
  showFirstLastButtons = true;
  disabled = false;

  // pageEvent: PageEvent;



  pageSize: number = 10;
  pageNumber: number = 1;
  listData: any;
  categoryItem: string = '';
  listTags: ITag[] = [];
  // listCategories: any ;

  listCategories: ICategoryData = {
    data: [],
    pageSize: 0,
    pageNumber: 0,
    totalNumberOfRecords: 0,
    totalNumberOfPages: 0,
  };

  constructor(
    private _CategoryService: CategoryService,
    private _RecipeService: RecipeService,
    private _UsersService: UsersService,

    public dialog: MatDialog
  ) {
    this.getUsersData();

  }
  roleIds: number[] = [];
  paramterKey: string = '';
  getUsersData() {
    console.log("this.paramterKey");
    console.log(this.paramterKey);
    console.log(this.searchValue);
    let paramData = {

      [this.paramterKey]: this.searchValue,
      groups:this.roleIds,
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
    };
    this._UsersService.getAllUsers(paramData).subscribe({
      next: (res) => {
        this.listData = res;
        console.log('res of getRecipesData');

        console.log(res);
        // console.log('listData');

        // console.log(this.listData);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  handlePageEvent(e: PageEvent) {
    console.log(e);
    // this.pageEvent = e;
    // this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex;

    // Handle page change logic here, e.g., fetch data for the new page
    //  console.log('Page event:', e);
    this.getUsersData();
    //any change in pageSize/pageNumber calling api again
  }
  //delete dialog
  openDeleteDialog(id: number): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: { itemId: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);

      if (result) {
        this.deleteItem(result);
      }
    });
  }
  openViewDialog(userData:any): void {
    const dialogRef = this.dialog.open(ViewUserComponent, {
      data: userData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);

      if (result) {
        this.deleteItem(result);
      }
    });
  }

  deleteItem(id: number) {
    this._UsersService.onDeleteUser(id).subscribe({
      next: (res) => {
        console.log('item deleted');
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.getUsersData();
        //to show data after delete category
      },
    });
  }
  //add category
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(AddEditRecipeComponent, {
  //     data: {name:this.categoryItem},
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  // console.log(result);

  // if(result){
  //   this.addRecipe(result);

  // }
  //   });
  // }

  // addRecipe(data:FormData){
  //    this._RecipeService.onAddRecipe(data).subscribe({
  //     next:(res)=>{
  //       console.log("category added");
  //       console.log(res);
  //     },
  //     error:(err)=>{
  //       console.log(err);
  //     },
  //     complete:()=>{
  //       this.getRecipesData();
  //       //to show data after add category
  //     }
  //    })
  // }

  //edit category
  // onEdit(categoryId:number) {
  // this._RecipeService.onEditRecipe(categoryId).subscribe({
  //   next:(res)=>{
  //     const dialogRef=this.dialog.open(AddEditRecipeComponent,{
  //     data:{name:res.name},
  //   });   console.log(res)

  //     dialogRef.afterClosed().subscribe(result=>{
  //       if(result){
  //         this.updateCategory(categoryId,result)
  //       }
  //     })
  //   },
  // })

  // }
  //update category

  // updateCategory(categoryId:number,newNameCategory:string){
  // this._RecipeService.onUpdateRecipe(categoryId,newNameCategory).subscribe({
  //   next:(res)=>{
  //     console.log(res);
  //   },
  //   error:(err)=>{
  //     console.log(err);
  //   },
  //   complete:()=>{
  //     this.getCategoryData();
  //   }
  // })
  // }

}
