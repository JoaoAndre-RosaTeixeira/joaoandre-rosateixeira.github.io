import {Component} from '@angular/core';
import {ChessBoard} from "../../models/chess/chess-board";
import {Case} from "../../models/chess/case";

@Component({
  selector: 'app-chess-game',
  templateUrl: './chess-game.component.html',
  styleUrls: ['./chess-game.component.scss']
})
export class ChessGameComponent {

  protected caseClicked: Case | undefined
  protected lastMove: string | undefined = "black"

  chessBoard: ChessBoard = new ChessBoard();

  move(caseChess: Case) {
    if (caseChess.piece === undefined) {
      if (this.caseClicked?.clicked === true) {
        this.caseClicked.clicked = false
        caseChess.piece = this.caseClicked.piece
        this.caseClicked.piece = undefined
        this.caseClicked = undefined
        this.lastMove = caseChess.piece?.color
      }
    } else
      if (this.caseClicked !== undefined && this.caseClicked?.piece?.color !== caseChess?.piece.color ) {
        this.caseClicked.clicked = false
        caseChess.piece = this.caseClicked.piece
        this.caseClicked.piece = undefined
        this.caseClicked = undefined
        this.lastMove = caseChess.piece?.color
      } else if (this.caseClicked !== undefined && this.caseClicked?.piece?.color == caseChess?.piece.color ) {
      this.caseClicked.clicked = !this.caseClicked.clicked
      caseChess.clicked = !caseChess.clicked
      this.caseClicked = caseChess
    }
      else if (this.lastMove !== caseChess?.piece.color) {
        caseChess.clicked = !caseChess.clicked
        this.caseClicked = caseChess
      }

  }

}
