import { Component } from '@angular/core';
import { ContentCardComponent } from 'src/app/content-card/content-card.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage-feed.component.html',
  styleUrls: ['./homepage-feed.component.css'],
})

export class HomepageComponent {
  showCreatePostComponent: boolean = false;
  showFeedComponent:boolean = true;

  showCreatePost() {
    this.showCreatePostComponent = true;
    this.showFeedComponent = false;
  }

  showHomeFeed(){
    this.showFeedComponent =true;
    this.showCreatePostComponent = false;
  }

  isFeedComponentVisible() {
    return this.showFeedComponent && !this.showCreatePostComponent;
  }
}


