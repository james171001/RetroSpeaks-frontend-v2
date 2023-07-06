import { Component, HostListener } from '@angular/core';
import { ContentCardComponent } from 'src/app/shared/content-card/content-card.component';

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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.toggleBackToTopButton();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private toggleBackToTopButton() {
    const button = document.querySelector('.back-to-top-button') as HTMLElement;
    if (button) {
      button.style.display = window.pageYOffset > 200 ? 'block' : 'none';
    }
  }
}

