import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) { }

  getUserById(userId: number): Observable<User> {
    const url = `${this.baseUrl}/${userId}`;
    return this.http.get<User>(url);
  }

  updateUserProfile(userId: number, updatedUser: User): Observable<User> {
    const url = `${this.baseUrl}/${userId}/edit-profile`;
    return this.http.put<User>(url, updatedUser);
  }

}
