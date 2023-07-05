// import { Component, Input, OnInit } from '@angular/core';
// import { NewsApiService } from './news-api.service';

// @Component({
//   selector: 'app-news-content',
//   templateUrl: './news-content.component.html',
//   styleUrls: ['./news-content.component.css'],
// })
// export class NewsContentComponent implements OnInit {
//   constructor(private service: NewsApiService) {}

//   topHeadlinesResult: any = [];

//   ngOnInit(): void {
//     this.service.topHeadLines().subscribe((result) => {
//       console.log(result);
//       this.topHeadlinesResult = result.articles;
//     });
//   }

//   openUrl(url: string): void {
//     window.open(url, '_blank');
//   }

//   formatTitle(title: string): string {
//     const maxLength = 80;
//     if (title.length > maxLength) {
//       return title.substring(0, maxLength) + '...';
//     }
//     return title;
//   }
// }


import { Component, Input, OnInit } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.css'],
})
export class NewsContentComponent implements OnInit {
  constructor(private service: NewsApiService) {}

  topHeadlinesResult: any[] = [];

  ngOnInit(): void {
    this.loadTopHeadlines();
  }

  loadTopHeadlines(): void {
    this.service.topHeadLines().subscribe(
      (result: any) => {
        console.log(result);
        this.topHeadlinesResult = result.articles;
        this.shuffleHeadlines();
        this.topHeadlinesResult = this.topHeadlinesResult.slice(0, 3);
      },
      (error) => {
        console.error('Error fetching top headlines:', error);
      }
    );
  }

  shuffleHeadlines(): void {
    for (let i = this.topHeadlinesResult.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.topHeadlinesResult[i], this.topHeadlinesResult[j]] = [this.topHeadlinesResult[j], this.topHeadlinesResult[i]];
    }
  }

  openUrl(url: string): void {
    window.open(url, '_blank');
  }

  formatTitle(title: string): string {
    const maxLength = 80;
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + '...';
    }
    return title;
  }
}
