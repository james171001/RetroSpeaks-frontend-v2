import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  private readonly TOKEN_KEY = 'token';
  private readonly USERNAME_KEY = 'username';

  constructor() { }


  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  
  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  clearToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getUsername(): string | null {
    return localStorage.getItem(this.USERNAME_KEY);
  }

  setUsername(username: string): void {
    localStorage.setItem(this.USERNAME_KEY, username);
  }
  hasCurrentUser(){
    if(localStorage.getItem(this.TOKEN_KEY)){
      return true;
    }
    return false;
  }
}
