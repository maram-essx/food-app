import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { CategoryService } from 'src/app/admin/categories/services/category.service';
import { ITag, ICategoryData } from 'src/app/admin/recipes/recipe';
import { RecipeService } from 'src/app/admin/recipes/services/recipe.service';
import { DeleteComponent } from 'src/app/share/delete/delete.component';
import { FavService } from '../fav/services/fav.service';

@Component({
  selector: 'app-user-recipes',
  templateUrl: './user-recipes.component.html',
  styleUrls: ['./user-recipes.component.scss']
})
export class UserRecipesComponent {
  baseUrlImg: string = 'https://upskilling-egypt.com:3006/';
  emptyImg: string = '../../../assets/images/auth-bg.png';
  searchValue: string = '';
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  // pageEvent: PageEvent;

  handlePageEvent(e: PageEvent) {
    console.log(e);
    // this.pageEvent = e;
    // this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex;

    // Handle page change logic here, e.g., fetch data for the new page
    //  console.log('Page event:', e);
    this.getRecipesData();
    //any change in pageSize/pageNumber calling api again
  }

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
    private _FavService: FavService,
    public dialog: MatDialog
  ) {
    this.getRecipesData();
    this.getTags();
    this.getAllCategories();
  }
  tagId: number = 0;
  categoryId: number = 0;
  getRecipesData() {
    let paramData = {
      name: this.searchValue,
      //searchValue in html ng model mean elli baktebo fe el input hyt7t fi el name da
      tagId: this.tagId,
      categoryId: this.categoryId,
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
    };
    this._RecipeService.getAllRecipes(paramData).subscribe({
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

  getAllCategories() {
    this._CategoryService
      .getAllCategories(this.pageSize, this.pageNumber)
      .subscribe({
        next: (res) => {
          this.listCategories = res;
          console.log(`Category REsponse ${res}`)
          console.log(res.data);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
  getTags() {
    this._RecipeService.getAllTags().subscribe({
      next: (res) => {
        this.listTags = res;
        console.log('res of getTags');

        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
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

  deleteItem(id: number) {
    this._RecipeService.onDeleteItem(id).subscribe({
      next: (res) => {
        console.log('item deleted');
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.getRecipesData();
        //to show data after delete category
      },
    });
  }

  onAddToFav(id:number){
this._FavService.onAddFavRecipe(id).subscribe({
  next: (res) => {
       console.log(res);
  }
})
  }
}
