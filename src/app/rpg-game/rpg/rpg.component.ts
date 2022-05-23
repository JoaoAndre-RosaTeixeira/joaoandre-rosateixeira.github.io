import { Component, OnInit } from '@angular/core';
import {Mage} from "../class/Mage";
import {Battleground} from "../class/Battleground";
import {JournalFight} from "../class/JournalFight";

@Component({
  selector: 'app-rpg',
  templateUrl: './rpg.component.html',
  styleUrls: ['./rpg.component.scss']
})
export class RpgComponent implements OnInit {

  static _journalFight: JournalFight = new JournalFight();

  get journalFight(): JournalFight {
    return RpgComponent._journalFight;
  }

  set journalFight(value: JournalFight) {
    RpgComponent._journalFight = value;
  }

  constructor( ) { }




  ngOnInit(): void {
    let newGame: Battleground = new Battleground("Joao", "Ayoub", "Sophana", "Kevin", "Mickael", "Jeoffrey")

    newGame.fight()
  }



}
