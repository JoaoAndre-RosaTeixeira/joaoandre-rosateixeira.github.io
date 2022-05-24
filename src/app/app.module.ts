import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessGameComponent } from './chess-game/chess-game.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import { RegionsIndexComponent } from './regions-index/regions-index.component';
import { DepartementsRegionComponent } from './departements-region/departements-region.component';
import { CommunesDepartementComponent } from './communes-departement/communes-departement.component';
import { BreadCrumbsGeoApiComponent } from './bread-crumbs-geo-api/bread-crumbs-geo-api.component';
import {FormsModule} from "@angular/forms";
import { FormUserComponent } from './form-user/form-user.component';
import { RpgComponent } from './rpg-game/rpg/rpg.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { HomeComponent } from './totogame/pages/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    ChessGameComponent,
    NavbarComponent,
    RegionsIndexComponent,
    DepartementsRegionComponent,
    CommunesDepartementComponent,
    BreadCrumbsGeoApiComponent,
    FormUserComponent,
    RpgComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
