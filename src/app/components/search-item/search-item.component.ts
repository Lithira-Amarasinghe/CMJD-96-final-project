import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../service/item.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {


  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
  }

  imgLink = ''

  searchForm = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    name: new FormControl(null),
    description: new FormControl(null),
    mainCategory: new FormControl(null),
    subCategory: new FormControl(null),
    price: new FormControl(null),
    qty: new FormControl(null),
    // imgUrl: new FormControl()
  })


  searchItem() {
    this.itemService.searchItem(this.searchForm.get('id')?.value).subscribe(response => {
        if(response.item != null) {
          this.searchForm.patchValue({
            name: response.item.name,
            description: response.item.description,
            mainCategory: response.item.mainCategory,
            subCategory: response.item.subCategory,
            price: response.item.price,
            qty: response.item.qty,
            // imgUrl: response.item.imgUrl
          })
          this.imgLink = response.item.imgUrl
        } else {
          alert('empty')
        }
      },error => {
        console.log(error)
      alert('No item found')
      this.searchForm.patchValue({
        name: null,
        description: null,
        mainCategory: null,
        subCategory: null,
        price: null,
        qty: null
      });
      })
  }
}
