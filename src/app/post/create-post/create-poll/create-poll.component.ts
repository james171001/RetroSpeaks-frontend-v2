import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PollService } from 'src/app/shared/services/poll.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Poll } from 'src/app/shared/models/poll';
import { Choice } from 'src/app/shared/models/choice';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css'],
})
export class CreatePollComponent implements OnInit {
  createPollForm: FormGroup;
  pollTitle!: string;
  pollOptions: Choice[] = [
    { id: '', choiceTitle: '', choiceType: '', choiceVoteCount: 0, chosen: false },
    { id: '', choiceTitle: '', choiceType: '', choiceVoteCount: 0, chosen: false }
  ];

  createdPoll: Poll | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pollService: PollService
  ) {
    this.createPollForm = new FormGroup({
      pollTitle: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.createPollForm = new FormGroup({
      pollTitle: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  isFormValid(): boolean {
    if (!this.pollTitle || this.pollOptions.length < 2) {
      return false;
    }
    return true;
  }

  createPoll() {
    // Check if the poll title is provided
    if (!this.pollTitle) {
      alert('Please enter the poll title');
      return;
    }
  
    if (!this.isFormValid()) {
      return;
    }
  
    // Check if at least two options are provided
    if (this.pollOptions.length < 2) {
      alert('Please enter at least two options');
      return;
    }
  
    // Perform the poll creation logic here
    const poll: Poll = {
      title: this.pollTitle,
      choices: this.pollOptions,
      id: '',
      description: '',
      ownerId: 0,
      username: '',
      voterList: []
    };
  
    // Save the poll using the PollService
    this.pollService.save(poll).subscribe(
      (savedPoll) => {
        console.log('Poll saved successfully:', savedPoll);
        this.createdPoll = savedPoll; // Assign the saved poll to createdPoll
      },
      (error) => {
        console.error('Error saving poll:', error);
      }
    );
  }
  
  addOption() {
    this.pollOptions.push({
      choiceTitle: '',
      id: '',
      choiceType: '',
      choiceVoteCount: 0,
      chosen: false
    });
  }

  removeOption(index: number) {
    this.pollOptions.splice(index, 1);
  }
  
}
