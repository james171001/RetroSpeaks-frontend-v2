import { Component, OnInit } from '@angular/core';
import { AuthStateService } from '../services/auth-state.service';
import { AuthService } from '../../services/auth.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  searchQuery: string = '';

  ngOnInit() {
    this.usernameText = this.authStateService.getUsername();
  }

  usernameText: string | null = null;

  constructor(private authStateService: AuthStateService, private authService: AuthService, private themeService: ThemeService) { }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }

  resetSearch() {
    this.searchQuery = '';
  }

  performSearch() {
    // Implement your search functionality here
    console.log('Performing search:', this.searchQuery);
  }

  logout() {
    this.authService.logout();
  }
}
