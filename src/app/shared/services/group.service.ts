import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Group } from "../models/group";
import { GenericService } from "./generic.service";
import { AuthStateService } from "./auth-state.service";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class GroupService extends GenericService<Group, number> {
  constructor(protected override _http: HttpClient, protected override authState: AuthStateService) {
    super(_http, authState);
    this.setBaseUrl('','');
  }
  setBaseUrl(groupId:string,url:string): void {
    this._baseUrl = `http://localhost:8080/api/group/${groupId}${url}`;
  }

  follow(groupId:string): Observable<Group[]> {
    const options = this.createOptions();
    return this._http.put<Group[]>(`${this._baseUrl}`,{}, options);
  }
  unfollow(groupId:string): Observable<Group[]> {
    const options = this.createOptions();
    return this._http.put<Group[]>(`${this._baseUrl}`,{}, options);
  }
  
}
