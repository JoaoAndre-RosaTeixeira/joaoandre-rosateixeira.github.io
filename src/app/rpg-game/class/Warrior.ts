import {Hero} from "./Hero";
import {RpgComponent} from "../rpg/rpg.component";

export class Warrior extends Hero {
  constructor(name: string) {
    super(name ,  360 , 47, 44, 4);
  }
  levelUp(target:Hero){

    while (this.experience > 200 * (this.level / 2)){
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
