import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage-feed/homepage-feed.component';
import { HomepageRoutingModule } from './homapgeRoutingModule';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    HomepageComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    CardModule
  ]
})
export class HomepageModule { }
