import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class FavService {

constructor(private _HttpClient:HttpClient) { }
getAllFavRecipes(){
  return this._HttpClient.get('userRecipe')

}
onAddFavRecipe(id:number){
  return this._HttpClient.post('userRecipe',{recipeId:id})

}
onDeleteFavRecipes(id:number){
  return this._HttpClient.delete(`userRecipe/${id}`)

}
}
