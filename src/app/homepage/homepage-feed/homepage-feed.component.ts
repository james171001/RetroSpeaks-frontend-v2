import { Component, HostListener } from '@angular/core';
import { ContentCardComponent } from 'src/app/shared/content-card/content-card.component';

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
  }

  isFeedComponentVisible() {
    return this.showFeedComponent && !this.showCreatePostComponent;
  }

  showBackToTopButton: boolean = false;

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showBackToTopButton = scrollPosition > 200; 
  }


}

