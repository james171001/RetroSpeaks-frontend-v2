import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFeedComponent } from './user-feed/user-feed.component';
import { HomepageRoutingModule } from './hompageRoutingModule';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { ContentCardComponent } from '../shared/content-card/content-card.component';
import { Post } from '../shared/models/post';
import { PostService } from '../shared/services/post.service';
import { PollContentCardComponent } from '../shared/poll-content-card/poll-content-card.component';
import { SurveyContentCardComponent } from '../shared/survey-content-card/survey-content-card.component';
import { GroupModule } from '../group/group.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    UserFeedComponent,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    CardModule,
    FormsModule,
    MatTabsModule,
    SharedModule,
  ]
})
export class HomepageModule { 
  allPosts: Post[] = []; // Define the allPosts property as an array of Post

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    // Fetch all posts from the API
    this.postService.getAllPostsFromApi().subscribe(
      (posts) => {
        this.allPosts = posts;
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }
}
