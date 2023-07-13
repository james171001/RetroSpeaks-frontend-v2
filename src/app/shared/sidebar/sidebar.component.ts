import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GroupService } from '../services/group.service';
import { Group } from '../models/group';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  groups: Group[]=[];
  @Output() createButtonClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() homeButtonClick: EventEmitter<void> = new EventEmitter<void>();

  constructor(private groupService:GroupService, private router:Router){}
  ngOnInit() {
   this.fetchGroupsByUser();
  }
  onCreateButtonClick() {
    this.createButtonClick.emit();
  }

  onHomeButtonClick(){
    this.router.navigate(['/home/feed']); 
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
  navigateToGroup(groupId: number) {
    this.router.navigate(['/group', groupId]); 
  }
  
}
