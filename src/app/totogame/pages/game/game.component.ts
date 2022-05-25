import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClientService} from "../../../../services/http-client.service";
import {Game} from "../../class/Game"
import {RequestApiPaginate} from "../../interface/RequestApiPaginate";
import {TotogameAPI} from "../../API/totogameAPI";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  games: Game[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpClientService
  ) {
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let slug: string = '';
      console.log(params.slug)
      slug = params.slug;
      if (slug) {
        this.httpService.getRequest<RequestApiPaginate<Game>>(TotogameAPI.url("/game/" + slug)).subscribe((json) => {
          this.games = json.items
        })
      }
    })
  }
}
