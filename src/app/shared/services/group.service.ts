import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GroupService {
  baseUrl = 'http://localhost:8080/api/group/'
  constructor(private http: HttpClient) { }

  getGroupsByUser(): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
  
    return this.http.get<any[]>(this.baseUrl, { headers });
  }


}
