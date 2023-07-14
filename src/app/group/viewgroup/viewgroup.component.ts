import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/shared/models/post';
import { PostService } from 'src/app/shared/services/post.service';
import { Subscription } from 'rxjs';
import { PostDataService } from 'src/app/shared/DataService/post-data.service';

@Component({
  selector: 'app-viewgroup',
  templateUrl: './viewgroup.component.html',
  styleUrls: ['./viewgroup.component.css']
})
export class ViewgroupComponent implements OnInit {
  posts: Post[] = [];
  groupId!: string | null;
  paramMapSubscription: Subscription | undefined;

  constructor(
    private postDataService:PostDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    console.log(this.route.url);
    this.route.paramMap.subscribe(params => {
      this.groupId = params.get('groupId');
      if (this.groupId) {
        this.postDataService.fetchPostsByGroup(this.groupId).subscribe(
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
  





}
