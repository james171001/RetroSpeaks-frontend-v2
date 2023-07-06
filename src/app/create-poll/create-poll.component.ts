import { Component } from '@angular/core';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent {
  pollTitle!: string;
  options: string[] = [''];

  createPoll() {
    // Check if the poll title is provided
    if (!this.pollTitle) {
      alert('Please enter the poll title');
      return;
    }

    // Check if at least two options are provided
    if (this.options.length < 2) {
      alert('Please enter at least two options');
      return;
    }

    // Perform the poll creation logic here
    const poll = {
      title: this.pollTitle,
      options: this.options
    };

    // Print the created poll object (replace with actual logic)
    console.log(poll);
  }

  addOption() {
    this.options.push('');
  }

  removeOption(index: number) {
    this.options.splice(index, 1);
  }
}
