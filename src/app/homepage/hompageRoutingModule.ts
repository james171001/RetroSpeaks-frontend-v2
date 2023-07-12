import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFeedComponent } from './user-feed/user-feed.component';
// import { ContentCardComponent } from '../shared/content-card/content-card.component';
// import { CreateSurveyComponent } from '../create-survey/create-survey.component';
// import { CreatePostComponent } from '../create-post/create-post.component';
// import { CreatePollComponent } from '../create-poll/create-poll.component';

const routes: Routes = [
  { path: 'feed', component: UserFeedComponent },
  // { path: 'survey', component: CreateSurveyComponent},
  // { path: 'poll', component: CreatePollComponent},
  // { path: 'post', component: CreatePostComponent},
  // Add more routes for the homepage if needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }