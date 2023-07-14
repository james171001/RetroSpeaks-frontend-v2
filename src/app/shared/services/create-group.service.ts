import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from '../models/group';
import { GroupCreationPayload } from '../models/group-payload';

@Injectable({
  providedIn: 'root'
})
export class CreateGroupService {

  private apiUrl = 'http://localhost:8080/api/group';

  constructor(private http: HttpClient) { }

  createGroup(group: GroupCreationPayload) {
    return this.http.post(this.apiUrl, group);
  }
}
