import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InsideHomeComponent } from './pages/home/inside-home/inside-home.component';
import { ChickenSegmentComponent } from './pages/home/meats/chicken/chicken-segment/chicken-segment.component';
import { MeatsComponent } from './pages/home/meats/meats.component';

const routes: Routes = [
  {path: '', component:MeatsComponent},
  {path: 'home', component: InsideHomeComponent},
  {path: 'home/meats', component: MeatsComponent},
  {path: 'home/meats/chicken', component: ChickenSegmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
