import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ManageItemsComponent} from "./components/manage-items/manage-items.component";

const routes: Routes = [
  {path:'', redirectTo:'ManageItemsComponent', pathMatch:"full"},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'manage-items', component: ManageItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
