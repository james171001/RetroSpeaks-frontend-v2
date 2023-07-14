import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/shared/models/post';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() postId!: number;
  newCommentText = '';
  comments: { text: string }[] = [];
  @Input() username?: string; // Use optional string type

  posts: Post[] = [];

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const groupId = params.get('groupId');
      if (groupId) {
        const parseGroupId = parseInt(groupId);
        this.postService.setBaseUrl(parseGroupId);
        this.postService.findAll().subscribe(
          (posts: Post[]) => {
            this.posts = posts;
            const post = this.posts.find(p => p.postType === this.postId); // Use 'id' instead of 'postType'

            if (post) {
              this.username = post.username;
            }
          },
          (error: any) => {
            console.error('Error fetching posts:', error);
          }
        );
      }
    });
  }

  addComment() {
    if (this.newCommentText.trim() !== '') {
      const newComment = {
        text: this.newCommentText.trim()
      };
      this.comments.push(newComment);
      this.newCommentText = '';
    }
  }
}
