import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { ViewgroupComponent } from './viewgroup/viewgroup.component';
import { ContentCardComponent } from '../shared/content-card/content-card.component';
import { CommentsComponent } from '../shared/comments/comments/comments.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { PollContentCardComponent } from '../shared/poll-content-card/poll-content-card.component';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SurveyContentCardComponent } from '../shared/survey-content-card/survey-content-card.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ViewgroupComponent,
    PollContentCardComponent,
    SurveyContentCardComponent,
  ],
  imports: [
    CommonModule,
    GroupRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSliderModule,
    SharedModule,
  ],
})
export class GroupModule {}
