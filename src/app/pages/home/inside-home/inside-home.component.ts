import { Component, OnInit } from '@angular/core';
import {faKitchenSet,
        faCalendar,
        faBath,
        faMagnifyingGlass,
        faChevronRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-inside-home',
  templateUrl: './inside-home.component.html',
  styleUrls: ['./inside-home.component.css']
})
export class InsideHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faKitchenSet = faKitchenSet;
  faCalendar = faCalendar;
  faBath = faBath;
  faMagnifyingGlass = faMagnifyingGlass;
  faChevronRight = faChevronRight;
}
