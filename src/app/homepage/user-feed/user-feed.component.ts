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
        this.sortPostsByNewest()
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }
  sortPostsByNewest() {
    this.allPosts.sort((a, b) => {
      const dateA = a.postDate ? new Date(a.postDate) : null;
      const dateB = b.postDate ? new Date(b.postDate) : null;
  
      if (!dateA && !dateB) {
        return 0; // If both dates are undefined or null, consider them equal
      } else if (!dateA) {
        return 1; // If dateA is undefined or null, place it after dateB
      } else if (!dateB) {
        return -1; // If dateB is undefined or null, place it after dateA
      } else {
        return dateB.getTime() - dateA.getTime(); // Sort in descending order (newest first)
      }
    });
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

