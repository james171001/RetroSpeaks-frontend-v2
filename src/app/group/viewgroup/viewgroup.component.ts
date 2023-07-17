import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/shared/models/post';
import { PostService } from 'src/app/shared/services/post.service';
import { Subscription } from 'rxjs';
import { Group } from 'src/app/shared/models/group';
import { GroupService } from 'src/app/shared/services/group.service';


@Component({
  selector: 'app-viewgroup',
  templateUrl: './viewgroup.component.html',
  styleUrls: ['./viewgroup.component.css']
})
export class ViewgroupComponent implements OnInit, OnDestroy {
  group: Group | undefined;

  posts: Post[] = [];
  paramMapSubscription: Subscription | undefined;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute,
    private groupService: GroupService,
  ) { }

  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const groupId = params.get('groupId');
      if (groupId) {
        const parseGroupId = parseInt(groupId);
        console.log(parseGroupId);
        this.postService.setBaseUrl(parseGroupId);
        this.groupService.findById(parseGroupId).subscribe(
          group => {
            this.group = group;
          },
          error => {
            console.error('Error fetching group:', error);
          }
        );
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
