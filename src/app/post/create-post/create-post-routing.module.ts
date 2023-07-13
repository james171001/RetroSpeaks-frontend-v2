import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewgroupComponent } from 'src/app/group/viewgroup/viewgroup.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateSurveyComponent } from './create-survey/create-survey.component';

const routes: Routes = [

  { path: 'poll', component: CreatePollComponent },
  { path: 'post',component: CreatePostComponent},
  { path: 'survey', component: CreateSurveyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePostRoutingModule { }
