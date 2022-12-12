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
import { FridgePanelComponent } from './places/fridge-panel/fridge-panel.component';
import { FridgeTopbarComponent } from './places/fridge-panel/fridge-topbar/fridge-topbar.component';
import { PendingItemsComponent } from './places/fridge-panel/fridge-topbar/pending-items/pending-items.component';
import { FridgeMeatsComponent } from './places/fridge-panel/fridge-meats/fridge-meats.component';
import { FridgeChickenComponent } from './places/fridge-panel/fridge-meats/fridge-chicken/fridge-chicken.component';
import { FridgeLikeComponent } from './places/fridge-panel/fridge-like/fridge-like.component';
import { FridgeSodaComponent } from './places/fridge-panel/fridge-soda/fridge-soda.component';
import { FridgeFruitsComponent } from './places/fridge-panel/fridge-fruits/fridge-fruits.component';
import { FridgeTropicalComponent } from './places/fridge-panel/fridge-fruits/fridge-tropical/fridge-tropical.component';

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
    FridgePanelComponent,
    FridgeTopbarComponent,
    PendingItemsComponent,
    FridgeMeatsComponent,
    FridgeChickenComponent,
    FridgeLikeComponent,
    FridgeSodaComponent,
    FridgeFruitsComponent,
    FridgeTropicalComponent
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
