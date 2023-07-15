import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ContentCardComponent } from '../shared/content-card/content-card.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    ViewCategoryComponent,

  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MatCardModule
  ]
})
export class CategoryModule { }
