import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<ul>
      <li><a routerLink="/">Home</a></li>
       
    </ul>
    <hr />
    <router-outlet></router-outlet>
            
            
           
            `,
 
})
export class AppComponent  {
    

 }
