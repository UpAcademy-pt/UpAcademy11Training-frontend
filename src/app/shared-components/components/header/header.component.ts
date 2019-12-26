import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router ) { }

  view = 'login';

  ngOnInit() {
   // console.log(this.router.url);
    this.router.events.subscribe( (data:any) => {
      //console.log(data);
      if( data.constructor.name === 'NavigationEnd'){
        //console.log(data.url.substr(1));
        this.view = data.url.substr(1);
      }
    });

  }

}
