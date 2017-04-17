import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import {Company} from './company';
import {CompanyService} from './company.service';

@Component({
  selector: 'detail',
  template:`<h1>{{company?.name}} details</h1>
            <h3>About</h3>
            <p>{{company?.about}}</p>
            <h3>Number</h3>
            <p>{{company?.num}}</p>
            <h3>Email</h3>
            <p>{{company?.email}}</p>
            <h3>Address</h3>
            <p>{{company?.address}}</p>
            `,
  
})
export class CompanyDetailComponent implements OnInit
{
    company: Company;
    constructor(private companyService: CompanyService, private route: ActivatedRoute)
    {

    }
    ngOnInit():void {
    this.route.params
      .switchMap((params: Params) => this.companyService.getHero(+params['id']))
      .subscribe(company => this.company = company);
    }
   
}