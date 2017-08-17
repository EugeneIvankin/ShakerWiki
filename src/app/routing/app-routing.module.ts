import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CocteilDetailComponent }   from '../cocteil-detail/cocteil.component';
import { CocteilDashboard }      from '../cocteil-dashboard/cocteil-dashboard.component';
import {PopCocteilService} from "../popCocteil/popCocteil.component";
import {CocteilNotFaunded} from "../cocteilNotFaunded";
import {AddCocteil} from "../addCocteil";
import {AddedCocteil} from "../addedCocteil";


const routes: Routes = [
  { path: '', component: PopCocteilService},
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
