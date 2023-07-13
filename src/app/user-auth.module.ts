import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './user-auth/login/login.component';
import { ForgotPasswordComponent } from './user-auth/forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserAuthRoutingModule } from './user-auth/user-auth-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserAuthRoutingModule,
  ]
})
export class UserAuthModule { }
