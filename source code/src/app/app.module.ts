import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header1Component } from './header1/header1.component';
import { Rou1Component } from './rou1/rou1.component';
import { Rou3Component } from './rou3/rou3.component';

@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    Rou1Component,
    Rou3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }