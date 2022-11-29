import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { UserSegmentComponent } from './components/user-segment/user-segment.component';
import { ExtrasComponent } from './pages/extras/extras.component';
import { RecipeComponent } from './pages/extras/recipe/recipe.component';
import { InsideHomeComponent } from './pages/home/inside-home/inside-home.component';
import { ChickenSegmentComponent } from './pages/home/meats/chicken/chicken-segment/chicken-segment.component';
import { MeatsComponent } from './pages/home/meats/meats.component';
import { AddComponent } from './pages/list/add/add.component';
import { ListComponent } from './pages/list/list.component';


const routes: Routes = [
  {path: '', component:ListComponent},
  {path: 'user', component:UserSegmentComponent},
  {path: 'notifications', component:NotificationsComponent},
  {path: 'add', component: AddComponent},
  {path: 'home', component: InsideHomeComponent},
  {path: 'extras', component: ExtrasComponent},
  {path: 'extras/recipe', component: RecipeComponent},
  {path: 'home/meats', component: MeatsComponent},
  {path: 'home/meats/chicken', component: ChickenSegmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
