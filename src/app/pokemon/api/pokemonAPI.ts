import {sprintf} from "sprintf-js";

export class PokemonAPI {


  static rawUrlPokemonApi: string = 'https://pokeapi.co/api/v2/';

  //static urlSteamish: string = 'https://steam-ish.test-02.drosalys.net/api';
  //static urlGame: string = PokemonAPI.urlSteamish + '/game';
  //static urlGameAll: string = PokemonAPI.urlSteamish + '/game?limit=50';
  //static urlGameFilter: string = PokemonAPI.urlSteamish + '/game?sort=game.%s&direction=%s&pages=1&limit=%s';



  static url(Url: string): string {
    return PokemonAPI.rawUrlPokemonApi + Url;
  }

}
