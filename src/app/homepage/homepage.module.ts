import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFeedComponent } from './user-feed/user-feed.component';
import { HomepageRoutingModule } from './hompageRoutingModule';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [
    UserFeedComponent,

  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    CardModule,
    FormsModule,
    MatTabsModule
  ]
})
export class HomepageModule { }
