import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Group } from "../models/group";
import { GenericService } from "./generic.service";
import { AuthStateService } from "./auth-state.service";

@Injectable({
  providedIn: 'root'
})
export class GroupService extends GenericService<Group, number> {
  protected ENDPOINT = "group";

  constructor(protected override _http: HttpClient, protected override authState: AuthStateService) {
    super(_http, authState);
    this.baseUrl(this.ENDPOINT);
  }
}
