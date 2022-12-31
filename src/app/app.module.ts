import { NgModule } from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageItemsComponent } from './components/manage-items/manage-items.component';
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { DeleteConfimationDialogComponent } from './components/manage-items/delete-confimation-dialog/delete-confimation-dialog.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ManageItemsComponent,
    DeleteConfimationDialogComponent,
    LoginComponent
  ],
  entryComponents:[DeleteConfimationDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
