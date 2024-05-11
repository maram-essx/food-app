import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ITag, ICategoryData } from '../../recipe';
import { RecipeService } from '../../services/recipe.service';
import { CategoryService } from 'src/app/admin/categories/services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-recipe',
  templateUrl: './add-edit-recipe.component.html',
  styleUrls: ['./add-edit-recipe.component.scss'],
})
export class AddEditRecipeComponent {
  addRecipeForm = new FormGroup({
  
    name: new FormControl(null),
    description: new FormControl(null),
    price: new FormControl(null),
    tagId: new FormControl(null),
    recipeImage: new FormControl(null),
    categoriesIds: new FormControl(null),
  });
  imgSrc: any;
  files: File[] = [];
  recipeDta: any;
  pageSize: number = 10;
  pageNumber: number = 1;
  recipeId: number = 0;
  listTags: ITag[] = [];
  listCategories: ICategoryData = {
    data: [],
    pageSize: 0,
    pageNumber: 0,
    totalNumberOfRecords: 0,
    totalNumberOfPages: 0,
  };

  constructor(
    private _RecipeService: RecipeService,
    private _CategoryService: CategoryService,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this.recipeId = _ActivatedRoute.snapshot.params['id'];

    this.getAllCategories();
    this.getTags();
    if (this.recipeId) {
      console.log(this.recipeId);
      this.getRecipeById(this.recipeId);
    }
  }
  onSelect(event: any) {
    this.files.push(...event.addedFiles);
    this.imgSrc = this.files[0];
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  getAllCategories() {
    this._CategoryService
      .getAllCategories(this.pageSize, this.pageNumber)
      .subscribe({
        next: (res) => {
          this.listCategories = res;
          console.log(`Category REsponse ${res}`);
          console.log(res.data);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  getTags() {
    this._RecipeService.getAllTags().subscribe({
      next: (res) => {
        this.listTags = res;
        console.log('res of getTags');

        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  sendData(data: FormGroup) {
   
    let myData = new FormData();

    myData.append('name', data.value.name);
    myData.append('description', data.value.description);
    myData.append('price', data.value.price);
    myData.append('tagId ', data.value.tagId.id);
    myData.append('recipeImage', this.imgSrc);
    myData.append('categoriesIds', data.value.categoriesIds);
    if (this.recipeId) {
      this._RecipeService.onEditRecipe(myData, this.recipeId).subscribe({
        next: (res) => {
          console.log(res);
        },
      });
    } else {
      this._RecipeService.onAddRecipe(myData).subscribe({
        next: (res) => {
          console.log(' ofaddrec');
          console.log(res);
          console.log(res.data);
        },
      });
    }
  }

  getRecipeById(id: number) {
    this._RecipeService.getRecipeById(id).subscribe({
      next: (res) => {
        this.recipeDta = res;
        console.log('this.recipeDta');

        console.log(this.recipeDta);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        // let categoryIds:number[]=[];
        // for (let i = 0; i<this.recipeDta.category.length; i++) {

        // categoryIds.push(this.recipeDta.category[i].id)

        // }
        this.addRecipeForm.patchValue({
          name: this.recipeDta.name,
          description: this.recipeDta.description,
          price: this.recipeDta.price,
          tagId: this.recipeDta.tag.id,
          recipeImage: this.recipeDta.imagePath,
          categoriesIds: this.recipeDta.category.map((x: any) => x.id),
        });
      },
    });
  }
}
