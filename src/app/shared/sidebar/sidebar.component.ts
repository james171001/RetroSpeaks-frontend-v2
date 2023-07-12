import { Component, EventEmitter, Output } from '@angular/core';
import { GroupService } from '../services/group.service';
import { Group } from '../models/group';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  groups: Group[]=[];
  @Output() createButtonClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() homeButtonClick: EventEmitter<void> = new EventEmitter<void>();

  constructor(private groupService:GroupService){
    this.fetchGroupsByUser();
  }
  onCreateButtonClick() {
    this.createButtonClick.emit();
  }

  onHomeButtonClick(){
    this.homeButtonClick.emit();
  }

  fetchGroupsByUser() {
    this.groupService.findAll().subscribe(
      groups => {
        this.groups = groups;
        
     
      },
      error => {
        console.error('Error fetching groups:', error);

      }
    );
  }
  
}
