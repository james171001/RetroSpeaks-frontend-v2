import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomepageModule } from './homepage/homepage.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { ErrorComponent } from './error/error.component';
=======
import { ContentCardComponent } from './content-card/content-card.component';
import { MatCardModule } from '@angular/material/card';
>>>>>>> 75c964addb8c649df0564592b9c59519767fa0d0

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ErrorComponent
=======
>>>>>>> 75c964addb8c649df0564592b9c59519767fa0d0
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HomepageModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
