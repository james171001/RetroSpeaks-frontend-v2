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
import { AuthGuard } from './shared/services/auth-guard.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { CreatePostComponent } from './post/create-post/create-post/create-post.component';
import { PostModule } from './post/post.module';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    EditProfileComponent,
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
    CoreModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule
  


  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
