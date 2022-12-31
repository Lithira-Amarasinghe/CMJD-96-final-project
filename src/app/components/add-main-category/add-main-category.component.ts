import { Component, OnInit } from '@angular/core';
// import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-main-category',
  templateUrl: './add-main-category.component.html',
  styleUrls: ['./add-main-category.component.css']
})
export class AddMainCategoryComponent implements OnInit {

  constructor() {

    // @ts-ignore
    document.getElementById('side-nav-content').innerHTML = "<app-add-main-category></app-add-main-category>";
  }


  ngOnInit(): void {
    // @ts-ignore

  }

}
