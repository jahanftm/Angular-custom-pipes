import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import {ShortenerPipe} from "./custom-pipes/shortener-pipe";
import {FormsModule} from "@angular/forms";
import { UppercasePipe } from './custom-pipes/uppercase.pipe';
import { PersianDatePipe } from './custom-pipes/persian-date.pipe';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CustomPipesComponent,
    ShortenerPipe,
    UppercasePipe,
    PersianDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    ShortenerPipe,
    UppercasePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
