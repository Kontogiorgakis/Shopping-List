import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from 'src/app/global/services/tasks/products.service';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { ProductModel } from 'src/app/global/models/product/product.model';

import { NotificationsService } from 'src/app/global/services/tasks/notifications.service';
import { NotificationModel } from 'src/app/global/models/notifications/notifications.model';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-reducer',
  templateUrl: './reducer.component.html',
  styleUrls: ['./reducer.component.css']
})
export class ReducerComponent implements OnInit {

  public killograms: ProductModel[] = []
  public pieces: ProductModel[] = []

  constructor(private router: Router,private productService: ProductService,private notificationService: NotificationsService,private socketService: SocketsService) {}

  ngOnInit(): void {
    this.getAllTasks();
  }

  private getAllTasks(): void {
    this.productService.getAll().subscribe((result) => {
      for(var res of result){
        if(res.name==="Chicken Breasts" || res.name==="Chicken Drums" || res.name==="Chicken Legs" || res.name==="Mango" || res.name==="Avocado"){
          this.killograms.push(res);
        }else{
          this.pieces.push(res)
        }
      }
    });
  }

  public reducer(product:ProductModel,kgOrPc:number){
    if(kgOrPc==0){
      if(product.counter-0.1>=0){
        product.counter = product.counter-0.1
        product.counter.toFixed(2);
        //UPDATE
        this.productService.update(product).subscribe((result) => {
          this.socketService.publish("tasks_update", product);
        });
      }
    }else{
      if(product.counter-1>=0){
        product.counter = product.counter-1
        //UPDATE
        this.productService.update(product).subscribe((result) => {
          this.socketService.publish("tasks_update", product);
        });
      }
    }

  }

}
