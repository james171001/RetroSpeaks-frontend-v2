// edit-profile.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.profileForm = this.formBuilder.group({
      passWord: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  ngOnInit() {
    const userId = this.route.snapshot.params['userId'];
    this.userService.getUserById(userId).subscribe(
      (user) => {
        this.profileForm.patchValue({
          passWord: user.passWord,
          firstName: user.firstName,
          lastName: user.lastName,
          gender: user.gender
        });
      },
      (error) => {
        console.error('Failed to fetch user details:', error);
      }
    );
  }

  saveChanges() {
    const userId = this.route.snapshot.params['userId'];
    const updatedUser = this.profileForm.value;
    this.userService.updateUserProfile(userId, updatedUser).subscribe(
      (response) => {
        console.log('Profile updated successfully:', response);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Failed to update profile:', error);
      }
    );
  }
}
