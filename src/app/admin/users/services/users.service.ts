import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private _HttpClient:HttpClient
  ) { }
  getAllUsers(myParam:any):Observable<any>{
    return this._HttpClient.get('Users',{params:myParam})
    //bb3t param elli h3ml get ll recipe mn 5lalo
    //can filter with any thing in this param

  }
  onDeleteUser(id:number):Observable<any>{
    return this._HttpClient.delete(`Users/${id}`)
    }
    

}
