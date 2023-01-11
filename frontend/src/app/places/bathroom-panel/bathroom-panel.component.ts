import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bathroom-panel',
  templateUrl: './bathroom-panel.component.html',
  styleUrls: ['./bathroom-panel.component.css']
})
export class BathroomPanelComponent implements OnInit {

  oral:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public oralRedirect(){
    document.getElementById('panel')?.setAttribute("style","filter:blur(3px); pointer-events:none;")
    this.oral=!this.oral
  }

}
