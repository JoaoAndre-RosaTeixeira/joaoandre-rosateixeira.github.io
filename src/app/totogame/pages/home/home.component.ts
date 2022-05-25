import { Component, OnInit } from '@angular/core';
import {TotogameAPI} from "../../API/totogameAPI";
import {RequestApiPaginate} from "../../interface/RequestApiPaginate";
import {HttpClientService} from "../../../../services/http-client.service";
import {Game} from "../../class/Game";

@Component({
  selector: 'app-totogame',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  games: Game[] = [];
  private _limitApi:number =9
  private _totalApiResponse:number =0

  constructor(private httpService: HttpClientService) { }

  limitationApi(value?:number):string{
    if (value !==0){
      return "?limit="+value
    } else {
      return ""
    }
  }

  allGame(){
    if (this._limitApi !==this._totalApiResponse){
      this._limitApi = this._totalApiResponse
    } else {
      this._limitApi = 9
    }

    this.loadAPI()
  }

  loadAPI(){
    this.httpService.getRequest<RequestApiPaginate<Game>>(TotogameAPI.url("/game"+this.limitationApi(this._limitApi))).subscribe((json ) => {
      json.items.filter( item => {
        json.limit = 1;
        json.page = 1;
        json.itemsPerPage = 9;
        this._totalApiResponse = json.total;
      })
      this.games = json.items
      console.log(this.games)
    });
  }


  ngOnInit(): void {

    this.loadAPI()

  }


  get limitApi(): number {
    return this._limitApi;
  }

  set limitApi(value: number) {
    this._limitApi = value;
  }

  get totalApiResponse(): number {
    return this._totalApiResponse;
  }

  set totalApiResponse(value: number) {
    this._totalApiResponse = value;
  }
}
