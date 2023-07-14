import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/shared/models/post';
import { PostService } from 'src/app/shared/services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-viewgroup',
  templateUrl: './viewgroup.component.html',
  styleUrls: ['./viewgroup.component.css']
})
export class ViewgroupComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  paramMapSubscription: Subscription | undefined;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  
ngOnInit() {
  console.log(this.route.url);
  this.route.paramMap.subscribe(params => {
    const groupId = params.get('groupId');
    if (groupId) {
      const parseGroupId = parseInt(groupId);
      console.log(parseGroupId);
      this.postService.setBaseUrl(parseGroupId);
      this.postService.findAll().subscribe(
        posts => {
          this.posts = posts;
        },
        error => {
          console.error('Error fetching posts:', error);
        }
      );
    }
  });
}


  ngOnDestroy() {
    if (this.paramMapSubscription) {
      this.paramMapSubscription.unsubscribe();
    }
  }
}
