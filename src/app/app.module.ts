import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';



// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import {AppRoutingModule} from './app-routing.module';

import { AppComponent }  from './app.component';
import {CompanySearchComponent} from './company-search.component';
import {CompanyDetailComponent} from './company-detail.component';
import {CompanyService} from './company.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService), AppRoutingModule ],
  declarations: [ AppComponent, CompanyDetailComponent, CompanySearchComponent ],
  providers:    [CompanyService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
