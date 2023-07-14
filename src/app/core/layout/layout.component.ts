import { Component } from '@angular/core';
import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  receivedPosts: Post[] = [];

  onPostsFetched(posts: Post[]) {
    this.receivedPosts = posts;
    // Do whatever you need to do with the received posts
  }
}
