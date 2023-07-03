import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage-feed/homepage-feed.component';
import { HomepageRoutingModule } from './homapgeRoutingModule';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CardModule } from 'primeng/card';
import { ContentCardComponent } from '../content-card/content-card.component';



@NgModule({
  declarations: [
    HomepageComponent,
    SidebarComponent,
    ContentCardComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    CardModule
  ]
})
export class HomepageModule { }
