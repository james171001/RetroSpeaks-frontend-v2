import { Component, ViewEncapsulation } from '@angular/core';

interface Comment {
  username: string;
  content: string;
  replies: Reply[];
}

interface Reply {
  username: string;
  content: string;
}

@Component({
  selector: 'app-poll-content-card',
  templateUrl: './poll-content-card.component.html',
  styleUrls: ['./poll-content-card.component.css'],
})
export class PollContentCardComponent {
  username = 'Jayvee';
  pollQuestion = 'Which programming language is your favorite?';
  pollOptions = [
    { option: 'JavaScript', votes: 0 },
    { option: 'Python', votes: 0 },
    { option: 'Java', votes: 0 },
    { option: 'C++', votes: 0 },
  ];
  comments: Comment[] = [
    {
      username: 'JaneSmith',
      content: 'I love JavaScript!',
      replies: [
        {
          username: 'JohnDoe',
          content: 'Yes, JavaScript is awesome!',
        },
        {
          username: 'AnotherUser',
          content: 'I prefer Python though.',
        },
      ],
    },
    {
      username: 'AliceBrown',
      content: 'Java is the best!',
      replies: [],
    },
  ];

  showComments = false;
  totalClicks = 0;

  toggleComments(): void {
    this.showComments = !this.showComments;
  }

  vote(optionIndex: number): void {
    this.pollOptions[optionIndex].votes++;
    this.totalClicks++;
  }

  get totalVotes(): number {
    return this.pollOptions.reduce((sum, option) => sum + option.votes, 0);
  }

  getPercentageVotes(optionIndex: number): number {
    const votes = this.pollOptions[optionIndex].votes;
    const totalVotes = this.totalVotes;
    const percentage = (votes / totalVotes) * 100 || 0;
    return Number(percentage.toFixed(2));
  }
  
  }

