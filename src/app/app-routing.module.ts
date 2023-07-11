import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AuthGuard } from './shared/services/auth-guard.service';
import { LoginComponent } from './user-auth/login/login.component';

const routes: Routes = [
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
    path: 'group',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./group/group.module').then(m => m.GroupModule)
  },
  { path: 'create-post', component: CreatePostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
