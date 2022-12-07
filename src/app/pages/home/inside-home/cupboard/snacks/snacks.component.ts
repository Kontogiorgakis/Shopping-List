import { Component, OnInit } from '@angular/core';
import { faHeart, faXmark} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent implements OnInit {

  //array of items
  items = ["Chips","Pop Corn","Biscuits","Snack Bars","Crackers"] 

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public counter(){
    //console.log("NTOOUT")
  }

  public addItem(num: number){
    this.router.navigateByUrl('/add?tab='+this.items[num]+'')
  }

  public redirect(){
    console.log("awewq")
    this.router.navigateByUrl('/home')
  }

  faHeart = faHeart;
  faXmark = faXmark
}
