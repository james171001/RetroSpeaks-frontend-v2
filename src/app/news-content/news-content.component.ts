import { Component, Input, OnInit } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.css'],
})
export class NewsContentComponent implements OnInit {
  constructor(private service: NewsApiService) {}

  topHeadlinesResult: any = [];

  ngOnInit(): void {
    this.service.topHeadLines().subscribe((result) => {
      console.log(result);
      this.topHeadlinesResult = result.articles;
    });
  }

  openUrl(url: string): void {
    window.open(url, '_blank');
  }
}
