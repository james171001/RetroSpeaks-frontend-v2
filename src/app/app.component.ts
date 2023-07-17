import { Component,Renderer2, ElementRef, HostListener } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDarkMode = false;
  rotationDirection = 0;
  scrollOffset = 400;
  showBackToTopButton = false;

  constructor(private themeService: ThemeService,private renderer: Renderer2, private elementRef: ElementRef) {
    this.themeService.themeChangeEmitter.subscribe(isDarkMode => {
      this.isDarkMode = isDarkMode;
    });
    this.themeService.rotationChangeEmitter.subscribe(rotationDirection => {
      this.rotationDirection = rotationDirection;
    });
  }

  toggleRotation() {
    this.themeService.toggleRotation();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.toggleBackToTopButton();
  }

  toggleBackToTopButton() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const button = this.elementRef.nativeElement.querySelector('.back-to-top-button');
    const showScrollThreshold = 650; 

    if (scrollPosition > showScrollThreshold) {
      this.renderer.setStyle(button, 'display', 'block');
    } else {
      this.renderer.setStyle(button, 'display', 'none');
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


}
