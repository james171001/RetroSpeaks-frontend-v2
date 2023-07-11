import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './shared/error/error.component';
import { MatCardModule } from '@angular/material/card';
import {HttpClientModule} from "@angular/common/http";
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { UserAuthModule } from './user-auth/user-auth.module';
import { CoreModule } from './core/core.module';
import { LayoutComponent } from './core/layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    UserAuthModule,
    ReactiveFormsModule,
    CoreModule
  


  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
