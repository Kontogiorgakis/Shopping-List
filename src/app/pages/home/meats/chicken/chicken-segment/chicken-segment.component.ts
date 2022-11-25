import { Component, OnInit } from '@angular/core';
import { faHeart,faCircleXmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chicken-segment',
  templateUrl: './chicken-segment.component.html',
  styleUrls: ['./chicken-segment.component.css']
})
export class ChickenSegmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public counter(){
    console.log("NTOOUT")
  }

  faHeart = faHeart;
  faCircleXmark = faCircleXmark;
}
