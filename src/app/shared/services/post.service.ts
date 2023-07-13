import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';
import { AuthStateService } from './auth-state.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends GenericService<Post,string>{
  protected ENDPOINT = "group/{groupId}/post";

  constructor(protected override _http: HttpClient, protected override authState: AuthStateService) {
    super(_http, authState);

  }
  setGroupId(groupId: string) {
    this.baseUrl(this.ENDPOINT.replace('{groupId}', groupId));
  }

}