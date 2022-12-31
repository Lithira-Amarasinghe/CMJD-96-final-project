import { Injectable } from '@angular/core';
import {ItemDto} from "../dto/ItemDto";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  saveItem(item:ItemDto):Observable<any>{
    return this.http.post('http://localhost:8080/api/v1/items',{
      id: item.id,
      name:item.name,
      mainCategory:item.mainCategory,
      subCategory:item.subCategory,
      description:item.description,
      price:item.price,
      qty:item.qty,
      imgUrl:item.imgUrl
    });
  }

  updateItem(item:ItemDto):Observable<any>{
    return this.http.put('http://localhost:8080/api/v1/items',{
      id: item.id,
      name:item.name,
      description:item.description,
      mainCategory:item.mainCategory,
      subCategory:item.subCategory,
      price:item.price,
      qty:item.qty,
      imgUrl:item.imgUrl
    });
  }

  searchItem(id: any): Observable<any>{
    return this.http.get('http://localhost:8080/api/v1/items/' + id);
  }

  getAllItemsByMainCategory(page:any, size:any, searchText:any):Observable<any>{
    return this.http.get('http://localhost:8080/v1/api/items/list?page='+page+'&size='+size+'&searchText='+searchText)
  }
}

