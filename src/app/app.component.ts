import { Component } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDarkMode = false;
  rotationDirection = 0;

  constructor(private themeService: ThemeService) {
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
}
