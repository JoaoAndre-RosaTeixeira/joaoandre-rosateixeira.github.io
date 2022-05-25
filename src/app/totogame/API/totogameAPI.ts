import {sprintf} from "sprintf-js";

export class TotogameAPI {


  static rawUrlTotogameApi: string = 'https://steam-ish.test-02.drosalys.net/api';

  static urlSteamish: string = 'https://steam-ish.test-02.drosalys.net/api';
  static urlGame: string = TotogameAPI.urlSteamish + '/game';
  static urlGameAll: string = TotogameAPI.urlSteamish + '/game?limit=50';
  static urlGameFilter: string = TotogameAPI.urlSteamish + '/game?sort=game.%s&direction=%s&page=1&limit=%s';



  static url(Url: string): string {
    return TotogameAPI.rawUrlTotogameApi + Url;
  }

}
