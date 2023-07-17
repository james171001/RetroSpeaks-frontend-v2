import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Post } from '../models/post';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthStateService } from './auth-state.service';
import { catchError, throwError } from 'rxjs';

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

  agreeToPost(groupId: number, postId: string) {
    // Assuming the endpoint for all posts is `/api/post/`
    const option = this.createOptions();
    console.log(option);
    
    const apiUrl = `http://localhost:8080/api/group/${groupId}/post/agreeToPost/${postId}`;
    return this._http.get<any>(`${apiUrl}`, option)
    .pipe(
      catchError((err) => this.handleError(err))
    );
  }

  disagreeToPost(groupId: number, postId: string) {
    // Assuming the endpoint for all posts is `/api/post/`
    const option = this.createOptions();
    console.log(option);
    
    const apiUrl = `http://localhost:8080/api/group/${groupId}/post/disagreeToPost/${postId}`;
    return this._http.get<any>(`${apiUrl}`, option)
    .pipe(
      catchError((err) => this.handleError(err))
    );
  }

  private handleError(error: HttpErrorResponse) {

    if (error.status === 0)

    {

      console.error('An error occurred:', error.error);

    }

    else

    {

      console.warn(error);

      alert(error.error.message);

    }

    return throwError(() => new Error(''))

  }

}
