import { Component, OnInit } from '@angular/core';
import { faCircle, faMinus, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  
  //Divs
  name:boolean = true;
  quantity:boolean = false;
  price:boolean = false;


  //Buy from
  show:boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public showStores(){
    document.getElementById('adding')?.setAttribute("style","filter: blur(1px);")
    this.show=true;
  }

  public selectShop(){
    document.getElementById('adding')?.setAttribute("style","filter: blur(0px);")
    this.show=false;

    //make market first
    document.getElementById('shops')!.innerHTML="Σκλαβενίτης";
    document.getElementById('price')!.innerHTML="10,25€";
  
  }

  /*Show divs*/
  public nameShow(){

    //show name
    document.getElementById('search_bar')?.setAttribute("style","pointer-events: auto;")
    document.getElementById('namerow')?.setAttribute("style","opacity: 1;")
    document.getElementById('dash1')?.setAttribute("style","opacity: 1;")

    //hide quantity
    document.getElementById('quantity')?.setAttribute("style","opacity: 0.6;")
    document.getElementById('dash2')?.setAttribute("style","opacity: 0.6;")
    document.getElementById('no1')?.setAttribute("style","pointer-events: none;")
    document.getElementById('no2')?.setAttribute("style","pointer-events: none; top:82px;")

    //hide price
    document.getElementById('shops')?.setAttribute("style","pointer-events: auto;")
    document.getElementById('price_status')?.setAttribute("style","opacity: 0.6;")
    document.getElementById('addit')?.setAttribute("style","opacity: 0.6; pointer-events: none;")
    this.quantity = false
  }

  public quantityShow(){
    this.quantity = true;
     //show quantity
    document.getElementById('quantity')?.setAttribute("style","opacity: 1;")
    document.getElementById('dash2')?.setAttribute("style","opacity: 1;")
    document.getElementById('no1')?.setAttribute("style","pointer-events: auto;")
    document.getElementById('no2')?.setAttribute("style","pointer-events: auto; top:82px;")

    //hide name
    document.getElementById('search_bar')?.setAttribute("style","pointer-events: none;")
    document.getElementById('namerow')?.setAttribute("style","opacity: 0.6;")
    document.getElementById('dash1')?.setAttribute("style","opacity: 0.6;")


    //hide price
    document.getElementById('shops')?.setAttribute("style","pointer-events: auto;")
    document.getElementById('price_status')?.setAttribute("style","opacity: 0.6;")
    document.getElementById('addit')?.setAttribute("style","opacity: 0.6; pointer-events: none;")
  }


  public priceShow(){

    if(this.quantity){
      //show price
      document.getElementById('shops')?.setAttribute("style","pointer-events: auto;")
      document.getElementById('price_status')?.setAttribute("style","opacity: 1;")
      document.getElementById('addit')?.setAttribute("style","opacity: 1; pointer-events: auto;")

      //hide name
      document.getElementById('search_bar')?.setAttribute("style","pointer-events: none;")
      document.getElementById('namerow')?.setAttribute("style","opacity: 0.6;")
      document.getElementById('dash1')?.setAttribute("style","opacity: 0.6;")

      //hide quantity
      document.getElementById('quantity')?.setAttribute("style","opacity: 0.6;")
      document.getElementById('dash2')?.setAttribute("style","opacity: 0.6;")
      document.getElementById('no1')?.setAttribute("style","pointer-events: none;")
      document.getElementById('no2')?.setAttribute("style","pointer-events: none; top:82px;")
    }
  }


  public addItem(){
    this.router.navigateByUrl('/')
  }


  faCircle = faCircle;
  faMinus =  faMinus;
  faChevronRight = faChevronRight;
}
