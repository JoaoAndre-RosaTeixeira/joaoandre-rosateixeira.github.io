export class TotogameAPI {


  static rawUrlTotogameApi: string = 'https://steam-ish.test-02.drosalys.net/api';


  static url(Url: string): string {
    return TotogameAPI.rawUrlTotogameApi + Url;
  }

}
