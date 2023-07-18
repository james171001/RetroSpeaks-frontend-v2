import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('container') container!: ElementRef;

  errorMessageVisible: boolean = false;

  success: boolean = false;
  error: boolean = false;
  fail: boolean = false;
  logout: boolean = false;

  // For Sign Up
  signUpForm: FormGroup;
  signUpUserName: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{4,20}$')]);
  signUpPassWord: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{4,20}$')]);
  signUpEmail: FormControl = new FormControl('', [Validators.required,Validators.email]);
  signUpLastName: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{4,20}$')]);
  signUpFirstName: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{4,20}$')]);
  signUpAge: FormControl = new FormControl('', [Validators.required, Validators.min(18),Validators.max(100)]);
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
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      this.errorMessageVisible = true;
      return;
    }

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
    window.alert('Registration Success!');

    this.signUpForm.reset(); // Reset the form
    this.errorMessageVisible = false; // Hide the error message
  }


  
  
  // Helper method to clear error messages
  clearErrors() {
    setTimeout(() => {
      this.error = false;
      this.fail = false;
    }, 5000); // Clear error messages after 5 seconds
  }
  

  signIn() {
    this.authService.authenticate(this.signInForm.value);
  }
  

  get diagnostics() {
    return this.signUpForm.value;
  }
}
