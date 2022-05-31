import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChessGameComponent} from "./chess-game/chess-game.component";
import {RegionsIndexComponent} from "./regions-index/regions-index.component";
import {DepartementsRegionComponent} from "./departements-region/departements-region.component";
import {CommunesDepartementComponent} from "./communes-departement/communes-departement.component";
import {FormUserComponent} from "./form-user/form-user.component";
import {RpgComponent} from "./rpg-game/rpg/rpg.component";
import {HomeComponent} from "./totogame/pages/home/home.component";
import {GameComponent} from "./totogame/pages/game/game.component";
import {CreateAccountComponent} from "./totogame/form/create-account/create-account.component";

const routes: Routes = [
  { path: 'chess', component: ChessGameComponent },
  { path: 'regions', component: RegionsIndexComponent },
  { path: 'regions/:codeRegion/departements', component: DepartementsRegionComponent },
  { path: 'regions/:codeRegion/departements/:codeDpt/communes', component: CommunesDepartementComponent},
  { path: 'departements', component: DepartementsRegionComponent },
  { path: 'form/user', component: FormUserComponent },
  { path: 'rpg', component: RpgComponent },
  { path: 'totogame', component: HomeComponent },
  { path: 'totogame/game/:slug', component: GameComponent },
  { path: 'totogame/createAccount', component: CreateAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
