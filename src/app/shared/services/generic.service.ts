import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CrudOperations } from "./crud-operations";
import { AuthStateService } from "./auth-state.service";
import { Token } from "@angular/compiler";

export abstract class GenericService<T, ID> implements CrudOperations<T, ID> {
  private _baseUrl: string = 'http://localhost:8080/api/';

  constructor(protected _http: HttpClient, protected authState: AuthStateService) {}
  
  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    if (this.authState.hasCurrentUser()) {
      const token = this.authState.getToken();
      if (token) {
        headers = headers.set('Authorization', `Bearer ${token}`);
      }
    }
    console.log(headers);
    return headers;
  }
  

  private createOptions(): { headers: HttpHeaders } {
    const headers = this.getHeaders();
    return { headers };
  }

  save(t: T): Observable<T> {
    const options = this.createOptions();
    return this._http.post<T>(this._baseUrl, t, options);
  }

  update(id: ID, t: T): Observable<T> {
    const options = this.createOptions();
    return this._http.put<T>(this._baseUrl + "/" + id, t, options);
  }

  findOne(id: ID): Observable<T> {
    const options = this.createOptions();
    return this._http.get<T>(this._baseUrl + "/" + id, options);
  }

  findAll(): Observable<T[]> {
    const options = this.createOptions();
    return this._http.get<T[]>(this._baseUrl, options);
  }

  delete(id: ID): Observable<T> {
    const options = this.createOptions();
    return this._http.delete<T>(this._baseUrl + "/" + id, options);
  }

  baseUrl(endpoint: string): void {
    this._baseUrl = `${this._baseUrl}${endpoint}`;
  }
}