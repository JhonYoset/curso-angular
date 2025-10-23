import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { HijoPageComponent } from './modules/home/hijo-page/hijo-page.component';

@NgModule({
  declarations: [
    AppComponent,/*
    HolaComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    WelcomeComponent,
    PropiedadesComponent,
    EventosComponent,
    BidireccionalComponent,
    EmpleadoComponent,
    DirectivasComponent,
    NotImageDirective,*/
    HomePageComponent,
    HijoPageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
