import {Piece} from "./piece";

export class Pawn extends Piece {

  constructor(color: string) {
    super('/assets/images/chess/pawn-' + color + '.png', color);
  }

  move(): void {
    console.log('Move du pion !');
  }

}
