import {Component, OnInit} from '@angular/core';
import {TotogameAPI} from "../../API/totogameAPI";
import {RequestApiPaginate} from "../../interface/RequestApiPaginate";
import {HttpClientService} from "../../../../services/http-client.service";
import {Game} from "../../class/Game";
import {sprintf} from "sprintf-js";

@Component({
  selector: 'app-totogame',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _iButton: number = 0
  limitApi: boolean = false
  private _totalApiResponse: number = 9;
  gamesAlpha: Game[] = [];
  gamesPrices: Game[] = [];
  gamesPublishedAt: Game[] = [];
  gamesFilter: GamesList[] = [];

  constructor(private httpService: HttpClientService) {
  }


  buttonsAllGameFunction(id:number){
    this.limitApi = !this.limitApi
    this.gamesFilter = [];
    console.log(id)
    console.log(this)
    console.log(event)
    if ( id === 1){
      this.apiLoadPublishedAt()
    } else if ( id === 2){
      this.apiLoadPrice()
    } else if (id === 3){
      this.apiLoadName()
    }
  }

  apiLoad(){
    this.gamesFilter = [];
    this.limitApi = !this.limitApi
    this.apiLoadPublishedAt()
    this.apiLoadPrice()
    this.apiLoadName()
    console.log(this.gamesFilter)
    this.gamesFilter.sort(function compare(a, b) {
      if (a.id < b.id)
        return -1;
      if (a.id > b.id )
        return 1;
      return 0;
    });
    console.log(this.gamesFilter)
  }



  apiLimit(): number {
    if (!this.limitApi) {
      return this._totalApiResponse
    } else {
      return 9
    }
  }

  apiLoadPublishedAt() {
    this.httpService.getRequest<RequestApiPaginate<Game>>(sprintf(TotogameAPI.urlGameFilter, 'publishedAt', 'desc', this.apiLimit())).subscribe((json) => {
      this.gamesPublishedAt = json.items;
      this._totalApiResponse = json.total
      this.gamesFilter.push({games: this.gamesPublishedAt, name: 'Les dernières sorties', id: 1});
    });
  }

  apiLoadPrice() {
    this.httpService.getRequest<RequestApiPaginate<Game>>(sprintf(TotogameAPI.urlGameFilter, 'price', 'desc', this.apiLimit())).subscribe((json) => {
      this.gamesPrices = json.items;
      this.gamesFilter.push({games: this.gamesPrices, name: 'Les meilleures ventes', id: 2});
    });
  }

  apiLoadName() {
    this.httpService.getRequest<RequestApiPaginate<Game>>(sprintf(TotogameAPI.urlGameFilter, 'name', 'asc', this.apiLimit())).subscribe((json) => {
      this.gamesAlpha = json.items;
      this.gamesFilter.push({games: this.gamesAlpha, name: 'Les jeux', id: 3});
    });
  }


  ngOnInit(): void {
    this.apiLoad()
  }


  iButton(): number {
    let i = this._iButton
    this._iButton++;
    return i
  }

}

interface GamesList {
  games: Game[];
  name: string;
  id: number
}

