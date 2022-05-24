import {Hero} from "./Hero";
import {RpgComponent} from "../rpg/rpg.component";

export class Warrior extends Hero {
  constructor(name: string) {
    super(name ,  360 , 100, 47, 44, 4, "brown");
  }
  levelUp(target:Hero){

    while (this.experienceNecessary() === true){
    super.levelUp(target)
      this._hitPoint += 39
      this.damageMin += 2
      this.damageMax += 2
      if ( this._level % 3){
        this._defense += 1
      }
    }

  }
}
