import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { IForget, ILogin, IRegister, IReset, IVerify } from '../models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  role: string | any = '';
  userName: string = '';
  user:string=''
  constructor(private _HttpClient: HttpClient) {
    //to get data again after reloading
    if (localStorage.getItem('userToken') !== null) {
      this.getProfile();
    }
  }

  getProfile() {
    let encoded:any = localStorage.getItem('userToken');
    let decoded: any = jwtDecode(encoded);
    console.log(decoded.userGroup);
    localStorage.setItem('role', decoded.userGroup);
    localStorage.setItem('userName', decoded.userName);
  //  this.nameUser= localStorage.getItem('userName');
    this.getRole();
    this.getUserName()
  }
  getRole() {
    // admin , user
    if (
      localStorage.getItem('userToken') !== null &&
      localStorage.getItem('role') !== null
    ) {
      this.role = localStorage.getItem('role');
    }
  }


  // getUserName() {
  //   if (
  //     localStorage.getItem('userToken') !== null &&
  //     localStorage.getItem('userName') !== null
  //   ) {
  //     this.role = JSON.stringify(localStorage.getItem('userName'));
  //   }
  // }
  getUserName() {
    if (
      localStorage.getItem('userToken') !== null &&
      localStorage.getItem('userName') !== null
    ) {
      this.user = JSON.stringify(localStorage.getItem('userName'));
    }
    console.log(this.user);
  }
  login(userData: ILogin): Observable<any> {
    return this._HttpClient.post('Users/Login', userData);
  }
  register(res: FormData): Observable<any> {
    return this._HttpClient.post('Users/Register', res);
  }
forget(data:IForget): Observable<any> {
  return this._HttpClient.post('Users/Reset/Request',data);
}
reset(data:IReset): Observable<any> {
  return this._HttpClient.post('Users/Reset',data);
}
verify(data:IVerify): Observable<any> {
  return this._HttpClient.put('Users/verify',data);
}

changepassword(data:IVerify): Observable<any> {
  return this._HttpClient.put('Users/verify',data);
}

}
