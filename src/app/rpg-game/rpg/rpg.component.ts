import { Component, OnInit } from '@angular/core';
import {Mage} from "../class/Mage";
import {Battleground} from "../class/Battleground";

@Component({
  selector: 'app-rpg',
  templateUrl: './rpg.component.html',
  styleUrls: ['./rpg.component.scss']
})
export class RpgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let newGame: Battleground = new Battleground("Joao", "Ayoub", "Sophana", "Kevin", "Mickael", "Jeoffrey")

    newGame.fight()
  }



}
