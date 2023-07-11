import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('container') container!: ElementRef;

  success: boolean = false;
  error: boolean = false;
  fail: boolean = false;
  logout: boolean = false;

  // For Sign Up
  signUpForm: FormGroup;
  signUpUserName: FormControl = new FormControl('', Validators.required);
  signUpPassWord: FormControl = new FormControl();
  signUpEmail: FormControl = new FormControl('', Validators.required);
  signUpLastName: FormControl = new FormControl('', Validators.required);
  signUpFirstName: FormControl = new FormControl('', Validators.required);
  signUpAge: FormControl = new FormControl('', Validators.required);

  // For Sign In
  signInForm: FormGroup;
  userName: FormControl = new FormControl('', Validators.required);
  passWord: FormControl = new FormControl('', Validators.required);

  constructor(private router: Router, private authService: AuthService) {
    this.signUpForm = new FormGroup({
      signUpUserName: this.signUpUserName,
      signUpPassWord: this.signUpPassWord,
      signUpEmail: this.signUpEmail,
      signUpLastName: this.signUpLastName,
      signUpFirstName: this.signUpFirstName,
      signUpAge: this.signUpAge,
    });

    this.signInForm = new FormGroup({
      userName: this.userName,
      passWord: this.passWord,
    });
  }

  switchToSignUp() {
    this.container.nativeElement.classList.add('right-panel-active');
  }

  switchToSignIn() {
    this.container.nativeElement.classList.remove('right-panel-active');
  }

  signUp() {
    const formValue = this.signUpForm.value;

    const model = {
      userName: formValue.signUpUserName,
      passWord: formValue.signUpPassWord,
      email: formValue.signUpEmail,
      lastName: formValue.signUpLastName,
      firstName: formValue.signUpFirstName,
      gender: '', // Set the desired value for the gender property
    };

    this.authService.registerUser(model);
  
  }

  signIn() {
    this.authService.authenticate(this.signInForm.value);
  }
  

  get diagnostics() {
    return this.signUpForm.value;
  }
}
