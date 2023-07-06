import { Component } from '@angular/core';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent {
  pollTitle: string = '';
  option1: string = '';
  option2: string = '';

  createPoll() {
    // Add logic to handle the creation of the poll
    console.log('Poll Title:', this.pollTitle);
    console.log('Option 1:', this.option1);
    console.log('Option 2:', this.option2);

    // Clear the input fields after the poll is created
    this.pollTitle = '';
    this.option1 = '';
    this.option2 = '';
  }
}
