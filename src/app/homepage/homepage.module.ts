import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage-feed/homepage-feed.component';
import { HomepageRoutingModule } from './homapgeRoutingModule';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CardModule } from 'primeng/card';
import { ContentCardComponent } from '../content-card/content-card.component';
import { CreatePostComponent } from '../create-post/create-post.component';
import { NewsContentComponent } from '../news-content/news-content.component';



@NgModule({
  declarations: [
    HomepageComponent,
    SidebarComponent,
    ContentCardComponent,
    CreatePostComponent,
    NewsContentComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    CardModule
  ]
})
export class HomepageModule { }
