import { Component, OnInit } from '@angular/core';
import {faKitchenSet,
        faCalendar,
        faBath,
        faMagnifyingGlass,
        faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inside-home',
  templateUrl: './inside-home.component.html',
  styleUrls: ['./inside-home.component.css']
})
export class InsideHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public redirect(){
    this.router.navigateByUrl('/home/meats')
  }

  faKitchenSet = faKitchenSet;
  faCalendar = faCalendar;
  faBath = faBath;
  faMagnifyingGlass = faMagnifyingGlass;
  faChevronRight = faChevronRight;
}
