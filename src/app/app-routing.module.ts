import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { ErrorComponent } from './shared/error/error.component';
import { CreatePostComponent } from './create-post/create-post.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  { 
    path: 'auth', 
    component: LayoutComponent,
    loadChildren: () => import('./user-auth/user-auth.module').then(m => m.UserAuthModule) },

  {
    path: 'home',
    component: LayoutComponent,
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)
  },

  {
    path: 'group',
    component: LayoutComponent,
    loadChildren: () => import('./group/group.module').then(m => m.GroupModule)
  },
  { path: 'create-post', component: CreatePostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
