import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http:HttpClient) { }

  // topHeadLinesApiUrl = 'https://newsapi.org/v2/top-headlines?country=ph&apiKey=f5918cc4f2dd426882daadaec9065a33' //News in Philippines
  topHeadLinesApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f5918cc4f2dd426882daadaec9065a33'  //News in US

  topHeadLines(): Observable<any> {
    return this.http.get(this.topHeadLinesApiUrl);
  }
}

