import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CreateGroupService } from '../services/create-group.service';
import { GroupCreationPayload } from '../models/group-payload';
import { MatDialogRef } from '@angular/material/dialog'; // Import MatDialogRef
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css'],
})
export class CreateGroupComponent implements OnInit {
  groupForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    categoryId: new FormControl(''),
  });


  categoryMapping: { [key: string]: number } = {
    'General': 5,
    'Politics': 1,
    'Arts': 4,
    'Business': 3,
    'Entertainment': 2,
  };

  constructor(
    private groupService: CreateGroupService,
    private dialogRef: MatDialogRef<CreateGroupComponent>, // Add this line
    private snackBar: MatSnackBar // Add this line for MatSnackBar
  ) {}
  //categoryTypes: string[] = ['ENTERTAINMENT', 'LIFESTYLE', 'SCIENCE_AND_TECHNOLOGY', 'HISTORY', 'BUSINESS_AND_FINANCE'];
  ngOnInit(): void {}

  onSubmit(): void {
      const categoryName: string | null | undefined = this.groupForm.value.categoryId;
      let categoryId: number = 0 ;

    if (categoryName) {
      categoryId = this.categoryMapping[categoryName];
    }

      const groupPayload: GroupCreationPayload = {
        name: this.groupForm.value.name ?? '',
        description: this.groupForm.value.description ?? '',
        categoryId: categoryId,
      };
    
      this.groupService.createGroup(groupPayload).subscribe(
        (response) => {
          console.log(categoryId)
          console.log('Group created', response);
          this.dialogRef.close();
          this.showSuccessMessage('Group created successfully');
        },
        (error) => {
          console.error('Error creating group', error);
          this.showErrorMessage('Error creating group');
        }
      );
  }

  // Function to show the error message using MatSnackBar
  private showErrorMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000, // Duration in milliseconds (e.g., 5 seconds)
      horizontalPosition: 'center', // Position horizontally at the center
      verticalPosition: 'bottom', // Position vertically at the bottom
    });
  }

  // Function to show the success message using MatSnackBar
  private showSuccessMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: 'success-snackbar', // Custom CSS class for the success snackbar
    });
  }
}
