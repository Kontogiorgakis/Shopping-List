import { Component, OnInit, AfterViewInit} from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ProductModel } from './global/models/product/product.model';
import { ShopModel } from './global/models/shops/shop.model';
import { SocketsService } from './global/services/sockets/sockets.service';
import { ProductService } from './global/services/tasks/products.service';
import { ShopService } from './global/services/tasks/shops.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //For Buttons
  thumb:boolean = true;
  top:boolean = true;

  //Create our Products

  //Chicken
  chickenWhole = new ProductModel();
  chickenBreasts = new ProductModel();
  chickenDrums = new ProductModel();
  chickenLegs = new ProductModel();
  chickens = [this.chickenWhole,this.chickenBreasts,this.chickenDrums,this.chickenLegs];

  //Fruits
  pineapple = new ProductModel();
  mango = new ProductModel();
  avocado = new ProductModel();
  fruits = [this.pineapple,this.mango,this.avocado];

  //Soda
  cocaCola = new ProductModel();
  redBull = new ProductModel();
  gatorade = new ProductModel();
  soda = [this.cocaCola,this.redBull,this.gatorade];

  //Snacks
  chips = new ProductModel();
  popCorn = new ProductModel();
  biscuits = new ProductModel();
  snacks = [this.chips,this.popCorn,this.biscuits];

  //Oral
  toothbrush = new ProductModel();
  toothpaste = new ProductModel();
  dentalFloss = new ProductModel();
  oral = [this.toothbrush,this.toothpaste,this.dentalFloss];


  /*Create our Shops*/
  sklavenitis = new ShopModel();
  bazzar = new ShopModel();
  vasilopoulos = new ShopModel();
  halkiadakis = new ShopModel();
  kritikos = new ShopModel();
  shops = [this.sklavenitis,this.bazzar,this.vasilopoulos,this.halkiadakis,this.kritikos]

  //Total length
  productsLength = 0;


  constructor(private router: Router,private productService: ProductService,private shopService: ShopService,private socketService: SocketsService){
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (this.router.url.indexOf('/fridge') > -1 || this.router.url.indexOf('/bathroom') > -1 || this.router.url.indexOf('/reducer') > -1) {
        this.thumb = false;
        this.top = false;
      }else{
        this.thumb = true;
        this.top = true;
      }
    });

  }
  ngOnInit(): void{
    /*Initialize interactable products*/

    //Chicken
    this.chickenWhole.name = "Chicken Whole";
    this.chickenWhole.counter = 3;
    this.chickenWhole.minimum = 2;
    this.chickenWhole.liked = false;

    this.chickenBreasts.name = "Chicken Breasts";
    this.chickenBreasts.counter = 1.350;
    this.chickenBreasts.minimum = 1.300;
    this.chickenBreasts.liked = false;

    this.chickenDrums.name = "Chicken Drums";
    this.chickenDrums.counter = 0.500;
    this.chickenDrums.minimum = 0;
    this.chickenDrums.liked = false;

    this.chickenLegs.name = "Chicken Legs";
    this.chickenLegs.counter = 2.000;
    this.chickenLegs.minimum = 1.000;
    this.chickenLegs.liked = false;

    //Fruits
    this.pineapple.name = "Pineapple"
    this.pineapple.counter = 3;
    this.pineapple.minimum = 2;
    this.pineapple.liked = false;

    this.mango.name = "Mango"
    this.mango.counter = 1.360;
    this.mango.minimum = 1.300;
    this.mango.liked = false;

    this.avocado.name = "Avocado"
    this.avocado.counter = 0.500;
    this.avocado.minimum = 1.000;
    this.avocado.liked = false;

    //Soda
    this.cocaCola.name = "Coca Cola"
    this.cocaCola.counter = 3;
    this.cocaCola.minimum = 2;
    this.cocaCola.liked = false;

    this.redBull.name = "Red Bull"
    this.redBull.counter = 6;
    this.redBull.minimum = 3;
    this.redBull.liked = false;

    this.gatorade.name = "Gatorade"
    this.gatorade.counter = 0;
    this.gatorade.minimum = 0;
    this.gatorade.liked = false;

    //Snacks
    this.chips.name = "Chips"
    this.chips.counter = 3;
    this.chips.minimum = 2;
    this.chips.liked = false;

    this.popCorn.name = "Pop Corn"
    this.popCorn.counter = 6;
    this.popCorn.minimum = 3;
    this.popCorn.liked = false;

    this.biscuits.name = "Biscuits"
    this.biscuits.counter = 0;
    this.biscuits.minimum = 0;
    this.biscuits.liked = false;

    //Oral
    this.toothbrush.name = "Toothbrush"
    this.toothbrush.counter = 2;
    this.toothbrush.minimum = 0;
    this.toothbrush.liked = false;

    this.toothpaste.name = "Toothpaste"
    this.toothpaste.counter = 1;
    this.toothpaste.minimum = 1;
    this.toothpaste.liked = false;

    this.dentalFloss.name = "Dental Floss"
    this.dentalFloss.counter = 0;
    this.dentalFloss.minimum = 1;
    this.dentalFloss.liked = false;


    /*Shops (oti pio kourastiko na arxikopoieis tin vasi :p)*/
    //SKLAVENITIS
    this.sklavenitis.name = "Sklavenitis"
    this.sklavenitis.chickenWhole = 9.02
    this.sklavenitis.chickenBreasts = 9.20
    this.sklavenitis.chickenDrums = 8.14
    this.sklavenitis.chickenLegs = 9.36
    this.sklavenitis.pineapple = 1.85
    this.sklavenitis.mango = 1.49
    this.sklavenitis.avocado = 3.75
    this.sklavenitis.cocaCola = 0.67
    this.sklavenitis.redBull = 0.98
    this.sklavenitis.gatorad = 0.88
    this.sklavenitis.chips = 1.56
    this.sklavenitis.popCorn = 0.98
    this.sklavenitis.biscuits = 0.73
    this.sklavenitis.tootbrush = 1.97
    this.sklavenitis.toothpaste = 0.98
    this.sklavenitis.dentalFloss = 1.99

    //BAZZAR
    this.bazzar.name = "Bazzar"
    this.bazzar.chickenWhole = 7.98
    this.bazzar.chickenBreasts = 9.40
    this.bazzar.chickenDrums = 8.14
    this.bazzar.chickenLegs = 8.00
    this.bazzar.pineapple = 1.59
    this.bazzar.mango = 3.85
    this.bazzar.avocado = 4.80
    this.bazzar.cocaCola = 0.64
    this.bazzar.redBull = 0.99
    this.bazzar.gatorad = 0.81
    this.bazzar.chips = 1.05
    this.bazzar.popCorn = 1.01
    this.bazzar.biscuits = 0.74
    this.bazzar.tootbrush = 1.75
    this.bazzar.toothpaste = 2.17
    this.bazzar.dentalFloss = 2.59

    //VASILOPOULOS
    this.vasilopoulos.name = "Vasilopoulos"
    this.vasilopoulos.chickenWhole = 5.42
    this.vasilopoulos.chickenBreasts = 11.73
    this.vasilopoulos.chickenDrums = 12.24
    this.vasilopoulos.chickenLegs = 7.08
    this.vasilopoulos.pineapple = 2.21
    this.vasilopoulos.mango = 2.50
    this.vasilopoulos.avocado = 2.23
    this.vasilopoulos.cocaCola = 0.70
    this.vasilopoulos.redBull = 1.18
    this.vasilopoulos.gatorad = 0.91
    this.vasilopoulos.chips = 1.78
    this.vasilopoulos.popCorn = 1.19
    this.vasilopoulos.biscuits = 0.98
    this.vasilopoulos.tootbrush = 1.58
    this.vasilopoulos.toothpaste = 1.89
    this.vasilopoulos.dentalFloss = 2.44

    //HALKIADAKIS
    this.halkiadakis.name = "Halkiadakis"
    this.halkiadakis.chickenWhole = 7.80
    this.halkiadakis.chickenBreasts = 12.32
    this.halkiadakis.chickenDrums = 8.13
    this.halkiadakis.chickenLegs = 6.40
    this.halkiadakis.pineapple = 1.53
    this.halkiadakis.mango = 1.93
    this.halkiadakis.avocado = 1.93
    this.halkiadakis.cocaCola = 0.66
    this.halkiadakis.redBull = 1.18
    this.halkiadakis.gatorad = 0.92
    this.halkiadakis.chips = 1.52
    this.halkiadakis.popCorn = 1.18
    this.halkiadakis.biscuits = 1.25
    this.halkiadakis.tootbrush = 1.87
    this.halkiadakis.toothpaste = 1.88
    this.halkiadakis.dentalFloss = 1.99

    //KRITIKOS
    this.kritikos.name = "Kritikos"
    this.kritikos.chickenWhole = 5.70
    this.kritikos.chickenBreasts = 12.35
    this.kritikos.chickenDrums = 8.15
    this.kritikos.chickenLegs = 8.05
    this.kritikos.pineapple = 1.78
    this.kritikos.mango = 2.27
    this.kritikos.avocado = 1.52
    this.kritikos.cocaCola = 0.67
    this.kritikos.redBull = 1.19
    this.kritikos.gatorad = 0.93
    this.kritikos.chips = 1.56
    this.kritikos.popCorn = 0.98
    this.kritikos.biscuits = 1.27
    this.kritikos.tootbrush = 2.00
    this.kritikos.toothpaste = 1.74
    this.kritikos.dentalFloss = 2.19

    console.log("MPika")

    //this.getAllTasks();
    this.productService.getAll().subscribe((result) => {
      console.log(result)
      //this.productsLength=re4;
      console.log(this.productsLength)
      if(result.length===0){
        //for(var i=0; i<result.length; i++){
          //this.deleteTask(result[i]._id);
        //}
        //ADD CHICKEN
        for(let chicken of this.chickens){
          this.productService.create(chicken).subscribe((result) => {
            console.log(chicken)
            this.socketService.publish("tasks_update", chicken);
          });
        }

        //ADD FRUITS
        for(let fruit of this.fruits){
          this.productService.create(fruit).subscribe((result) => {
            console.log(fruit)
            this.socketService.publish("tasks_update", fruit);
          });
        }

        //ADD SODA
        for(let soda of this.soda){
          this.productService.create(soda).subscribe((result) => {
            console.log(soda)
            this.socketService.publish("tasks_update", soda);
          });
        }

        //ADD SODA
        for(let snack of this.snacks){
          this.productService.create(snack).subscribe((result) => {
            console.log(snack)
            this.socketService.publish("tasks_update", snack);
          });
        }

        //ADD ORAL
        for(let oral of this.oral){
          this.productService.create(oral).subscribe((result) => {
            console.log(oral)
            this.socketService.publish("tasks_update", oral);
          });
        }
      }

    });

    /*Shops*/
    this.shopService.getAll().subscribe((result) => {
      console.log("LENGTH")
      console.log(result.length)
      if(result.length===0){
        for(let shop of this.shops){
          console.log(shop)
          this.shopService.create(shop).subscribe((result) => {
            console.log(shop)
            this.socketService.publish("tasks_update", shop);
          });
        }
      }
    });

  }

  private getAllTasks(): void {
    this.productService.getAll().subscribe((result) => {
      console.log(result)
      this.productsLength=this.productsLength+4;
      console.log(this.productsLength)
      for(var i=0; i<result.length; i++){
        this.deleteTask(result[i]._id);
      }
      //console.log(result)
      //console.log(this.products[0]._id);
    });
  }

  //Delete Task
  public deleteTask(id:string): void {
    //const response = confirm("Are you sure you want to delete this task?");
    //if (response) {
      this.productService.delete(id).subscribe(() => {
        this.getAllTasks();
        this.socketService.publish("tasks_update", {});
      });
    //}
  }
  ngAfterViewInit(): void {}
  title = 'Angular-app';
}
