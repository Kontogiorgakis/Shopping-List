import { Component, OnInit} from '@angular/core';
import { faCoffee,
         faBell,
         faUser,
         faKitchenSet,
         faClipboardList,
         faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(){}

  public lem() {
    console.log("roda t")
  }


  title = 'Angular-app';
  faCoffee = faCoffee;
  faBell = faBell;
  faUser = faUser;
  faKitchenSet = faKitchenSet;
  faClipboardList = faClipboardList;
  faMagnifyingGlass = faMagnifyingGlass;
}
