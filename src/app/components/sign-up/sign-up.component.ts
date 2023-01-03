import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserDto} from "../../dtos/UserDto";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  hide = true;
  isSaved = false;
  routerLink = '/sign-up'

  constructor(private userService: UserService) { }


  ngOnInit(): void {
  }
  signUpForm = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    country: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null,[Validators.required,Validators.minLength(8)])
  })

  submitSignUpForm() {
    let user = new UserDto(
      this.signUpForm.get('id')?.value,
      this.signUpForm.get('firstName')?.value,
      this.signUpForm.get('lastName')?.value,
      this.signUpForm.get('dateOfBirth')?.value,
      this.signUpForm.get('country')?.value,
      this.signUpForm.get('email')?.value,
      this.signUpForm.get('username')?.value,
      this.signUpForm.get('password')?.value
    );

    this.userService.addNewUser(user).subscribe(response => {
      alert('Successfully saved')
      console.log(response)
      this.isSaved = true
      this.routerLink = '/login'
    },error => {
      alert("Not saved");
      console.log(error);
    });
  }

}
