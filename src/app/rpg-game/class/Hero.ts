export abstract class Hero {
  protected _name:string;
  protected _hitPoint: number;
  protected _damageMax: number;
  protected _damageMin: number;
  protected _level: number = 1;
  protected _defense: number;
  protected _criticalChance: number = 5;
  private _death: boolean= false;


  constructor(name: string, hitPoint: number, damageMax: number, damageMin: number, defense: number) {
    this._name = name;
    this._hitPoint = hitPoint;
    this._damageMax = damageMax;
    this._damageMin = damageMin;
    this._defense = defense;
  }

  levelUp(){
    this._level++
    this._criticalChance += 0.25
  }
  private randInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
  private randToFix(min:number, max:number): number{
    return Math.round(Math.random() * (max - min +1) + min*100)/100;
  }
  attack(target:Hero){
    if (!target.death && !this._death){
    let power = this.randInt(this._damageMax, this._damageMin)
    if(this.randToFix(0, 100) >= this._criticalChance){
      console.log("critical")
      power = power*1.5
    }
    power = Math.floor(power - (1 + (target._defense/100)));
    target.hitPoint -= power
    if (target.hitPoint < 0){
      target.hitPoint = 0
    }
    }
  }

  isAlive(): boolean{
    if(this._hitPoint <= 0){
      this._death = true
      return true
    } else {
      return false
    }
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
