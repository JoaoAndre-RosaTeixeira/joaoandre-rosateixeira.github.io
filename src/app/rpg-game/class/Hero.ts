import {RpgComponent} from "../rpg/rpg.component";

export abstract class Hero {
  protected _name: string;
  protected _hitPoint: number;
  protected _damageMax: number;
  protected _damageMin: number;
  protected _level: number = 1;
  protected _experience: number = 0;
  private _deathExperience: number = 300;
  protected _defense: number;
  protected _criticalChance: number = 5;
  protected _death: boolean = false;
  protected _color: string;
  // protected _totalDamage: number;
  // protected _maxDamageInfliged: number;
  // protected _numberCriticalInfliged: number;


  constructor(name: string, hitPoint: number, damageMax: number, damageMin: number, defense: number, color: string) {
    this._name = name;
    this._hitPoint = hitPoint;
    this._damageMax = damageMax;
    this._damageMin = damageMin;
    this._defense = defense;
    this._color = color
  }

  levelUp(target: Hero) {
    this.experience = this.experience - 200 * (this.level / 2)
    this._level++
    this._criticalChance += 0.25
    this._deathExperience = this._deathExperience * (this._level / 2)
    RpgComponent._journalFight.logs = this.name + " prend un niveau. il est niveau " + this.level

  }

  private randInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private randToFix(min: number, max: number): number {
    return Math.round(Math.random() * (max - min + 1) + min * 100) / 100;
  }

  attack(target: Hero) {
    if (!target.death && !this._death) {
      let power = this.randInt(this._damageMax, this._damageMin)


      if (this.randToFix(0, 100) >= this._criticalChance) {
        RpgComponent._journalFight.logs = "critical"
        power = power * 1.5
      }
      power = Math.floor(power - (1 + (target._defense / 100)));
      target.hitPoint -= power

      if (target.hitPoint < 0) {
        target.hitPoint = 0
      }
      RpgComponent._journalFight.logs = this.name + " lvl " + this.level + " attaque " + target.name + " lvl " + this.level + " et lui inflige "+ power +" points de dégâts. Il reste " + target.hitPoint + " point de vie a " + target.name + "."

      if (!target.isAlive()) {
        this.experience = this.experience + target.deathExperience
        RpgComponent._journalFight.logs = this.name + " tue " + target.name + " et gagne " + target.deathExperience + " point d'experience"
        RpgComponent._journalFight.logs = target.name + " est mort !"
      }
      this.levelUp(target)
    }
  }

  isAlive(): boolean {
    if (this._hitPoint <= 0) {
      this._death = true
      return false
    } else {
      return true
    }
  }


  get deathExperience(): number {
    return this._deathExperience;
  }

  set deathExperience(value: number) {
    this._deathExperience = value;
  }

  get experience(): number {
    return this._experience;
  }

  set experience(value: number) {
    this._experience = value;
  }

  get death(): boolean {
    return this._death;
  }

  set death(value: boolean) {
    this._death = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get hitPoint(): number {
    return this._hitPoint;
  }

  set hitPoint(value: number) {
    this._hitPoint = value;
  }

  get damageMax(): number {
    return this._damageMax;
  }

  set damageMax(value: number) {
    this._damageMax = value;
  }

  get damageMin(): number {
    return this._damageMin;
  }

  set damageMin(value: number) {
    this._damageMin = value;
  }

  get level(): number {
    return this._level;
  }

  set level(value: number) {
    this._level = value;
  }

  get defense(): number {
    return this._defense;
  }

  set defense(value: number) {
    this._defense = value;
  }

  get criticalChance(): number {
    return this._criticalChance;
  }

  set criticalChance(value: number) {
    this._criticalChance = value;
  }
}
