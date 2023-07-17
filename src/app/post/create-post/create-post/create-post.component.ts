import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/shared/services/post.service';
import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  post: Post = {};
  createPostForm: FormGroup;
  title: FormControl = new FormControl('', Validators.required);
  description: FormControl = new FormControl('', Validators.required);


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService
  ) {
    this.createPostForm = new FormGroup({
      title: this.title,
      description: this.description,
    });
  }

  ngOnInit() {
    console.log(this.route.url);
    this.route.paramMap.subscribe(params => {
      const groupId = params.get('groupId');
      if (groupId) {
        const parseGroupId = parseInt(groupId);
        console.log(parseGroupId);
        this.postService.setBaseUrl(parseGroupId);
      }
    });
  }

  submitCreatePost() {
    const formValue = this.createPostForm.value;
    this.post = {
      title: formValue.title,
      content: formValue.description,
    };

    this.postService.save(this.post).subscribe(
      (savedPost) => {
   
        console.log('Post saved successfully:', savedPost);
        this.router.navigate(['../../'], { relativeTo: this.route });
        window.alert('Posted successfully');
      },
      (error) => {
    
        console.error('Error saving post:', error);
      }
    );
  }
}
