import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './house/home.component';
import { ItemShopComponent } from './pages/item-shop/item-shop.component';
import { AppComponent } from './app.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { UserSegmentComponent } from './components/user-segment/user-segment.component';
import { ExtrasComponent } from './pages/extras/extras.component';
import { RecipeComponent } from './pages/extras/recipe/recipe.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { SnacksComponent } from './pages/home/inside-home/cupboard/snacks/snacks.component';
import { InsideHomeComponent } from './pages/home/inside-home/inside-home.component';
import { ChickenSegmentComponent } from './pages/home/meats/chicken/chicken-segment/chicken-segment.component';
import { MeatsComponent } from './pages/home/meats/meats.component';
import { AddComponent } from './pages/list/add/add.component';
import { ListComponent } from './pages/list/list.component';
import { BathroomPanelComponent } from './places/bathroom-panel/bathroom-panel.component';
import { FridgeFruitsComponent } from './places/fridge-panel/fridge-fruits/fridge-fruits.component';
import { FridgeChickenComponent } from './places/fridge-panel/fridge-meats/fridge-chicken/fridge-chicken.component';
import { FridgeMeatsComponent } from './places/fridge-panel/fridge-meats/fridge-meats.component';
import { FridgePanelComponent } from './places/fridge-panel/fridge-panel.component';
import { FruitsComponent } from './pages/home/fruits/fruits.component';
import { TropicalComponent } from './pages/home/fruits/tropical/tropical.component';
import { ReducerComponent } from './reducer/reducer.component';
import { YogurtComponent } from './pages/extras/yogurt/yogurt.component';

const routes: Routes = [
  //{ path: 'socket-events', loadChildren: () => import('./pages/socket-events/socket-events.module').then(m => m.SocketEventsModule) },
  { path: 'tasks', loadChildren: () => import('./pages/tasks/tasks.module').then(m => m.TasksModule) },
  //{ path: 'home', loadChildren: () => import('./house/home.module').then(m => m.HomeModule) },
  { path: 'item-shop', component: ItemShopComponent},
  //{ path: '**', redirectTo: 'home', pathMatch: 'full' },

  /*Shopping List*/
  /*Mobile*/
  {path: '', component:ListComponent},
  {path: 'user', component:UserSegmentComponent},
  {path: 'favorite', component:FavoriteComponent},
  {path: 'notifications', component:NotificationsComponent},
  {path: 'add', component: AddComponent},
  {path: 'home', component: InsideHomeComponent},
  {path: 'extras', component: ExtrasComponent},
  {path: 'extras/recipe', component: RecipeComponent},
  {path: 'extras/yogurt', component: YogurtComponent},
  {path: 'home/snacks', component:SnacksComponent},
  {path: 'home/meats', component: MeatsComponent},
  {path: 'home/fruits', component: FruitsComponent},
  {path: 'home/meats/chicken', component: ChickenSegmentComponent},
  {path: 'home/fruits/tropical', component: TropicalComponent},
  {path: 'reducer',component: ReducerComponent},

  /*Fridge*/
  {path: 'fridge', component:FridgePanelComponent},
  {path: 'fridge/meats', component:FridgeMeatsComponent},
  {path: 'fridge/meats/chicken', component:FridgeChickenComponent},
  {path: 'fridge/fruits', component:FridgeFruitsComponent},

  /*Bathroom*/
  {path:'bathroom',component:BathroomPanelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
