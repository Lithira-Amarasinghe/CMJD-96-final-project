import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http : HttpClient) { }

  getAllItemsBySearchText(page: any, size: any, searchText: any): Observable<any> {
    return this.http.get('http://localhost:8080/api/v1/items/list?page=' + page + '&size=' + size + '&searchText=' + searchText)
  }

  getAllSubCategoriesByMainCategory(mainCategory: string): Observable<any> {
    return this.http.get('http://localhost:8080/api/v1/items/allItemsByMainCategory/'+mainCategory);
  }

  getAllItemsByMainCategory(mainCategory: string): Observable<any>{
    return this.http.get('http://localhost:8080/api/v1/items/allItemsByMainCategory?mainCategory='+mainCategory);
  }
}
