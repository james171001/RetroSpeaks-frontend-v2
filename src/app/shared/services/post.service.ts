import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';
import { AuthStateService } from './auth-state.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends GenericService<Post, String> {
  constructor(protected override _http: HttpClient, protected override authState: AuthStateService) {
    super(_http, authState);
  }

  setBaseUrl(groupId: number): void {
    this._baseUrl = `http://localhost:8080/api/group/${groupId}/post`;
  }

  getAllPostsFromApi() {
    // Assuming the endpoint for all posts is `/api/post/`
    const option = this.createOptions();
    const apiUrl = 'http://localhost:8080/api/post/';
    return this._http.get<Post[]>(`${apiUrl}`, option);
  }




}
