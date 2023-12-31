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
  followersCount: number = 0;
  postCount: number = 0;

  posts: Post[] = [];
  paramMapSubscription: Subscription | undefined;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute,
    private groupService: GroupService,
  ) { }



  ngOnInit() {
    console.log(this.route.url);

    this.route.paramMap.subscribe(params => {
      const groupId = params.get('groupId');
      if (groupId) {
        const parseGroupId = parseInt(groupId);
        console.log(parseGroupId);
        this.postService.setBaseUrl(parseGroupId);
          this.groupService.setBaseUrl('','');
        this.groupService.findById(parseGroupId).subscribe(
          group => {
            this.group = group;
            this.followersCount = group.users.length;
          },
          error => {
            console.error('Error fetching group:', error);
          }
        );

        this.postService.findAll().subscribe(
          posts => {
            this.posts = posts;
            this.sortPostsByNewest();
            this.postCount = this.posts.length;
          },
          error => {
            console.error('Error fetching posts:', error);
          }
        );
      }
    });
  }

  sortPostsByNewest() {
    this.posts.sort((a, b) => {
      const dateA = a.postDate ? new Date(a.postDate) : null;
      const dateB = b.postDate ? new Date(b.postDate) : null;
  
      if (!dateA && !dateB) {
        return 0; // If both dates are undefined or null, consider them equal
      } else if (!dateA) {
        return 1; // If dateA is undefined or null, place it after dateB
      } else if (!dateB) {
        return -1; // If dateB is undefined or null, place it after dateA
      } else {
        return dateB.getTime() - dateA.getTime(); // Sort in descending order (newest first)
      }
    });
  }
  
  ngOnDestroy() {
    if (this.paramMapSubscription) {
      this.paramMapSubscription.unsubscribe();
    }
  }
    followGroup() {
    const parseGroupId = this.group?.id.toString();
    if(parseGroupId){
      
      this.groupService.setBaseUrl(parseGroupId, '/follow');
      this.groupService.follow(parseGroupId).subscribe(
        group => {
        
          window.location.reload();
          console.log('Successfully followed the group.');
        },
        error => {
          console.error('Error following the group:', error);
        }
      );
    }

  }
  unfollowGroup() {
    const parseGroupId = this.group?.id.toString();
    if(parseGroupId){
      this.groupService.setBaseUrl(parseGroupId, '/unfollow');
      this.groupService.follow(parseGroupId).subscribe(
        group => {
          window.location.reload();
          console.log('Successfully unfollowed the group.');
        },
        error => {
          console.error('Error following the group:', error);
        }
      );
    }

  }

}

export default ViewgroupComponent;
