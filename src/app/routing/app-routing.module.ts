import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CocteilDetailComponent }   from '../cocteil-detail/cocteil.component';
import { CocteilDashboard }      from '../cocteil-dashboard/cocteil-dashboard.component';
import {PopCocteilService} from "../popCocteil/popCocteil.component";
import {CocteilNotFaunded} from "../cocteilNotFaunded/cocteilNotFaunded";
import {AddCocteil} from "../addCocteil/addCocteil";
import {AddedCocteil} from "../addedCocteil/addedCocteil";
import {AppComponent} from "../app.component";
import {RegistrationComponent} from "../registration/registration";


const routes: Routes = [
  { path: '', component: PopCocteilService},
  { path: 'registration',  component: RegistrationComponent },
  { path: 'dashboard',  component: CocteilDashboard },
  { path: 'detail/:name',  component: CocteilDetailComponent },
  { path: 'cocteilNotFaunded', component: CocteilNotFaunded },
  { path: 'addCocteil', component: AddCocteil },
  { path: 'addedCocteil', component: AddedCocteil }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}
