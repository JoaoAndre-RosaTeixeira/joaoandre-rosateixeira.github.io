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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormUserComponent } from './form-user/form-user.component';
import { RpgComponent } from './rpg-game/rpg/rpg.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './totogame/pages/home/home.component';
import { GameComponent } from './totogame/pages/game/game.component';
import { CreateAccountComponent } from './totogame/form/create-account/create-account.component';
import { NewHeroComponent } from './totogame/form/new-hero/new-hero.component';
import { HomePokemonComponent } from './pokemon/pages/home/home.component';
import { HomeCVComponent } from './homeCV/home-cv/home-cv.component';
import { CompetencesCVComponent } from './homeCV/competences-cv/competences-cv.component';
import { PenduHtmlComponent } from './pendu-html/pendu-html.component';
import { RpgProject2DComponent } from './rpg-project2-d/rpg-project2-d.component';
import { Database } from 'database.config';


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
    HomeComponent,
    GameComponent,
    CreateAccountComponent,
    NewHeroComponent,
    HomePokemonComponent,
    HomeCVComponent,
    CompetencesCVComponent,
    PenduHtmlComponent,
    RpgProject2DComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,

  ],
  providers: [Database],
  bootstrap: [AppComponent]
})
export class AppModule { }
