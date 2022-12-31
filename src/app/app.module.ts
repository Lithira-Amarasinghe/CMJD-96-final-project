import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoesComponent } from './components/shoes/shoes.component';
import { HandbagsComponent } from './components/handbags/handbags.component';
import { JewelryAndAccessoriesComponent } from './components/jewelry-and-accessories/jewelry-and-accessories.component';
import { MenComponent } from './components/men/men.component';
import { KidsComponent } from './components/kids/kids.component';
import { SaleComponent } from './components/sale/sale.component';
import { DesignersComponent } from './components/designers/designers.component';
import { EditorialComponent } from './components/editorial/editorial.component';
import { GiftsComponent } from './components/gifts/gifts.component';
import {WomenComponent} from "./components/women/women.component";
import { WomenCategoriesComponent } from './components/women/women-categories/women-categories.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HttpClientModule} from "@angular/common/http";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatDatepickerModule, MatDatepickerToggle} from "@angular/material/datepicker";
import {ShoppingCartComponent} from "./components/shopping-cart/shopping-cart.component";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {MainHeaderFooterComponent} from "./components/main-header-footer/main-header-footer.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ShoesComponent,
    HandbagsComponent,
    JewelryAndAccessoriesComponent,
    MenComponent,
    KidsComponent,
    SaleComponent,
    DesignersComponent,
    EditorialComponent,
    GiftsComponent,
    WomenComponent,
    WomenCategoriesComponent,
    ShoppingCartComponent,
    LoginComponent,
    MainHeaderFooterComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatListModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




