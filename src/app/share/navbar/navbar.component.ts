import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName:string='';
  imagePath:string=''
  noImage:string='../../../assets/images/no-profile-image.webp'
  baseUrl:string='https://upskilling-egypt.com:3006/'

  constructor() { }

  ngOnInit() {
  }

}
