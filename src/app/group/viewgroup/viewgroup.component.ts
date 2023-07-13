import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/shared/models/post';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-viewgroup',
  templateUrl: './viewgroup.component.html',
  styleUrls: ['./viewgroup.component.css']
})
export class ViewgroupComponent implements OnInit {
  posts: Post[] = [];
  groupId: string | null;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.groupId = this.route.snapshot.paramMap.get('groupId');
  }

  ngOnInit() {
  
    this.fetchPostByGroup();
  }

  fetchPostByGroup() {
    if (this.groupId) {
      this.postService.setGroupId(this.groupId);
      this.postService.findAll().subscribe(
        posts => {
          this.posts = posts;
        },
        error => {
          console.error('Error fetching posts:', error);
        }
      );
    }
  }
}
