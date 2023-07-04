import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { UserLogIn } from '../models/UserLogin';
import { UserRegistration } from '../models/UserRegistration';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:8080/api/auth/'
  constructor(private http:HttpClient) { }


  authenticate(model:UserLogIn){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(model);
  
    return this.http.post(this.baseUrl + "login", body, { headers: headers });
  }
  registerUser(model: UserRegistration){
    
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(model);
    console.log(body);
    return this.http.post(this.baseUrl +"register", body, { headers: headers });

  }
}
