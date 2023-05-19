//TODO:
//-Finish moves
//-Code special moves
//-Make it so it does everything backwards for the black pieces
//-FIgure out out to make it do stuff when you click on a piece
//-buncha other stuff




//type: name of piece type
//color: 0 = black, 1 = white
//x & y: coords

let pieceList = []

const makePiece = (typ, clr, x, y) => {
  pieceList.push({ type: typ, color: clr, x: x, y: y, timesMoved: 0 })
}

const startPieces = () => {
  for (let i = 0; i < 8; i++) {
    makePiece('pawn', 0, i, 1)
  }
  for (let i = 0; i < 8; i++) {
    makePiece('pawn', 1, i, 6)
  }
  for (let i = -1; i < 1; i++) {
    makePiece('rook', 0, i * 7, 0)
  }
  for (let i = -1; i < 1; i++) {
    makePiece('rook', 1, i * 7, 7)
  }
  for (let i = -1; i < 1; i++) {
    makePiece('knight', i, 1, i * 7)
  }
  for (let i = -1; i < 1; i++) {
    makePiece('knight', i, 6, i * 7)
  }
  for (let i = -1; i < 1; i++) {
    makePiece('bishop', i, 2, i * 7)
  }
  for (let i = -1; i < 1; i++) {
    makePiece('bishop', i, 5, i * 7)
  }
  for (let i = -1; i < 1; i++) {
    makePiece('king', i, 3, i * 7)
  }
  for (let i = -1; i < 1; i++) {
    makePiece('queen', i, 4, i * 7)
  }
}

//final piecelist order will be:
//bPawns, wPawns, bRooks, wRooks, bKnights, wKnights, bBishops, wBishop, bKing, wKing, bQueen, wQueen

const samePieceThere = (x, y, typ) => {

}

const oppPieceThere = (x, y, typ) => {

}

const pMove = (x1, y1, x2, y2, tM, typ) => {
  if (x1++ === x2) {
    return true
  } else {
    if (x1 + 2 === x2 && tM === 0) {
      return true
    } else {
      if (x1 + 1 === x2 && y1 + 1 === y2 && oppPieceThere(x2, y2, typ) || x1 - 1 === x2 && y1 - 1 === y2 && oppPieceThere(x2, y2, typ)) {
        return true
      } else {
        return false
      }
    }
  }
}

const rMove = (x1, y1, x2, y2, typ) => {
  if (y1 === y2) {
    if (x1 < x2) {
      for (let i = 0; i < 32; i++) {
        if (pieceList[i].x > x1 && pieceList[i].x < x2) {
          return false
        }
      }
    }
    if (x1 > x2) {
      for (let i = 0; i < 32; i++) {
        if (pieceList[i].x < x1 && pieceList[i].x > x2) {
          return false
        }
      }
    }
  }
  if (x1 === x2) {
    if (y1 < y2) {
      for (let i = 0; i < 32; i++) {
        if (pieceList[i].x > y1 && pieceList[i].x < y2) {
          return false
        }
      }
    }
    if (y1 > y2) {
      for (let i = 0; i < 32; i++) {
        if (pieceList[i].x < y1 && pieceList[i].x > y2) {
          return false
        }
      }
    }
  }
  return true
}

const kMove = (x1, y1, x2, y2, typ) => {
  if (samePieceThere(x2, y2, typ)) {
    return false
  }
  if (x2 - 1 === x1 && y2 - 3 === y1 || // theres probably a more efficant way to do this part but whatever, it should work
    x2 + 1 === x1 && y2 - 3 === y1 ||
    x2 - 1 === x1 && y2 + 3 === y1 ||
    x2 + 1 === x1 && y2 + 3 === y1 ||
    x2 - 3 === x1 && y2 - 1 === y1 ||
    x2 + 3 === x1 && y2 - 1 === y1 ||
    x2 - 3 === x1 && y2 + 1 === y1 ||
    x2 + 3 === x1 && y2 + 1 === y1) {
    return true
  } else {
    return false
  }
}

const bMove = (x1, y1, x2, y2, typ) => {
  if (y1 < y2 && x1 < x2) {//⠠

  }
  if (y1 > y2 && x1 < x2) {//⠈

  }
  if (y1 < y2 && x1 > x2) {//⠄

  }
  if (y1 > y2 && x1 > x2) {//⠁

  }
}

const legalMove = (x1, y1, x2, y2, timesMoved, typ) => {
  if (typ = 'pawn') {
    return pMove(x1, y1, x2, y2, timesMoved)
  }
  if (typ = 'rook') {
    return rMove(x1, y1, x2, y2, typ)
  }
  if (typ = 'knight') {
    return kMove(x1, y1, x2, y2, typ)
  }
  if (typ = 'bishop') {

  }
  if (typ = 'king') {

  }
  if (typ = 'queen') {

  }
}

const startTurn = (e) => {

}

const grid = document.querySelector('#grid');

for (let i = 0; i < 8; i++) {
  for (let n = 0; n < 8; n++) {
    const div = document.createElement('div');
    div.classList.add('box');
    grid.append(div);
    div.onclick = (e) => startTurn(e.target)
  }
}