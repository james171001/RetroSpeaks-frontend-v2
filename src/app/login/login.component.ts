import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('container') container!: ElementRef;

  signupForm: FormGroup;
  signInForm: FormGroup;
  success: boolean = false;
  error: boolean = false;
  fail: boolean = false;
  logout: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      firstName: [''],
      lastName: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.signInForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
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
  }
}
