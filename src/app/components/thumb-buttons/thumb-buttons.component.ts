import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { faKitchenSet,
         faClipboardList,
         faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

import { Router } from '@angular/router';

@Component({
  selector: 'app-thumb-buttons',
  templateUrl: './thumb-buttons.component.html',
  styleUrls: ['./thumb-buttons.component.css']
})
export class ThumbButtonsComponent implements OnInit, AfterViewInit {

  //For Buttons
  constructor(private router: Router){}
  
  //My home div
  @ViewChild('home_button') home_button!:ElementRef;
  @ViewChild('list_button') list_button!:ElementRef;
  @ViewChild('extra_button') extra_button!:ElementRef;
  
  ngOnInit(): void{}
  ngAfterViewInit(): void {
    //initialize with list first
    this.listToggle()
  }
  
  //toggle highlighting and change screen HOME
  public homeToggle() {
    console.log("HOME")
    //Change the colors inside div
    this.toggler(this.home_button)
    this.unToggler(this.list_button,this.extra_button)
    
    this.router.navigateByUrl('/home')
  }

  //toggle highlighting and change screen LIST
  public listToggle() {
    console.log("LIST")

    this.toggler(this.list_button)
    this.unToggler(this.home_button,this.extra_button)
    
    this.router.navigateByUrl('/')
  }

  //toggle highlighting and change screen EXTRAS
  public extrasToggle() {
    console.log("EXTRAS")

    this.toggler(this.extra_button)
    this.unToggler(this.home_button,this.list_button)

    this.router.navigateByUrl('/extras')
  }

  public toggler(where: ElementRef){
    where.nativeElement.style.background = 'rgb(231, 213, 213)'
    if(where.nativeElement.id === "list_button"){
      where.nativeElement.children.list.style.color = 'rgb(89, 69, 69)'
      where.nativeElement.children.list_text.style.color = 'rgb(89, 69, 69)'
    }else if(where.nativeElement.id === "home_button"){
      where.nativeElement.children.thumb_icons.style.color = 'rgb(89, 69, 69)'
      where.nativeElement.children.home_text.style.color = 'rgb(89, 69, 69)'
    }else{
      where.nativeElement.children.thumb_icons.style.color = 'rgb(89, 69, 69)'
      where.nativeElement.children.extras_text.style.color = 'rgb(89, 69, 69)'
    }
  }

  public unToggler(where1: ElementRef, where2: ElementRef){
    where1.nativeElement.style.background = 'rgb(89, 69, 69)'
    if(where1.nativeElement.id === "list_button"){
      where1.nativeElement.children.list.style.color = 'rgb(255, 255, 255)'
      where1.nativeElement.children.list_text.style.color = 'rgb(255, 255, 255)'
    }else if(where1.nativeElement.id === "home_button"){
      where1.nativeElement.children.thumb_icons.style.color = 'rgb(255, 255, 255)'
      where1.nativeElement.children.home_text.style.color = 'rgb(255, 255, 255)'
    }else{
      where1.nativeElement.children.thumb_icons.style.color = 'rgb(255, 255, 255)'
      where1.nativeElement.children.extras_text.style.color = 'rgb(255, 255, 255)'
    }


    where2.nativeElement.style.background = 'rgb(89, 69, 69)'
    if(where2.nativeElement.id === "list_button"){
      where2.nativeElement.children.list.style.color = 'rgb(255, 255, 255)'
      where2.nativeElement.children.list_text.style.color = 'rgb(255, 255, 255)'
    }else if(where2.nativeElement.id === "home_button"){
      where2.nativeElement.children.thumb_icons.style.color = 'rgb(255, 255, 255)'
      where2.nativeElement.children.home_text.style.color = 'rgb(255, 255, 255)'
    }else{
      where2.nativeElement.children.thumb_icons.style.color = 'rgb(255, 255, 255)'
      where2.nativeElement.children.extras_text.style.color = 'rgb(255, 255, 255)'
    }
  }






  title = 'Angular-app';
  faKitchenSet = faKitchenSet;
  faClipboardList = faClipboardList;
  faMagnifyingGlass = faMagnifyingGlass;

}
