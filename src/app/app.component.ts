import { Component, OnInit, AfterViewInit} from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  //For Buttons
  thumb:boolean = true;
  top:boolean = true;

  constructor(private router: Router){
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (this.router.url.indexOf('/fridge') > -1) {
        this.thumb = false;
        this.top = false;
      }else{
        this.thumb = true;
        this.top = true;
      }
    });

  }
  ngOnInit(): void{}
  ngAfterViewInit(): void {}
  title = 'Angular-app';

}
