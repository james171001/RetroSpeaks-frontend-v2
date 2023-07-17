import { Component, OnInit } from '@angular/core';
import { AuthStateService } from '../services/auth-state.service';
import { AuthService } from '../../services/auth.service';
import { ThemeService } from '../services/theme.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchQuery: string = '';

  usernameText: string | null = null;
  userId: string | null = null;

  constructor(
    private authStateService: AuthStateService,
    private authService: AuthService,
    private userService: UserService,
    private themeService: ThemeService,
    private router: Router
  ) {}

  isToggle: boolean = false;
  darkMode = false;

  toggleLink() {
    if (this.isToggle) {
      // Redirect to http://localhost:4200/home/feed
      this.router.navigate(['/home/feed']);
    }
  }

  ngOnInit() {
    this.usernameText = this.authStateService.getUsername();
    this.userId = this.authStateService.getUserId();
    this.isToggle = this.authStateService.isAuthenticated();


  }

  toggleDarkMode(event: Event) {
    this.darkMode = (event.target as HTMLInputElement).checked;
    this.themeService.toggleDarkMode();
  }
  

  resetSearch() {
    this.searchQuery = '';
  }

  performSearch() {
    // Implement your search functionality here
    console.log('Performing search:', this.searchQuery);
  }

  goToEditProfile() {
    const userId = this.authStateService.getUserId();
    if (userId) {
      this.router.navigate([`user/${userId}/edit-profile`]);
    } else {
      console.error('User ID not found.');
    }
  }

  logout() {
    this.authService.logout();
  }
}
