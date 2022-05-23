import {Hero} from "./Hero";
import {RpgComponent} from "../rpg/rpg.component";

export class Rogue extends Hero {
  constructor(name: string) {
    super(name, 320, 52, 42, 3);
  }

  levelUp(target: Hero) {

    while (this.experience > 200 * (this.level / 2)) {
      super.levelUp(target)
      this._hitPoint += 33
      this.damageMin += 3
      this.damageMax += 3
      if (this._level % 4) {
        this._defense += 1
      }
      this._criticalChance += 0.08
    }
  }
}
