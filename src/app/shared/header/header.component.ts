import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchQuery: string = '';

  resetSearch() {
    this.searchQuery = '';
  }

  performSearch() {
    // Implement your search functionality here
    console.log('Performing search:', this.searchQuery);
  }
}
