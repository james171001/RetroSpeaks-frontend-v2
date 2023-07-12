import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  @ViewChild('container') container!: ElementRef;

  forgotPassForm: FormGroup;

  constructor(private router: Router, private authService: AuthService) {
    this.forgotPassForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  forgotPassword() {
    if (this.forgotPassForm.invalid) {
      return;
    }

    const email = this.forgotPassForm.get('email')?.value;

    this.authService.forgotPassword(email).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['/']);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
