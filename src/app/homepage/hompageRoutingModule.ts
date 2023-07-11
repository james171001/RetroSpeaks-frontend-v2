import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFeedComponent } from './user-feed/user-feed.component';
import { ContentCardComponent } from '../shared/content-card/content-card.component';

const routes: Routes = [
  { path: 'feed', component: UserFeedComponent }
  // Add more routes for the homepage if needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }