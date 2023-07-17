import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { AuthStateService } from './auth-state.service';
import { Comment } from '../models/comment';
@Injectable({
  providedIn: 'root'
})
export class CommentService extends GenericService<Comment,String> {

  constructor(protected override _http: HttpClient, protected override authState: AuthStateService) {
    super(_http, authState);
    this.setBaseUrl('','','');
  }

  setBaseUrl(groupId:string,postId:string,commentId:string): void {
    this._baseUrl = `http://localhost:8080/api/group/${groupId}/post/${postId}/comment/${commentId}`;
  }
}
