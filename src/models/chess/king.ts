
import {Piece} from "./piece";

export class King extends Piece {

  constructor(color: string) {
    super('/assets/images/chess/king-' + color + '.png', color);
  }

  move(): void {
    console.log('Move du roi !');
  }

}
