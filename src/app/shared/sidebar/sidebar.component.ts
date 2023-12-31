import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GroupService } from '../services/group.service';
import { Group } from '../models/group';
import { Router } from '@angular/router';
import { CreateGroupComponent } from '../create-group/create-group.component';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  groups: Group[]=[];
  categories: Category[] =[]
  @Output() createButtonClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() homeButtonClick: EventEmitter<void> = new EventEmitter<void>();

  constructor(private groupService:GroupService, private categoryService:CategoryService, private router:Router, public dialog: MatDialog, private themeService: ThemeService,){
    this.fetchGroupsByUser();
    this.fetchCategory();
  }

  isDarkModeEnabled(): boolean {
    return this.themeService.isDarkMode;
  }

  
  fetchCategory() {
    this.categoryService.setBaseUrl('','');
    this.categoryService.findAll().subscribe(
      categories => {
        this.categories = categories;
      },
      error => {
        console.error('Error fetching groups:', error);
      }
    );
  }


  fetchGroupsByUser() {
    this.groupService.setBaseUrl('','');
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
      width: '450px',
      height: '420px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.fetchGroupsByUser(); // Refresh the groups list after closing the dialog
    });
  }
}
