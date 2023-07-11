import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage-feed/homepage-feed.component';
import { HomepageRoutingModule } from './homapgeRoutingModule';
import { CardModule } from 'primeng/card';
import { CreatePostComponent } from '../create-post/create-post.component';
import { CreateButtonsComponent } from '../create-buttons/create-buttons.component';
import { CreatePollComponent } from '../create-poll/create-poll.component';
import { CreateSurveyComponent } from '../create-survey/create-survey.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomepageComponent,
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
