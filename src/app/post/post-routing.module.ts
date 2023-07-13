import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostNavComponent } from './post-nav/post-nav.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    
    path: 'submit',
    component: PostComponent,
    loadChildren: () => import('../post/create-post/create-post.module').then(m => m.CreatePostModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
