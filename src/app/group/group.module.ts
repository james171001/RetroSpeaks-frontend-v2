import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { ViewgroupComponent } from './viewgroup/viewgroup.component';
import { ContentCardComponent } from '../shared/content-card/content-card.component';
import { CommentsComponent } from '../shared/comments/comments/comments.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewgroupComponent,
    ContentCardComponent,
    CommentsComponent,
  ],
  imports: [
    CommonModule,
    GroupRoutingModule,
    FormsModule
  ]
})
export class GroupModule { }
