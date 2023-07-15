import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { AuthStateService } from './auth-state.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends GenericService<Category,number>  {

  constructor(protected override _http: HttpClient, protected override authState: AuthStateService) {
    super(_http, authState);
    this.setBaseUrl();
  }
  setBaseUrl(): void {
    this._baseUrl = `http://localhost:8080/api/category/`;
  }

}
