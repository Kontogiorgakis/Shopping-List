import { Component, OnInit, AfterViewInit} from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ProductModel } from './global/models/product/product.model';
import { SocketsService } from './global/services/sockets/sockets.service';
import { ProductService } from './global/services/tasks/products.service';


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

  //Total length
  productsLength = 0;


  constructor(private router: Router,private productService: ProductService,private socketService: SocketsService){
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
