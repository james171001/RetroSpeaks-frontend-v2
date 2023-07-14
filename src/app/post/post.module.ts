import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ViewPostComponent } from './view-post/view-post.component';
import { PostComponent } from './post/post.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CreatePostComponent } from './create-post/create-post/create-post.component';
import { CreatePollComponent } from './create-post/create-poll/create-poll.component';
import { CreateSurveyComponent } from './create-post/create-survey/create-survey.component';
import { PostRoutingModule } from './post-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';


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
    FormsModule,
    PostRoutingModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule,

  ]
})
export class PostModule { }
