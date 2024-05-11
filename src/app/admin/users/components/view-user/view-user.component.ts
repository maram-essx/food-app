import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
imgUrl:string='https://upskilling-egypt.com:3006/';
emptyImage:string='../../../../../assets/images/home-avatar.svg';
  constructor(   public dialogRef: MatDialogRef<ViewUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  } 

}
