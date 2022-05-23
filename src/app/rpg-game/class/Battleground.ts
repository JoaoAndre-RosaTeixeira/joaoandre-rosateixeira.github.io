import {Hero} from "./Hero";
import {Mage} from "./Mage";
import {Warrior} from "./Warrior";
import {Rogue} from "./Rogue";

export class Battleground {
  private _heroes: Hero[] = [];
  private _endGame: boolean= false

  constructor(...names: string[]) {
    let classes = [Mage, Warrior, Rogue];
    names.forEach((name) => {
      let randomIndex: number =  Math.round(this.getRandomArbitrary(0, classes.length - 1));
      this._heroes.push(new classes[randomIndex](name));
    });
    console.log(this.heroes);
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
      if (hero.isAlive() === true){
        console.log(hero.name + " est mort !")
        this.heroes.splice(this.heroes.indexOf(hero), 1)
      }
    })
    if (this.heroes.length <= 1){
      this.endGame = true
      console.log("La partie terminé ! " + this.heroes[0].name + " a gagné !")
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
      console.log('Le hero qui attaque est ' + first.name + " lvl " + first.level + ". Il attaque " + second.name + " lvl " + first.level + " . Il lui reste " + second.hitPoint+ " point de vie.");
      if (second.isAlive()) {
        second.attack(first);
      }
      this.checkEndGame()
      this.heroes[this.heroes.indexOf(first)].levelUp()
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
