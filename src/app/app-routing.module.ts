import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CocteilDetailComponent }   from './cocteil.component';
import { CocteilDashboard }      from './cocteil-dashboard.component';
import {PopCocteilService} from "./popCocteil.component";
import {CocteilNotFaunded} from "./cocteilNotFaunded";
import {AddCocteil} from "./addCocteil";


const routes: Routes = [
  { path: '', component: PopCocteilService},
  { path: 'dashboard',  component: CocteilDashboard },
  { path: 'detail/:name',  component: CocteilDetailComponent },
  { path: 'cocteilNotFaunded', component: CocteilNotFaunded },
  { path: 'addCocteil', component: AddCocteil },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}
