import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ThumbButtonsComponent } from './components/thumb-buttons/thumb-buttons.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { InsideHomeComponent } from './pages/home/inside-home/inside-home.component';
import { MeatsComponent } from './pages/home/meats/meats.component';
import { ChickenSegmentComponent } from './pages/home/meats/chicken/chicken-segment/chicken-segment.component';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/list/add/add.component';
import { ExtrasComponent } from './pages/extras/extras.component';
import { UserSegmentComponent } from './components/user-segment/user-segment.component';
import { RecipeComponent } from './pages/extras/recipe/recipe.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { FridgeComponent } from './pages/home/inside-home/fridge/fridge.component';
import { CupboardComponent } from './pages/home/inside-home/cupboard/cupboard.component';
import { BathroomComponent } from './pages/home/inside-home/bathroom/bathroom.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { SnacksComponent } from './pages/home/inside-home/cupboard/snacks/snacks.component';
import { OralComponent } from './pages/home/inside-home/bathroom/oral/oral.component';

@NgModule({
  declarations: [
    AppComponent,
    ThumbButtonsComponent,
    TopBarComponent,
    InsideHomeComponent,
    MeatsComponent,
    ChickenSegmentComponent,
    ListComponent,
    AddComponent,
    ExtrasComponent,
    UserSegmentComponent,
    RecipeComponent,
    NotificationsComponent,
    FridgeComponent,
    CupboardComponent,
    BathroomComponent,
    FavoriteComponent,
    SnacksComponent,
    OralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [MeatsComponent]
})
export class AppModule { }
