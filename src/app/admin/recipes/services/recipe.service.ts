import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private _HttpClient:HttpClient
  ) { }
  getAllRecipes(myParam:any):Observable<any>{
    return this._HttpClient.get('Recipe',{params:myParam})
    //bb3t param elli h3ml get ll recipe mn 5lalo
    //can filter with any thing in this param

  }
  getRecipeById(id:number):Observable<any>{
    return this._HttpClient.get(`Recipe/${id}`)


  }

  
  onAddRecipe(data:FormData):Observable<any>{

    return this._HttpClient.post('Recipe',data)

  }
 
getAllTags():Observable<any>{
  return this._HttpClient.get('tag')

}


onDeleteItem(id:number):Observable<any>{
return this._HttpClient.delete(`Recipe/${id}`)
}


  onEditRecipe(data:FormData,id:number):Observable<any>{
    return this._HttpClient.put(`Recipe/${id}`,data)
    }




    

  onUpdateRecipe(categoryId:number,newNameCategory:string):Observable<any>{
  return this._HttpClient.put(`Recipe/${categoryId}`,{name:newNameCategory})
  }

}
