import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent {
  @Input() username!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() commentCount!: number;

  showComments = false;

  get timePassed(): string {
    const createdDate = new Date(); // Replace this with the actual creation date of the post
    const currentTime = new Date();
    const timeDifference = Math.abs(currentTime.getTime() - createdDate.getTime()); 
    const minutesPassed = Math.floor(timeDifference / (1000 * 60));
  
    if (minutesPassed < 1) {
      const secondsPassed = Math.floor(timeDifference / 1000);
      return `${secondsPassed} seconds ago`;
    } else if (minutesPassed < 60) {
      return `${minutesPassed} minutes ago`;
    } else {
      const hoursPassed = Math.floor(timeDifference / (1000 * 60 * 60));
      return `${hoursPassed} hours ago`;
    }
  }
  
  toggleComments() {
    this.showComments = !this.showComments;
  }
}
