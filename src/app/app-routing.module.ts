import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InsideHomeComponent } from './pages/home/inside-home/inside-home.component';

const routes: Routes = [
  {path: '', component:AppComponent},
  {path: 'home', component: InsideHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
