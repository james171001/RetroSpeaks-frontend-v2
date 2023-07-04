import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('container') container!: ElementRef;

 // signupForm: FormGroup;
  signInForm: FormGroup;
  success: boolean = false;
  error: boolean = false;
  fail: boolean = false;
  logout: boolean = false;

  suserName: FormControl = new FormControl("", Validators.required);
  spassWord: FormControl = new FormControl
  userName: FormControl = new FormControl("", Validators.required);
  passWord: FormControl = new FormControl("", Validators.required);

  // email: FormControl = new FormControl("", Validators.required);
  lastName: FormControl = new FormControl("", Validators.required);

  firstName: FormControl = new FormControl("", Validators.required);
  age: FormControl = new FormControl("", Validators.required);

   
  constructor(private router: Router,private authService:AuthService) {
    // this.signupForm = new FormGroup({
    //   // suserName: this.suserName,
    //   // spassWord: this.spassWord,
    //   // email : this.email,
    //   lastName: this.lastName,
    //   age: this.age,
    //   passWord1: this.passWord,
    // })

    this.signInForm = new FormGroup({
      userName: this.userName,
      passWord: this.passWord,
    })
   

  }

  switchToSignUp() {
    this.container.nativeElement.classList.add('right-panel-active');
  }

  switchToSignIn() {
    this.container.nativeElement.classList.remove('right-panel-active');
  }

  signUp() {
  }

  signIn() {
    this.authService.authenticate(this.signInForm.value).subscribe({
      next: response =>{
        console.log(response);
      },
      error: error => console.log(this.error)
    });
  }
  get diagnostics(){
    return this.signInForm.value;
  }
}
