import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  profileForm: FormGroup;
  username: FormControl = new  FormControl('', Validators.required);
  password: FormControl = new  FormControl('');
  firstName: FormControl = new  FormControl('');
  lastName: FormControl = new  FormControl('');
  gender: FormControl = new  FormControl('');

  constructor(private formBuilder: FormBuilder, private router: Router,private httpClient: HttpClient,private authService: AuthService) {
    this.profileForm = this.formBuilder.group({
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      gender: this.gender,
    });
  }

  saveChanges() {
    const formValue = this.profileForm.value;

    const model = {
      username: formValue.username,
      password: formValue.password,
      email: formValue.email,
      lastName: formValue.lastName,
      firstName: formValue.firstName,
      gender: formValue.gender,
    };
      this.authService.editProfile(model);
      window.alert("Profile edited successfully!");
  }
  
}
