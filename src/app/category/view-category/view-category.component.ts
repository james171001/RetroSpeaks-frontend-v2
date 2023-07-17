import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/shared/models/group';
import { CategoryService } from 'src/app/shared/services/category.service';
import { GroupService } from 'src/app/shared/services/group.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  groups: Group[] = [];
  followedGroupIds: number[] = [];

  constructor(
    private categoryService: CategoryService,
    private groupService: GroupService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const categoryId = params.get('categoryId');
      if (categoryId) {
        this.categoryService.setBaseUrl(categoryId, '/groups');
        this.categoryService.getGroups(categoryId).subscribe(
          groups => {
            this.groups = groups;
            this.updateFollowedGroupIds();
            this.syncGroupFollowStatus();
          },
          error => {
            console.error('Error fetching groups:', error);
          }
        );
      }
    });
  }  
  

  navigateToGroup(groupId: number) {
    this.router.navigate(['/group', groupId]);
  }

  followGroup(groupId: number) {
    const parseGroupId = groupId.toString();
    this.groupService.setBaseUrl(parseGroupId, '/follow');
    this.groupService.follow(parseGroupId).subscribe(
      group => {
        const updatedGroupIndex = this.groups.findIndex(g => g.id === groupId);
        if (updatedGroupIndex !== -1) {
          this.groups[updatedGroupIndex].followed = true;
        }
        console.log('Successfully followed the group.');
      },
      error => {
        console.error('Error following the group:', error);
      }
    );
  }
  
  unfollowGroup(groupId: number) {
    const parseGroupId = groupId.toString();
    this.groupService.setBaseUrl(parseGroupId, '/unfollow');
    this.groupService.unfollow(parseGroupId).subscribe(
      group => {
        const updatedGroupIndex = this.groups.findIndex(g => g.id === groupId);
        if (updatedGroupIndex !== -1) {
          this.groups[updatedGroupIndex].followed = false;
        }
        console.log('Successfully unfollowed the group.');
      },
      error => {
        console.error('Error unfollowing the group:', error);
      }
    );
  }
  

  isGroupFollowed(groupId: number): boolean {
    return this.followedGroupIds.includes(groupId);
  }
  
  updateGroupFollowStatus(groupId: number, followed: boolean) {
    const index = this.followedGroupIds.indexOf(groupId);
    if (followed && index === -1) {
      this.followedGroupIds.push(groupId);
    } else if (!followed && index !== -1) {
      this.followedGroupIds.splice(index, 1);
    }
  }

  updateFollowedGroupIds() {
    this.followedGroupIds = this.groups
      .filter(group => group.followed)
      .map(group => group.id);
  }
  
  syncGroupFollowStatus() {
    this.groups.forEach(group => {
      group.followed = this.isGroupFollowed(group.id);
    });
  }  
  
  
}
