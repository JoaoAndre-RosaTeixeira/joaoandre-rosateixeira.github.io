
import {Piece} from "./piece";

export class Bishop extends Piece {

  constructor(color: string) {
    super('/assets/images/chess/bishop-' + color + '.png', color);
  }

  move(): void {
    console.log('Move du fou !');
  }

}
