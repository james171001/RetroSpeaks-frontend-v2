import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/shared/models/post';
import { PostService } from 'src/app/shared/services/post.service';
import { AuthStateService } from '../../services/auth-state.service';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../models/comment';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() post!: Post;
  @Input() usernameText: string | null = null;
  userId: string | null = null;
  comments: Comment[] = [];
  commentForm: FormGroup;
  content: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{4,20}$'), Validators.minLength(5)])
  replyForm: FormGroup;
  replyContent: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{4,20}$'), Validators.minLength(5)])
  comment: Comment = {};
  showComments = false;
  addReplyToggle = false;
  currentReplyId: string | null = null;


  replyText:string;

  constructor(
    private postService: PostService,
    private router: Router,
    private authStateService: AuthStateService,
    private route: ActivatedRoute,
    private commentService: CommentService
  ) {
    this.commentForm = new FormGroup({
      content: this.content,
    });

    this.replyForm = new FormGroup({
      replyContent: this.replyContent,
    });
    this.replyText = "";

  }

  ngOnInit() {
    this.usernameText = this.authStateService.getUsername();

    const parseGroupId = this.post.groupId;

    if(parseGroupId){
      const groupId =  parseGroupId.toString();
      this.fetchAllCommentsByPost(groupId);
    }
 
    

      

  }

  fetchAllCommentsByPost(groupId: string) {
    const postId = this.post.id;
    if (postId) {
      this.commentService.setBaseUrl(groupId, postId, '');
    }

    this.commentService.findAll().subscribe(
      response => {
        this.comments = response;
      },
      error => {
        console.error('Error fetching comments:', error);
      }
    );
  }

  addComment() {
    const formValue = this.commentForm.value;
    this.comment = {
      content: formValue.content,
    };

    const parseGroupId = this.post.groupId;
    if(parseGroupId){
      const groupId =  parseGroupId.toString();
      if (groupId !== null && this.post.id != null) {
        this.commentService.setBaseUrl(groupId, this.post.id, '');
        this.commentService.save(this.comment).subscribe(
          response => {
            console.log('Comment added:', response);
            this.fetchAllCommentsByPost(groupId!); // Refresh comments after adding a new comment
            this.commentForm.reset(); // Reset the form after successful comment submission
          },
          error => {
            console.error('Error adding comment:', error);
          }
        );
      }
    }
  }


  addReply(commentId?: string) {
    if(commentId){
      const formValue = this.replyForm.value;
      this.comment = {
        content: formValue.replyContent,
      };
      const parseGroupId = this.post.groupId;
      if(parseGroupId){
        const groupId =  parseGroupId.toString();
        if (groupId !== null && this.post.id != null) {
          this.commentService.setBaseUrl(groupId, this.post.id, commentId);
          this.commentService.save(this.comment).subscribe(
            response => {
              console.log('Reply added:', response);
              this.fetchAllCommentsByPost(groupId!);
            
            },
            error => {
              console.error('Error adding reply:', error);
            }
          );
        }
      }
    }

  }

  toggleComment(comment: Comment) {
    comment.showChildComments = !comment.showChildComments;
  }

  toggleReply(commentId?: string) {
    if(commentId){
      this.currentReplyId = this.currentReplyId === commentId ? null : commentId;
    }

  }

   cancelReply(comment: Comment) {
    comment.showReply = !comment.showReply;
    if (!comment.showReply) {
      comment.replyText = ''; // Reset the reply text when hiding the input box
    }
    
  }
}