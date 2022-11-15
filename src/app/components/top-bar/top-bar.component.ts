import { Component, OnInit} from '@angular/core';
import {
         faBell,
         faUser
        } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  title = 'Angular-app';
  faBell = faBell;
  faUser = faUser;
}
