import { Component } from '@angular/core';

@Component({
  selector: 'app-viewgroup',
  templateUrl: './viewgroup.component.html',
  styleUrls: ['./viewgroup.component.css']
})
export class ViewgroupComponent {
  posts: any[] = [
    {
      title: 'Post 1',
      description: 'Description of Post 1',
      commentCount: 5
    },
    {
      title: 'Post 2',
      description: 'Description of Post 2',
      commentCount: 8
    },
    {
      title: 'Post 3',
      description: 'Description of Post 3',
      commentCount: 3
    }
  ];
}
