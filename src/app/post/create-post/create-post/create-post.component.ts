// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, ParamMap, Router } from '@angular/router';
// import { PostService } from 'src/app/shared/services/post.service';
// import { Post } from 'src/app/shared/models/post';

// @Component({
//   selector: 'app-create-post',
//   templateUrl: './create-post.component.html',
//   styleUrls: ['./create-post.component.css']
// })
// export class CreatePostComponent implements OnInit {
//   title!: string;
//   content!: string;
  
//   constructor(
//     private postService: PostService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}

//   ngOnInit() {
   
//   }

//   createPost(): void {
//     const postDto = {
//       title: this.title,
//       content: this.content,
//     };
//     this.route.paramMap.subscribe((params: ParamMap) => {
//       const groupId = params.get('groupId');
//       if(groupId){
//         const parseGroupId = parseInt(groupId );
//         this.postService.setBaseUrl(parseGroupId);

//         this.postService.save().subscribe(
//       }
     
      
  
//     });

 
//   }
// }

import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/shared/services/post.service';
import { Post } from 'src/app/shared/models/post';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  postForm: FormGroup;
  title: FormControl = new FormControl('', Validators.required);
  content: FormControl = new FormControl('', Validators.required);
  groupId: string | null = null;
  paramMapSubscription!: Subscription;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {
    this.postForm = new FormGroup({
      title: this.title,
      content: this.content,
    });
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.groupId = params.get('groupId');
      if (this.groupId) {
        console.log(this.groupId);
        const parseGroupId = parseInt(this.groupId);
        this.postService.setBaseUrl(parseGroupId);

  }
});
  }
  createPost() {
    const postValue = this.postForm.value;
    const model: Post = {
      //postType: 1, // update accordingly
      title: postValue.title,
      content: postValue.content,
      postDate: new Date(), // update accordingly
      agreeCount: 0, // update accordingly
      disagreeCount: 0, // update accordingly
    }
  this.postService.save(model);
   
}
 


  

}
