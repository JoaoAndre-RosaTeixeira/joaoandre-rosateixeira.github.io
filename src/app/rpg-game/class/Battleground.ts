import {Hero} from "./Hero";
import {Mage} from "./Mage";
import {Warrior} from "./Warrior";
import {Rogue} from "./Rogue";
import {RpgComponent} from "../rpg/rpg.component";


export class Battleground {
  private _heroes: Hero[] = [];
  private _endGame: boolean= false

  constructor(...names: string[]) {
    let classes = [Mage, Warrior, Rogue];
    names.forEach((name) => {
      let randomIndex: number =  Math.round(this.getRandomArbitrary(0, classes.length - 1));
      this._heroes.push(new classes[randomIndex](name));
    });
  }
  getRandomArbitrary(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
  private randInt(min:number, max:number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

  checkEndGame(): void{
    this.heroes.forEach(hero => {
      if (hero.isAlive() === false){

        this.heroes.splice(this.heroes.indexOf(hero), 1)
      }
    })
    if (this.heroes.length <= 1){
      this.endGame = true
      RpgComponent._journalFight.logs = "La partie est terminé ! " + this.heroes[0].name + " a gagné !"
    }
  }
  private randTarget(min:number, max:number, attacker: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randHero:number = Math.floor(Math.random() * (max - min +1)) + min;
    while(randHero===attacker){
      randHero = Math.floor(Math.random() * (max - min +1)) + min;
    }
    return randHero
  }



  fight(){
    while (this.endGame === false) {
      const first: Hero =  this.heroes[this.randInt(0, this.heroes.length - 1)];
      const second: Hero = this.heroes[this.randTarget(0, this.heroes.length - 1, this.heroes.indexOf(first))];
      first.attack(second);
      if (second.isAlive() ) {
        second.attack(first);
      }
      this.checkEndGame()
    }
  }


  get heroes(): Hero[] {
    return this._heroes;
  }

  set heroes(value: Hero[]) {
    this._heroes = value;
  }

  get endGame(): boolean {
    return this._endGame;
  }

  set endGame(value: boolean) {
    this._endGame = value;
  }
}
