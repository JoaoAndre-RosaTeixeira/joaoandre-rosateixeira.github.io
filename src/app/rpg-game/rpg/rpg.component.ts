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
  private _newGame: Battleground | undefined


  get newGame(): Battleground | undefined {
    return this._newGame;
  }

  set newGame(value: Battleground | undefined) {
    this._newGame = value;
  }

  get journalFight(): JournalFight {
    return RpgComponent._journalFight;
  }

  set journalFight(value: JournalFight) {
    RpgComponent._journalFight = value;
  }

  constructor( ) { }




  ngOnInit(): void {




  }

  startGame(){
    this._newGame = new Battleground("Joao", "Ayoub", "Sophana", "Kevin", "Mickael", "Jeoffrey")
    console.log(this._newGame)
  }
  fight(){
    this._newGame?.fight()
  }
  log(value?:any){
    console.log(value)
  }

}
