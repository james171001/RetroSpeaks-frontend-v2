import { Component } from '@angular/core';

interface PollOption {
  text: string;
  selected?: boolean;
}

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent {
  pollTitle!: string;
  pollOptions: PollOption[] = [{ text: '' }, { text: '' }];

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
    const poll = {
      title: this.pollTitle,
      pollOptions: this.pollOptions
    };
    console.log(poll);
  }

  addOption() {
    this.pollOptions?.push({ text: '' });
  }

  removeOption(index: number) {
    this.pollOptions.splice(index, 1);
  }
  
}
