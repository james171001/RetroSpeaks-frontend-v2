import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateGroupComponent } from './create-group/create-group.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { ContentCardComponent } from './content-card/content-card.component';
import { PollContentCardComponent } from './poll-content-card/poll-content-card.component';
import { SurveyContentCardComponent } from './survey-content-card/survey-content-card.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommentsComponent } from './comments/comments/comments.component';
import { CommentsModule } from './comments/comments.module';


@NgModule({
  declarations: [
    CreateGroupComponent,
    ContentCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatOptionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule,
    MatExpansionModule,
  ],
  exports:[ContentCardComponent]
})
export class SharedModule { }
