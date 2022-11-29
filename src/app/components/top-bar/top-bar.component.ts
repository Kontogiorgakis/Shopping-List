import { Component, OnInit} from '@angular/core';
import {
         faBell,
         faUser
        } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  toggleUser:boolean = false;
  toggleNotifications:boolean=false;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  public goToList(){
    this.router.navigateByUrl('/')
  }

  public user(){
    this.toggleUser=!this.toggleUser;
  }

  public notifications(){
    this.toggleNotifications=!this.toggleNotifications
  }

  title = 'Angular-app';
  faBell = faBell;
  faUser = faUser;
}
