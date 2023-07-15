import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/shared/models/post';
import { PostService } from 'src/app/shared/services/post.service';
import { AuthStateService } from '../../services/auth-state.service';

interface Comment {
  username: string;
  text: string;
  showChildComments: boolean;
  childComments: Comment[];
  showReply: boolean;
  replyText: string;
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() postId!: number;
  @Input() usernameText: string | null = null;
  userId: string | null = null;

  newCommentText = '';
  comments: Comment[] = [];
  posts: Post[] = [];

  showComments = false;

  constructor(
    private postService: PostService,
    private router: Router,
    private authStateService: AuthStateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.usernameText = this.authStateService.getUsername();
  }

  addComment() {
    if (this.newCommentText.trim() !== '') {
      const newComment: Comment = {
        username: this.usernameText || '',
        text: this.newCommentText.trim(),
        showChildComments: false,
        childComments: [],
        showReply: false,
        replyText: ''
      };
      this.comments.push(newComment);
      this.newCommentText = '';
    }
  }

  toggleComment(comment: Comment) {
    comment.showChildComments = !comment.showChildComments;
  }

  toggleReply(comment: Comment) {
    comment.showReply = !comment.showReply;
    if (!comment.showReply) {
      comment.replyText = ''; // Reset the reply text when hiding the input box
    }
  }

  addReply(comment: Comment) {
    if (comment.replyText.trim() !== '') {
      const newReply: Comment = {
        username: this.usernameText || '',
        text: comment.replyText.trim(),
        showChildComments: false,
        childComments: [],
        showReply: false,
        replyText: ''
      };
      comment.childComments.push(newReply);
      comment.showReply = false; // Hide the input box after adding the reply
      comment.replyText = ''; // Reset the reply text
    }
  }
}
