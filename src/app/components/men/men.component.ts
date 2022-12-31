import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../service/item-service/item.service";

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getAllItemsBySearchText(1,1, '');
  }



}
