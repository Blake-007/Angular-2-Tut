import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component';
import {CompanySearchComponent} from './company-search.component';
import {CompanyDetailComponent} from './company-detail.component';

const routes: Routes = [
  { path: '',  component: CompanySearchComponent },
  { path: 'detail/:id', component: CompanyDetailComponent},
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule
{

}