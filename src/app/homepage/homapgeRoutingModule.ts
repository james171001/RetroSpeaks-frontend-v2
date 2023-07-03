import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage-feed/homepage-feed.component';

const routes: Routes = [
  { path: 'feed', component: HomepageComponent },
  // Add more routes for the homepage if needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }