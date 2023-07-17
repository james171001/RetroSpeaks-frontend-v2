import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { GenericService } from './generic.service';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { AuthStateService } from './auth-state.service';
import { Group } from '../models/group';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends GenericService<Category,number>  {
  categoryId: any;

  constructor(protected override _http: HttpClient, protected override authState: AuthStateService) {
    super(_http, authState);
    this.setBaseUrl('','');
  }
  setBaseUrl(categoryId:string,url:string): void {
    this._baseUrl = `http://localhost:8080/api/category/${categoryId}${url}`;
  }
  getGroups(categoryId:  string): Observable<Group[]> {
    const options = this.createOptions();
    return this._http.get<Group[]>(`${this._baseUrl}`, options);
  }
  

}

