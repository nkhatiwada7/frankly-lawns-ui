import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationHeaderComponent } from './navigation/navigation-header/navigation-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './pages/home/home.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationHeaderComponent,
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
