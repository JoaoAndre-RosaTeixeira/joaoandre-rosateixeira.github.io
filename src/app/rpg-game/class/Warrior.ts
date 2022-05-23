import {Hero} from "./Hero";

export class Warrior extends Hero {
  constructor(name: string) {
    super(name ,  360 , 47, 44, 4);
  }
  levelUp(){
    super.levelUp()
    this._hitPoint += 39
    this.damageMin += 2
    this.damageMax += 2
    if ( this._level % 3){
      this._defense += 1
    }
  }
}
