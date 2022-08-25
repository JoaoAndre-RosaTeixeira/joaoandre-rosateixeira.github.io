import {Component, OnInit} from '@angular/core';
import {sprintf} from "sprintf-js";
import {HttpClientService} from "../../../../services/http-client.service";
import {BasePokemon} from "../../class/BasePokemon";
import {PokemonAPI} from "../../api/pokemonAPI";
import {PokemonsApi} from "../../class/PokemonsApi";
import {IPokemon} from "../../class/i-pokemon";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePokemonComponent implements OnInit {

  private _pokeList: Array<IPokemon> = []
  private _pokeListButton: PokemonsApi<BasePokemon> | undefined


  constructor(private httpService: HttpClientService) {
  }

  apiLoad(value: string | undefined) {
    this._pokeList = []
    if (value === undefined) {
      value = PokemonAPI.url("pokemon")
    }
    this.httpService.getRequest<PokemonsApi<BasePokemon>>(sprintf(value)).subscribe((json) => {
      this._pokeListButton = json
      json.results.forEach(pokemon => {
        this.httpService.getRequest<IPokemon>(sprintf(pokemon.url)).subscribe((jsonTwo) => {
          this._pokeList.sort(function (a, b) {
            return a.id - b.id;
          });
          this._pokeList.push(jsonTwo);
        });
      })
    });
  }


  ngOnInit(): void {
    this.apiLoad(undefined)
  }

  get pokeList(): Array<IPokemon> {
    return this._pokeList;
  }

  set pokeList(value: Array<IPokemon>) {
    this._pokeList = value;
  }

  get pokeListButton(): PokemonsApi<BasePokemon> | undefined {
    return this._pokeListButton;
  }

  set pokeListButton(value: PokemonsApi<BasePokemon> | undefined) {
    this._pokeListButton = value;
  }
}
