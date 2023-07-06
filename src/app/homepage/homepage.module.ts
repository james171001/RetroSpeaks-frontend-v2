import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage-feed/homepage-feed.component';
import { HomepageRoutingModule } from './homapgeRoutingModule';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { CardModule } from 'primeng/card';
import { ContentCardComponent } from '../shared/content-card/content-card.component';
import { CreatePostComponent } from '../create-post/create-post.component';
import { HeaderComponent } from '../shared/header/header.component';
import { NewsContentComponent } from '../shared/news-content/news-content.component';



@NgModule({
  declarations: [
    HomepageComponent,
    HeaderComponent,
    SidebarComponent,
    ContentCardComponent,
    CreatePostComponent,
    NewsContentComponent,

  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    CardModule,
  ]
})
export class HomepageModule { }
