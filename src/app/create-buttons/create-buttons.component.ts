import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-buttons',
  templateUrl: './create-buttons.component.html',
  styleUrls: ['./create-buttons.component.css']
})
export class CreateButtonsComponent {
  @Output() showCreatePollEvent = new EventEmitter<boolean>();
  @Output() showCreateSurveyEvent = new EventEmitter<boolean>();
  @Output() showCreatePostEvent = new EventEmitter<boolean>();

  createPollActive: boolean = false;
  createSurveyActive: boolean = false;
  createPostActive: boolean = true;

  showCreatePoll() {
    this.createPollActive = true;
    this.createSurveyActive = false; 
    this.createPostActive = false;
    this.showCreatePollEvent.emit(this.createPollActive);
  }

  showCreateSurvey() {
    this.createSurveyActive = true;
    this.createPollActive = false;
    this.createPostActive = false;
    this.showCreateSurveyEvent.emit(this.createSurveyActive);
  }

  showCreatePost() {
    this.createPostActive = true;
    this.createPollActive = false;
    this.createSurveyActive = false;
    this.showCreatePostEvent.emit(this.createPostActive);
  }
}
