import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ThumbButtonsComponent } from './components/thumb-buttons/thumb-buttons.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { InsideHomeComponent } from './pages/home/inside-home/inside-home.component';
import { MeatsComponent } from './pages/home/meats/meats.component';
import { UserSegmentComponent } from './user-segment/user-segment.component';
import { ChickenSegmentComponent } from './pages/home/meats/chicken/chicken-segment/chicken-segment.component'

@NgModule({
  declarations: [
    AppComponent,
    ThumbButtonsComponent,
    TopBarComponent,
    InsideHomeComponent,
    MeatsComponent,
    UserSegmentComponent,
    ChickenSegmentComponent,
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