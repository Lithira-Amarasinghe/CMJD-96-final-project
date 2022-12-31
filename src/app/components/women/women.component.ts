import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../service/item-service/item.service";

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  itemData: any[] = []
  subCategoryData: any[] = []

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {

    this.getAllItemsByMainCategory('women')
    this.getAllWomenSubCategoriesByMainCategory('women');
  }

  getAllItemsByMainCategory(searchText: string) {
    this.itemService.getAllItemsByMainCategory(searchText).subscribe(response => {
      console.log(response)
      console.log(response.object.dataCount)
      console.log(response.object)
      this.itemData = response.object.list
    }
    , error => {
      console.log(error)
    }
    )
  }

  getAllWomenSubCategoriesByMainCategory(mainCategory: string) {
    this.itemService.getAllSubCategoriesByMainCategory(mainCategory).subscribe(response => {
        console.log(response)
        this.subCategoryData = response.object.list;
        console.log(this.subCategoryData)
      }
      , error => {
        console.log(error)
      }
    );
  }

  addItemToCart(id: String){
    // this.itemService.addItemToCart(id);
  }
}
