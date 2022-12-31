import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {AddItemComponent} from "./components/add-item/add-item.component";
import {UpdateItemComponent} from "./components/update-item/update-item.component";
import {RemoveItemComponent} from "./components/remove-item/remove-item.component";
import {AddMainCategoryComponent} from "./components/add-main-category/add-main-category.component";
import {UpdateMainCategoryComponent} from "./components/update-main-category/update-main-category.component";
import {AddSubCategoryComponent} from "./components/add-sub-category/add-sub-category.component";
import {UpdateSubCategoryComponent} from "./components/update-sub-category/update-sub-category.component";
import {RemoveSubCategoryComponent} from "./components/remove-sub-category/remove-sub-category.component";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientJsonpModule, HttpClientModule, HttpResponse} from "@angular/common/http";
import {AngularMaterialModule} from "./angular-material.module";
import {SearchItemComponent} from "./components/search-item/search-item.component";
import { ItemsManageComponent } from './components/items-manage/items-manage.component';


@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    UpdateItemComponent,
    RemoveItemComponent,
    AddMainCategoryComponent,
    UpdateMainCategoryComponent,
    RemoveItemComponent,
    AddSubCategoryComponent,
    UpdateSubCategoryComponent,
    RemoveSubCategoryComponent,
    SearchItemComponent,
    ItemsManageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

