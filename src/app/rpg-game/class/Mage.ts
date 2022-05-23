import {Hero} from "./Hero";

export class Mage extends Hero {



  constructor(name: string) {
    super(name ,  300 , 58, 52, 2);
  }

  levelUp(){
    super.levelUp()
    this._hitPoint += 25
    this.damageMin += 4
    this.damageMax += 4
    if ( this._level % 5){
      this._defense += 1
    }
  }



}
