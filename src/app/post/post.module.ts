import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewPostComponent } from './view-post/view-post.component';
import { PostComponent } from './post/post.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CreatePostComponent } from './create-post/create-post/create-post.component';
import { CreatePollComponent } from './create-post/create-poll/create-poll.component';
import { CreateSurveyComponent } from './create-post/create-survey/create-survey.component';
import { PostRoutingModule } from './post-routing.module';


@NgModule({
  declarations: [
    ViewPostComponent,
    PostComponent,
    CreatePostComponent,
    CreatePollComponent,
    CreateSurveyComponent
   

  ],
  imports: [
    CommonModule,
    MatTabsModule,
    PostRoutingModule,


  ]
})
export class PostModule { }
