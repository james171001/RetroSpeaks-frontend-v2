import { Component, HostListener } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { Post } from 'src/app/shared/models/post';
import { PostService } from 'src/app/shared/services/post.service';
import { ContentCardComponent } from 'src/app/shared/content-card/content-card.component';



@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css'],
})

export class UserFeedComponent {
  showCreatePostComponent: boolean = true;
  showCreatePollCard: boolean = false;
  showCreateSurveyCard: boolean = false;

  showFeedComponent:boolean = true;


  constructor(private postService: PostService) { }

  allPosts: Post[] = [];

  ngOnInit(): void {
    // Fetch all posts from the API
    this.postService.getAllPostsFromApi().subscribe(
      (posts) => {
        this.allPosts = posts; // Assign the fetched posts to the allPosts property
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }





  handleShowCreatePollEvent(createPollActive: boolean) {
    this.showCreatePollCard = createPollActive;
    this.showCreatePostComponent = false;
    this.showCreateSurveyCard = false;
  }

  handleShowCreateSurveyEvent(createSurveyActive: boolean) {
    this.showCreateSurveyCard = createSurveyActive;
    this.showCreatePollCard = false;
    this.showCreatePostComponent = false;
  }

  handleShowCreatePostEvent() {
    this.showCreatePostComponent = true;
    this.showFeedComponent = false;
    this.showCreatePollCard = false;
    this.showCreateSurveyCard = false;
  }

  showUserFeed(){
    this.showFeedComponent =true;
    this.showCreatePostComponent = false;
    this.showCreatePollCard = false;
    this.showCreateSurveyCard = false;
  }

  isFeedComponentVisible() {
    return this.showFeedComponent && !this.showCreatePostComponent;
  }


  


  
}

