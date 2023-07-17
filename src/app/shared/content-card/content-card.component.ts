
import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { GenericService } from '../services/generic.service';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css'],
})

export class ContentCardComponent implements OnInit {

  @Input() post!: Post;
  @Input() username!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() commentCount!: number; // Add the commentCount property

  private _creationDate!: Date | null;

  constructor(
    private postService: PostService,
    private http: HttpClient) {
   }

  @Input()
  set creationDate(value: Date | null) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }
    this._creationDate = value;
    this.timePassed = this.calculateTimePassed();
  }

  get creationDate(): Date | null {
    return this._creationDate;
  }

  

  showComments = false;
  timePassed!: string;

  agreeCount!: number;

  ngOnInit() {
    this.timePassed = this.calculateTimePassed();
  }

  calculateTimePassed(): string {
    if (this.creationDate === null) {
      return 'Invalid creation date';
    }
  
    const createdDate = new Date(this.creationDate);
    const currentTime = new Date();
    const timeDifference = Math.abs(currentTime.getTime() - createdDate.getTime());
    const secondsPassed = Math.floor(timeDifference / 1000);
    const minutesPassed = Math.floor(secondsPassed / 60);
    const hoursPassed = Math.floor(minutesPassed / 60);
    const daysPassed = Math.floor(hoursPassed / 24);
    const weeksPassed = Math.floor(daysPassed / 7);
    const monthsPassed = Math.floor(daysPassed / 30);
    const yearsPassed = Math.floor(daysPassed / 365);
  
    if (isNaN(createdDate.getTime())) {
      return 'Invalid creation date';
    }
  
    if (yearsPassed > 0) {
      return `${yearsPassed} year${yearsPassed > 1 ? 's' : ''} ago`;
    } else if (monthsPassed > 0) {
      return `${monthsPassed} month${monthsPassed > 1 ? 's' : ''} ago`;
    } else if (weeksPassed > 0) {
      return `${weeksPassed} week${weeksPassed > 1 ? 's' : ''} ago`;
    } else if (daysPassed > 0) {
      return `${daysPassed} day${daysPassed > 1 ? 's' : ''} ago`;
    } else if (hoursPassed > 0) {
      return `${hoursPassed} hour${hoursPassed > 1 ? 's' : ''} ago`;
    } else if (minutesPassed > 0) {
      return `${minutesPassed} minute${minutesPassed > 1 ? 's' : ''} ago`;
    } else {
      return `${secondsPassed} second${secondsPassed > 1 ? 's' : ''} ago`;
    }
  }
  
  thumbsUp(): void {
    console.log('Thumbs up!');
    console.log(this.post.groupId??0,this.post.id??'');
    this.postService.agreeToPost(this.post.groupId??0,this.post.id??'')
  }

  thumbsDown(): void {
    console.log('Thumbs down!');
    console.log(this.post.groupId??0,this.post.id??'');
    this.postService.disagreeToPost(this.post.groupId??0,this.post.id??'')
  }

  toggleComments(): void {
    this.showComments = !this.showComments;
  }

  private handleError(error: HttpErrorResponse) {

    if (error.status === 0)

    {

      console.error('An error occurred:', error.error);

    }

    else

    {

      console.warn(error);

      alert(error.error.message);

    }

    return throwError(() => new Error(''))

  }
}
