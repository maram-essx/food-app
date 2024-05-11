import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:any=''
  constructor(private _AuthService:AuthService) {
    this._AuthService.getUserName()
    this.user = JSON.stringify(localStorage.getItem('userName'));

   }

  ngOnInit() {
  }

}
