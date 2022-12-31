import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {

  }
  loginForm = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null,[Validators.required,Validators.minLength(8)])
  })

  loginProcess(){
    this.getPasswordForUsername();
  }

  getPasswordForUsername(){
    this.userService.getUserByUsername(
      this.loginForm.get('username')?.value).subscribe(respones => {
        console.log(respones.object)
    }, error => {
      console.log(error)
    })
  }
}
