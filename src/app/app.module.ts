import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import {CocteilDetailComponent} from './cocteil.component'
import {CocteilService} from './services/cocteil.servece';
import {CocteilDashboard} from './cocteil-dashboard.component';
import {AppRoutingModule} from "./app-routing.module";
import {PopCocteilService} from "./popCocteil.component";
import {CocteilNotFaunded} from "./cocteilNotFaunded";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {AddCocteil} from "./addCocteil";


@NgModule({
  declarations: [
    AppComponent, CocteilDetailComponent, CocteilDashboard, PopCocteilService, CocteilNotFaunded, AddCocteil
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, AppRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    CocteilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
