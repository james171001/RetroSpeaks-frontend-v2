import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserLogIn } from '../core/models/UserLogin';
import { UserRegistration } from '../core/models/UserRegistration';
import { AuthStateService } from '../shared/services/auth-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:8080/api/auth/';

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private authStateService: AuthStateService
  ) {}

  authenticate(model: UserLogIn) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(model);

    return this.httpClient.post(this.baseUrl + "login", body, { headers: headers })
      .subscribe((response: any) => {
        const token = response.token;
        const username = model.userName;

        if (token) {
          this.authStateService.setToken(token);
        }

        if (username) {
          this.authStateService.setUsername(username);
        }

        this.router.navigate(['/home/feed']);
      });
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

  editProfile(model: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(model);

    return this.httpClient.post(this.baseUrl + "edit-profile", body, { headers: headers });
  }



  logout() {
    this.authStateService.clearToken();
    this.router.navigate(['/login']);
  }

  goToEditProfile() {
    this.router.navigate(['/edit-profile']);
  }

  isAuthenticated() {
    return this.authStateService.hasCurrentUser();
  }
}
