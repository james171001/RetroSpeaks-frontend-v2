import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFeedComponent } from './user-feed/user-feed.component';
import { HomepageRoutingModule } from './hompageRoutingModule';
import { CardModule } from 'primeng/card';

import { CreateButtonsComponent } from '../create-buttons/create-buttons.component';
import { CreatePollComponent } from '../post/create-post/create-poll/create-poll.component';
import { FormsModule } from '@angular/forms';
import { CreatePostComponent } from '../post/create-post/create-post/create-post.component';
import { CreateSurveyComponent } from '../post/create-post/create-survey/create-survey.component';



@NgModule({
  declarations: [
    UserFeedComponent,
    CreatePostComponent,
    CreateButtonsComponent,
    CreatePollComponent,
    CreateSurveyComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    CardModule,
    FormsModule
  ]
})
export class HomepageModule { }
