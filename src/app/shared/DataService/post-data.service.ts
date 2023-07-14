import { Injectable } from '@angular/core';
import { PostService } from '../services/post.service';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
@Injectable({
  providedIn: 'root'
})
export class PostDataService {
  posts:Post[] =[]
  constructor(private postService:PostService) {}


  
  fetchPostsByGroup(groupId: string): Observable<Post[]> {
    this.postService.setGroupId(groupId);
    return this.postService.findAll();
  }
  
 }

