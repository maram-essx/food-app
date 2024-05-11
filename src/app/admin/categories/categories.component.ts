import { Component, inject } from '@angular/core';
import { CategoryService } from './services/category.service';
import { AddEditCategoryComponent } from './components/add-edit-category/add-edit-category.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { RecipeService } from '../recipes/services/recipe.service';
import { DeleteComponent } from 'src/app/share/delete/delete.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  // pageEvent: PageEvent;

  handlePageEvent(e: any) {
    console.log(e);
    // this.pageEvent = e;
    // this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex;

    // Handle page change logic here, e.g., fetch data for the new page
    //  console.log('Page event:', e);
    this.getCategoryData();
    //any change in pageSize/pageNumber calling api again
  }

  pageSize: number = 10;
  pageNumber: number = 1;
  listData: any;

  categoryItem: string = '';
  constructor(
    private _CategoryService: CategoryService,
    private _RecipeService: RecipeService,
    public dialog: MatDialog
  ) {
    this.getCategoryData();
  }
  getCategoryData() {
    this._CategoryService
      .getAllCategories(this.pageSize,this.pageNumber)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.listData = res;

          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  //add category
  openDialog(): void {
    const dialogRef = this.dialog.open(AddEditCategoryComponent, {
      data: { name: this.categoryItem },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);

      if (result) {
        this.addCategory(result);
      }
    });
  }

  addCategory(categoryName: string) {
    this._CategoryService.onAddCategory(categoryName).subscribe({
      next: (res) => {
        console.log('category added');
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.getCategoryData();
        //to show data after add category
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
    this._CategoryService.onDeleteItem(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.getCategoryData();
        //to show data after delete category
      },
    });
  }
  //edit category
  onEdit(categoryId: number) {
    this._CategoryService.onEditCategory(categoryId).subscribe({
      next: (res) => {
        const dialogRef = this.dialog.open(AddEditCategoryComponent, {
          data: { name: res.name },
        });
        console.log(res);

        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            this.updateCategory(categoryId, result);
          }
        });
      },
    });
  }
  //update category

  updateCategory(categoryId: number, newNameCategory: string) {
    this._CategoryService
      .onUpdateCategory(categoryId, newNameCategory)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          this.getCategoryData();
        },
      });
  }
}
