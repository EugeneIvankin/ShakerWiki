import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import {CocteilDetailComponent} from './cocteil-detail/cocteil.component'
import {CocteilService} from './services/cocteil.servece';
import {CocteilDashboard} from './cocteil-dashboard/cocteil-dashboard.component';
import {AppRoutingModule} from "./routing/app-routing.module";
import {PopCocteilService} from "./popCocteil/popCocteil.component";
import {CocteilNotFaunded} from "./cocteilNotFaunded/cocteilNotFaunded";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {AddCocteil} from "./addCocteil/addCocteil";
import {AddedCocteil} from "./addedCocteil/addedCocteil";


@NgModule({
  declarations: [
    AppComponent, CocteilDetailComponent, CocteilDashboard, PopCocteilService, CocteilNotFaunded, AddCocteil, AddedCocteil
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
