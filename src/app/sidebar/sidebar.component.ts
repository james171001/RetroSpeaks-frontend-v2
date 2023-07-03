import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() createButtonClick: EventEmitter<void> = new EventEmitter<void>();

  
  onButtonClick() {
    this.createButtonClick.emit();
  }
}
