import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { ViewgroupComponent } from './viewgroup/viewgroup.component';
import { ContentCardComponent } from '../shared/content-card/content-card.component';


@NgModule({
  declarations: [
    ViewgroupComponent,
    ContentCardComponent
  ],
  imports: [
    CommonModule,
    GroupRoutingModule
  ]
})
export class GroupModule { }
