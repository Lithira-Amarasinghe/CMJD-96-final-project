import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ItemDto} from "../../dto/ItemDto";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {
  }

  addItem(formData: FormData): Observable<any> {
    return this.http.post('http://localhost:8080/api/v1/items', formData);
  }

  updateItem(formData: FormData): Observable<any> {
    return this.http.put('http://localhost:8080/api/v1/items', formData);
  }

  deleteItem(id: string): Observable<any> {
    return this.http.delete('http://localhost:8080/api/v1/items?id=' + id)
  }

  searchItem(id: any): Observable<any> {
    return this.http.get('http://localhost:8080/api/v1/items/' + id);
  }

  getAllItemsBySearchText(page: any, size: any, searchText: any): Observable<any> {
    return this.http.get('http://localhost:8080/api/v1/items/list?page=' + page + '&size=' + size + '&searchText=' + searchText)
  }
}

