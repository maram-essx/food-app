import { Component } from '@angular/core';
import { FavService } from './services/fav.service';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/share/delete/delete.component';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss']
})
export class FavComponent {
  listFav:any;
  baseUrlImg: string = 'https://upskilling-egypt.com:3006/';
  emptyImg: string = '../../../assets/images/auth-bg.png';
  pageSize: number = 10;
  pageNumber: number = 1;


constructor(private _FavService: FavService, public dialog:MatDialog){
this.getAllFav()
}

handlePageEvent(e: PageEvent) {
  console.log(e);

  this.pageSize = e.pageSize;
  this.pageNumber = e.pageIndex;

  this.getAllFav();
}

getAllFav(){
  this._FavService.getAllFavRecipes().subscribe({
    next:(res)=>
      {
        this.listFav = res;
        console.log(res);
      }
  }
  )
}

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
  this._FavService.onDeleteFavRecipes(id).subscribe({
    next: (res) => {
      console.log('item deleted');
      console.log(res);
    },
    error: (err) => {
      console.log(err);
    },
    complete: () => {
      this.getAllFav();
      //to show data after delete category
    },
  });
}


}
