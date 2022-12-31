import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ShoesComponent} from "./components/shoes/shoes.component";
import {HandbagsComponent} from "./components/handbags/handbags.component";
import {JewelryAndAccessoriesComponent} from "./components/jewelry-and-accessories/jewelry-and-accessories.component";
import {MenComponent} from "./components/men/men.component";
import {KidsComponent} from "./components/kids/kids.component";
import {SaleComponent} from "./components/sale/sale.component";
import {DesignersComponent} from "./components/designers/designers.component";
import {EditorialComponent} from "./components/editorial/editorial.component";
import {GiftsComponent} from "./components/gifts/gifts.component";
import {WomenComponent} from "./components/women/women.component";
import {LoginComponent} from "./components/login/login.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {MainHeaderFooterComponent} from "./components/main-header-footer/main-header-footer.component";
import {IndoorComponent} from "./components/indoor/indoor.component";
import {ShoppingCartComponent} from "./components/shopping-cart/shopping-cart.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";

const routes: Routes = [
  {path: '', redirectTo: 'LoginComponent', pathMatch: "full"},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'main', component: MainHeaderFooterComponent, children:[
      {path: 'home', component: HomePageComponent},
      {path: 'women', component: WomenComponent},
      {path: 'shoes', component: ShoesComponent},
      {path: 'handbags', component: HandbagsComponent},
      {path: 'jewelry&accessories', component: JewelryAndAccessoriesComponent},
      {path: 'men', component: MenComponent},
      {path: 'kids', component: KidsComponent},
      {path: 'indoor', component: IndoorComponent},
      {path: 'sale', component: SaleComponent},
      {path: 'designer', component: DesignersComponent},
      {path: 'editorial', component: EditorialComponent},
      {path: 'gifts', component: GiftsComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
