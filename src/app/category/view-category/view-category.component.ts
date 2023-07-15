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
    this.groupService.setBaseUrl(parseGroupId,'/follow')
    this.groupService.follow(parseGroupId).subscribe(
      groups => {
        this.groups = groups;
        console.log('Successfully followed the group.');
      },
      error => {
        console.error('Error following the group:', error);
      }
    );
  }

  unfollowGroup(groupId: number) {
    const parseGroupId = groupId.toString();
    this.groupService.setBaseUrl(parseGroupId ,'/unfollow')
    this.groupService.unfollow(parseGroupId ).subscribe(
      groups => {
        this.groups = groups;
        console.log('Successfully unfollowed the group.');
      },
      error => {
        console.error('Error unfollowing the group:', error);
      }
    );
  }
}
  
