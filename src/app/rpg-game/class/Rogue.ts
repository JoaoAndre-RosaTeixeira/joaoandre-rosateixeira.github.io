import {Hero} from "./Hero";

export class Warrior extends Hero {
  constructor(name: string, hitPoint: number, damageMax: number, damageMin: number, defense: number) {
    super(name , hitPoint, damageMax, damageMin, defense);
  }
}
