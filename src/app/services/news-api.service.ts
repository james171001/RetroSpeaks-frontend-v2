import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http:HttpClient) { }

  // topHeadLinesApiUrl = 'https://newsapi.org/v2/top-headlines?country=ph&apiKey=f1007b267c0c461db9a3f8a8a1a01f99' //News in Philippines
  topHeadLinesApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f1007b267c0c461db9a3f8a8a1a01f99'  //News in US

  topHeadLines(): Observable<any> {
    return this.http.get(this.topHeadLinesApiUrl);
  }
}

