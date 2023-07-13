import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/header/header.component';
import { NewsContentComponent } from '../shared/news-content/news-content.component';
import { RouterOutlet } from '@angular/router';
import { PostNavComponent } from '../post/post-nav/post-nav.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    NewsContentComponent,
    LayoutComponent,
    PostNavComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ]
})
export class CoreModule { }
