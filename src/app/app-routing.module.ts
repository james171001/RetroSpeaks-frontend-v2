import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user-auth/login/login.component';
import { ErrorComponent } from './shared/error/error.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ForgotPasswordComponent } from './user-auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './user-auth/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  // {path:'login', component:LoginComponent},
  { path: 'auth', loadChildren: () => import('./user-auth/user-auth.module').then(m => m.UserAuthModule) },
  {path:'error', component: ErrorComponent},
  { path: 'homepage', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) },
  {path:'create-post', component:CreatePostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
