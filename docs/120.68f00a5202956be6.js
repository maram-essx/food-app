"use strict";(self.webpackChunkfood_app=self.webpackChunkfood_app||[]).push([[120],{4120:(A,c,n)=>{n.r(c),n.d(c,{FavModule:()=>Z});var s=n(6814),p=n(3403),r=n(8483),e=n(5879),d=n(3740),m=n(7700),v=n(3365);function u(a,S){if(1&a){const t=e.EpF();e.TgZ(0,"div",5)(1,"div",6),e._UZ(2,"img",7),e.TgZ(3,"div",8)(4,"h3",9)(5,"span"),e._uU(6),e.qZA(),e.TgZ(7,"button",10),e.NdJ("click",function(){const g=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.openDeleteDialog(g.id))}),e._UZ(8,"i",11),e.qZA()(),e.TgZ(9,"span",12),e._uU(10),e.ALo(11,"currency"),e.qZA()()()()}if(2&a){const t=S.$implicit,o=e.oxw();e.xp6(2),e.Q6J("src",t.recipe.imagePath?o.baseUrlImg+t.recipe.imagePath:o.emptyImg,e.LSH),e.xp6(4),e.Oqu(t.recipe.name),e.xp6(4),e.Oqu(e.lcZ(11,3,t.recipe.price))}}const h=function(){return[5,10,25,100]},f=[{path:"",component:(()=>{class a{constructor(t,o){this._FavService=t,this.dialog=o,this.baseUrlImg="https://upskilling-egypt.com:3006/",this.emptyImg="../../../assets/images/auth-bg.png",this.pageSize=10,this.pageNumber=1,this.getAllFav()}handlePageEvent(t){console.log(t),this.pageSize=t.pageSize,this.pageNumber=t.pageIndex,this.getAllFav()}getAllFav(){this._FavService.getAllFavRecipes().subscribe({next:t=>{this.listFav=t,console.log(t)}})}openDeleteDialog(t){this.dialog.open(r.T,{data:{itemId:t}}).afterClosed().subscribe(i=>{console.log("The dialog was closed"),console.log(i),i&&this.deleteItem(i)})}deleteItem(t){this._FavService.onDeleteFavRecipes(t).subscribe({next:o=>{console.log("item deleted"),console.log(o)},error:o=>{console.log(o)},complete:()=>{this.getAllFav()}})}static#e=this.\u0275fac=function(o){return new(o||a)(e.Y36(d.g),e.Y36(m.uw))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-fav"]],decls:8,vars:6,consts:[[1,"container"],[1,"row","py-2","gy-3"],["class","col-md-4",4,"ngFor","ngForOf"],["aria-label","Select page",1,"demo-paginator",3,"length","pageSize","pageIndex","pageSizeOptions","page"],["paginator",""],[1,"col-md-4"],[1,"position-relative"],["alt","",1,"w-100","rounded-top-2","rounded-bottom-5",3,"src"],[1,"p-2"],[1,"d-flex","justify-content-between","align-items-center"],[1,"btn","btn-danger","btn-sm",3,"click"],[1,"fa-solid","fa-trash-can"],[1,"position-absolute","top-0","end-0","badge","text-bg-light","shadow-sm","m-2"]],template:function(o,i){1&o&&(e.TgZ(0,"section")(1,"div",0)(2,"h1"),e._uU(3,"recipes"),e.qZA(),e.TgZ(4,"div",1),e.YNc(5,u,12,5,"div",2),e.qZA(),e.TgZ(6,"mat-paginator",3,4),e.NdJ("page",function(l){return i.handlePageEvent(l)}),e.qZA()()()),2&o&&(e.xp6(5),e.Q6J("ngForOf",null==i.listFav?null:i.listFav.data),e.xp6(1),e.Q6J("length",null==i.listFav?null:i.listFav.totalNumberOfRecords)("pageSize",i.pageSize)("pageIndex",i.pageNumber)("pageSizeOptions",e.DdM(5,h)))},dependencies:[s.sg,v.NW,s.H9]})}return a})()}];let F=(()=>{class a{static#e=this.\u0275fac=function(o){return new(o||a)};static#t=this.\u0275mod=e.oAB({type:a});static#o=this.\u0275inj=e.cJS({imports:[p.Bz.forChild(f),p.Bz]})}return a})();var b=n(8718);let Z=(()=>{class a{static#e=this.\u0275fac=function(o){return new(o||a)};static#t=this.\u0275mod=e.oAB({type:a});static#o=this.\u0275inj=e.cJS({imports:[s.ez,F,b.G]})}return a})()}}]);