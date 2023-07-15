import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Poll } from '../models/poll';
import { HttpClient } from '@angular/common/http';
import { AuthStateService } from './auth-state.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PollService extends GenericService<Poll, String>{

  constructor(protected override _http: HttpClient, protected override authState: AuthStateService) {
    super(_http, authState);
    this.setBaseUrl();
  }


  setBaseUrl(): void {
    this._baseUrl = `http://localhost:8080/api/post/poll`;
  }

  savePoll(poll: Poll): Observable<Poll> {
    return this._http.post<Poll>(this._baseUrl, poll);
  }
}
