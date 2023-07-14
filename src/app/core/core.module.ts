import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/header/header.component';
import { NewsContentComponent } from '../shared/news-content/news-content.component';
import { RouterOutlet } from '@angular/router';
import { PostNavComponent } from '../post/post-nav/post-nav.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';



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
    RouterOutlet,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,RouterLink
  ]
})
export class CoreModule { }
