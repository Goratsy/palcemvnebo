import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LovesComponent } from './components/loves/loves.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostsService } from './servises/posts.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LovesComponent,
    CreateEventComponent,
    NotFoundComponent,
    HomeComponent,
    PostComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
