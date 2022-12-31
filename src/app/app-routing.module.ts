import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from "path";
import {AddItemComponent} from "./components/add-item/add-item.component";
import {UpdateItemComponent} from "./components/update-item/update-item.component";
import {RemoveItemComponent} from "./components/remove-item/remove-item.component";
import {AddMainCategoryComponent} from "./components/add-main-category/add-main-category.component";
import {AddSubCategoryComponent} from "./components/add-sub-category/add-sub-category.component";
import {RemoveMainCategoryComponent} from "./components/remove-main-category/remove-main-category.component";
import {UpdateMainCategoryComponent} from "./components/update-main-category/update-main-category.component";
import {UpdateSubCategoryComponent} from "./components/update-sub-category/update-sub-category.component";
import {RemoveSubCategoryComponent} from "./components/remove-sub-category/remove-sub-category.component";
import {SearchItemComponent} from "./components/search-item/search-item.component";


const routes: Routes = [
  {path: '',component:AddItemComponent},
  {path: 'add-item',component:AddItemComponent},
  {path: 'update-item',component:UpdateItemComponent},
  {path: 'remove-item',component:RemoveItemComponent},
  {path: 'add-main-category',component:AddMainCategoryComponent},
  {path: 'update-main-category',component:UpdateMainCategoryComponent},
  {path: 'remove-main-category',component:RemoveMainCategoryComponent},
  {path: 'add-sub-category',component:AddSubCategoryComponent},
  {path: 'update-sub-category',component:UpdateSubCategoryComponent},
  {path: 'remove-sub-category',component:RemoveSubCategoryComponent},
  {path: 'search-item', component: SearchItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
