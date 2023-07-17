import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public isDarkMode = false;
  public rotationDirection = 0;

  themeChangeEmitter = new EventEmitter<boolean>();
  rotationChangeEmitter = new EventEmitter<number>();

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    
    this.themeChangeEmitter.emit(this.isDarkMode);
  }

  toggleRotation() {
    this.rotationDirection = (this.rotationDirection + 90) % 360;
    document.body.classList.remove('rotate-0', 'rotate-90', 'rotate-180', 'rotate-270');
    document.body.classList.add(`rotate-${this.rotationDirection}`);
    
    this.rotationChangeEmitter.emit(this.rotationDirection);
  }
}
