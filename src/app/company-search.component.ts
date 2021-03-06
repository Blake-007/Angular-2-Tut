import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';

import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchmap';

import {Company} from './company';
import {CompanyService} from './company.service';
import {CompanySearchService} from './company-search.service';

@Component({
  moduleId: module.id,
  selector: 'search',
  template: `<h1>Search a Comp</h1>
            <form (keyup) = "search(term.value)">
            <input type = "text" #term />
            </form>
            <ul>
            <li><a *ngFor = "let company of companies | async" [routerLink]="['/detail', company.id]" >
                {{company.name}}
            </a></li>
           
           </ul> `,
  providers: [CompanySearchService]
})
export class CompanySearchComponent implements OnInit  {
    searched: boolean;
    companies: Observable<Company[]>;
    c: string;
    com: string[];
    t: string;
    private searchTerms = new Subject<string>();
    constructor(private companySearchService: CompanySearchService)
    {
        
    }
    search(term: string): void
    {
        this.searchTerms.next(term);
    }
    ngOnInit(): void {
    this.companies = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.companySearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Company[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Company[]>([]);
      });
    }

 }