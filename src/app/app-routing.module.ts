import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { AuthGuard } from './shared/services/auth-guard.service';
import { LoginComponent } from './user-auth/login/login.component';
import { ForgotPasswordComponent } from './user-auth/forgot-password/forgot-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { 
    path: '', 
    component: LoginComponent,
    loadChildren: () => import('./user-auth/user-auth.module').then(m => m.UserAuthModule) },
 
  {
    
    path: 'home',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)
  },

  {
    path: 'group/:id',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./group/group.module').then(m => m.GroupModule)
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
