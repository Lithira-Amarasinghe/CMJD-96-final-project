import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserDto} from "../../dtos/UserDto";

@Injectable({
  providedIn: 'root'
})

export class UserService {


  constructor(private http: HttpClient,
              ) { }

  addNewUser(user: UserDto): Observable<any>{

    return this.http.post( 'http://localhost:8080/api/v1/users',{
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      dateOfBirth: user.dateOfBirth,
      country: user.country,
      email: user.email,
      username: user.username,
      password: user.password
    });
  }

  getUserByUsername(username: any): Observable<any> {
    return this.http.get('http://localhost:8080/api/v1/users/' + username);

  }
}
