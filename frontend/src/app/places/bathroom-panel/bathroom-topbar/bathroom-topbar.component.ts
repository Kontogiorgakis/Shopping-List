import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bathroom-topbar',
  templateUrl: './bathroom-topbar.component.html',
  styleUrls: ['./bathroom-topbar.component.css']
})
export class BathroomTopbarComponent implements OnInit {

  pending:boolean = false;
  like:boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public pendingRedirect(){
    console.log("LEMAT")
    this.pending = !this.pending;
    //this.router.navigateByUrl()
  }

  public likeRedirect(){
    console.log("LEMAT")
    this.like = !this.like;
    //this.router.navigateByUrl()
  }

}
