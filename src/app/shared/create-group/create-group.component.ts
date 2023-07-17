import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CreateGroupService } from '../services/create-group.service';
import { GroupCreationPayload } from '../models/group-payload';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  groupForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    categoryId: new FormControl('')
  });

  constructor(private groupService: CreateGroupService) { }
  //categoryTypes: string[] = ['ENTERTAINMENT', 'LIFESTYLE', 'SCIENCE_AND_TECHNOLOGY', 'HISTORY', 'BUSINESS_AND_FINANCE'];
  ngOnInit(): void {
  }

  onSubmit(): void {
    
    this.groupService.createGroup(this.groupForm.value as GroupCreationPayload).subscribe(
      response => {
        console.log('Group created', response);
        window.location.reload();
      },
      error => {
        console.log(this.groupForm.value);
        console.error('Error creating group', error);
      }
    );
  }
  

}
