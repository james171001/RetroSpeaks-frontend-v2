import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserLogIn } from '../core/models/UserLogin';
import { UserRegistration } from '../core/models/UserRegistration';
import { AuthStateService } from '../shared/services/auth-state.service';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getUserId(userId: string | null) {
    throw new Error('Method not implemented.');
  }
  baseUrl = 'http://localhost:8080/api/auth/';
  baseUrl2 = 'http://localhost:8080/api/user/';

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private authStateService: AuthStateService
  ) {}

  authenticate(model: UserLogIn) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(model);
  
    return this.httpClient.post(this.baseUrl + 'login', body, { headers: headers }).subscribe(
      (response: any) => {
        console.log('Authentication response:', response,model);
        const token = response.token;
        const decodeToken: any = jwt_decode(token);
        const username = model.userName;
        const userId = decodeToken.userId;

  
        if (token) {
          this.authStateService.setToken(token);
        }
  
        if (username) {
          this.authStateService.setUsername(username);
        }
  
        if (userId) {
          this.authStateService.setUserId(userId);
        }
  
        this.router.navigate(['/home/feed']);
      },
      (error) => {
        console.error('Authentication error:', error);
      }
    );
  }
  

  registerUser(model: UserRegistration) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(model);

    return this.httpClient.post(this.baseUrl + "register", body, { headers: headers })
      .subscribe((response: any) => {
        const token = response.token;
        const username = model.userName;

        if (token) {
          this.authStateService.setToken(token);
        }

        if (username) {
          this.authStateService.setUsername(username);
        }

        this.router.navigate(['/login']);
      });
  }

  forgotPassword(email: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify({ email });

    return this.httpClient.post(this.baseUrl + "forgot-password", body, { headers: headers });
  }

  // editProfile(model: any) {
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   const body = JSON.stringify(model);

  //   return this.httpClient.post(this.baseUrl + "edit-profile", body, { headers: headers });
  // }

  editProfile(model: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(model);
  
    return this.httpClient.put(`${this.baseUrl}${model.userId}/edit-profile`, body, { headers: headers });
  }

  logout() {
    this.authStateService.clearToken();
    this.router.navigate(['/login']);
  }

  goToEditProfile() {
    const userId = this.authStateService.getUserId();
    this.router.navigate([`user/${userId}/edit-profile`]);
  }
  

  isAuthenticated() {
    return this.authStateService.hasCurrentUser();
  }

  getUser(userId: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.get(this.baseUrl + "user/" + userId, { headers: headers });
  }
}
