import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { ViewgroupComponent } from './viewgroup/viewgroup.component';
import { ContentCardComponent } from '../shared/content-card/content-card.component';
import { GroupComponent } from './group/group.component';


@NgModule({
  declarations: [
    ViewgroupComponent,
    ContentCardComponent,
    GroupComponent
  ],
  imports: [
    CommonModule,
    GroupRoutingModule
  ]
})
export class GroupModule { }
