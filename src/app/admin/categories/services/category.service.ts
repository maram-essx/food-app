import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

constructor(private _HttpClient:HttpClient
) { }
getAllCategories(pageSize:number,pageNumber:number):Observable<any>{
  return this._HttpClient.get('Category',{params:{pageSize:pageSize,pageNumber:pageNumber}})

}
onAddCategory(itemName:string):Observable<any>{

  return this._HttpClient.post('Category',{name:itemName})
  //{name:itemName} da el obj fi el api

}
onDeleteItem(id:number):Observable<any>{
  return this._HttpClient.delete(`Category/${id}`)
  }

onEditCategory(id:number):Observable<any>{
  return this._HttpClient.get(`Category/${id}`)
  }
onUpdateCategory(categoryId:number,newNameCategory:string):Observable<any>{
return this._HttpClient.put(`Category/${categoryId}`,{name:newNameCategory})
}
}
