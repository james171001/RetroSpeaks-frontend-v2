import { Component, HostListener } from '@angular/core';
import { ContentCardComponent } from 'src/app/shared/content-card/content-card.component';


interface Post {
  title: string;
  description: string;
  commentCount: number;
}



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage-feed.component.html',
  styleUrls: ['./homepage-feed.component.css'],
})

export class HomepageComponent {
  showCreatePostComponent: boolean = false;
  showCreatePollCard: boolean = false;
  showCreateSurveyCard: boolean = false;

  showFeedComponent:boolean = true;

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

  showHomeFeed(){
    this.showFeedComponent =true;
    this.showCreatePostComponent = false;
    this.showCreatePollCard = false;
    this.showCreateSurveyCard = false;
  }

  isFeedComponentVisible() {
    return this.showFeedComponent && !this.showCreatePostComponent;
  }


  posts: Post[] = [
    {
      title: 'Sample Issue 1',
      description: 'This is a sample content card 1',
      commentCount: 5
    },
    {
      title: 'Sample Issue 2',
      description: 'This is a sample content card 2',
      commentCount: 10
    },
    {
      title: 'Sample Issue 3',
      description: 'This is a sample content card 3',
      commentCount: 2
    }
  ];
}

