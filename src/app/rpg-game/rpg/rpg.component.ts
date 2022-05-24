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
  private _fightOn: boolean = false


  get fightOn(): boolean {
    return this._fightOn;
  }

  set fightOn(value: boolean) {
    this._fightOn = value;
  }

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
    this._fightOn = false
  }
  fight(){
    this._newGame?.fight()
    this._fightOn = true
  }
  log(value?:any){
    console.log(value)
  }

}
