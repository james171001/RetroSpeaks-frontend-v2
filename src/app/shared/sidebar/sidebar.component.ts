import { Component, EventEmitter, Output } from '@angular/core';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  @Output() createButtonClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() homeButtonClick: EventEmitter<void> = new EventEmitter<void>();

  constructor(private groupService:GroupService){}
  onCreateButtonClick() {
    this.createButtonClick.emit();
  }

  onHomeButtonClick(){
    this.homeButtonClick.emit();
  }

  fetchGroupsByUser(){

    this.groupService.getGroupsByUser
  }
}
