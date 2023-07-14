import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GroupService } from '../services/group.service';
import { Group } from '../models/group';
import { Router } from '@angular/router';
import { CreateGroupComponent } from '../create-group/create-group.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  groups: Group[]=[];
  @Output() createButtonClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() homeButtonClick: EventEmitter<void> = new EventEmitter<void>();

  constructor(private groupService:GroupService, private router:Router, public dialog: MatDialog){
    this.fetchGroupsByUser();
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

  openCreateGroupDialog(): void {
    const dialogRef = this.dialog.open(CreateGroupComponent, {
      width: '212px',
      height: '312px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.fetchGroupsByUser(); // Refresh the groups list after closing the dialog
    });
  }
}
