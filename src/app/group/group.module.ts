import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { ViewgroupComponent } from './viewgroup/viewgroup.component';
import { ContentCardComponent } from '../shared/content-card/content-card.component';
import { CommentsComponent } from '../shared/comments/comments/comments.component';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    ViewgroupComponent,
    ContentCardComponent,
    CommentsComponent,
  ],
  imports: [
    CommonModule,
    GroupRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule
  ]
})
export class GroupModule { }
