import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GroupCreationPayload } from '../models/group-payload';
import { AuthStateService } from './auth-state.service';

@Injectable({
  providedIn: 'root'
})
export class CreateGroupService {
  private apiUrl = 'http://localhost:8080/api/group';

  constructor(
    private http: HttpClient,
    private authStateService: AuthStateService
  ) {}

  createGroup(group: GroupCreationPayload) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authStateService.getToken());
    console.log(group);
    return this.http.post(this.apiUrl, group, { headers: headers });
  }
}
