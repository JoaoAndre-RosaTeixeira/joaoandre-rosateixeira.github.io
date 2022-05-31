
import {Piece} from "./piece";

export class Rook extends Piece {

  constructor(color: string) {
    super('/assets/images/chess/rook-' + color + '.png', color);
  }

  move(): void {
    console.log('Move de la tour !');
  }

}
