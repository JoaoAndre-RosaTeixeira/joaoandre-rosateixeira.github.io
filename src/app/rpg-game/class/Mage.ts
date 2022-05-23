import {Hero} from "./Hero";
import {RpgComponent} from "../rpg/rpg.component";

export class Mage extends Hero {



  constructor(name: string) {
    super(name ,  300 , 58, 52, 2, );
  }

  levelUp(target:Hero){


    while (this.experience > 200 * (this.level / 2)){
      super.levelUp(target)
      this._hitPoint += 25
      this.damageMin += 4
      this.damageMax += 4
      if ( this._level % 5){
        this._defense += 1
      }
    }

  }



}
