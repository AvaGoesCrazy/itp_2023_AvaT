//TODO:
//-Finish moves
//-Code special moves
//-Make it so it does everything backwards for the black pieces
//-Finish samePieceThere and oppPieceThere functions
//-FIgure out out to make it do stuff when you click on a piece
//-buncha other stuff




//type: name of piece type
//color: 0 = black, 1 = white
//x & y: coords

let bColors = '1010101001010101101010100101010110101010010101011010101001010101'

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
    makePiece('queen', i, 4, i * 7)
  }
  for (let i = -1; i < 1; i++) {
    makePiece('king', i, 3, i * 7)
  }
}

//final piecelist order will be:
//bPawns, wPawns, bRooks, wRooks, bKnights, wKnights, bBishops, wBishop, bKing, wKing, bQueen, wQueen

const samePieceThere = (x, y, typ) => {

}

const oppPieceThere = (x, y, typ) => {

}

const samePlaneT = (x1, y1, x2, y2) => { return y1 === y2 || x1 === x2 }


//not to self, revise SPX to make more efficiant later and to not check out of bounds
const samePlaneX = (x1, y1, x2, y2) => {
  let destinX = x2
  let destinY = y2
  for (let i = 0; i < 8; i++) {
    if (x2 - 1 === x1 && y2 - 1 === y1) {
      return true
    }
    destinX = destinX--
    destinY = destinY--
  }
  for (let i = 0; i < 16; i++) {
    if (x2 - 1 === x1 && y2 - 1 === y1) {
      return true
    }
    destinX = destinX++
    destinY = destinY++
  }
  return false
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
  if (samePlaneT(x1, y1, x2, y2) && !samePieceThere(x2, y2, typ)) {
    return true
  } else {
    return false
  }
}

const kMove = (x1, y1, x2, y2, typ) => {
  if (samePieceThere(x2, y2, typ)) {
    return false
  }
  if (x2 - 1 === x1 && y2 - 3 === y1 || // theres probably a more efficant way to do this part but whatever. it should work. for now.
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
  if (samePlaneX(x1, y1, x2, y2) && !samePieceThere(x2, y2, typ)) {
    return true
  } else {
    return false
  }
}

const qMove = (x1, y1, x2, y2, typ) => {
  if ((samePlaneX(x1, y1, x2, y2) || samePlaneT(x1, y1, x2, y2) && !samePieceThere(x2, y2, typ))) {
    return true
  } else {
    return false
  }
}

const kingMove = (x1, y1, x2, y2, timesMoved, typ) => {
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      if (y1 - 1 + y === y2 && x1 - 1 + x == x2 && !samePieceThere(x2, y2, typ)) {
        return true
      } else {
        return false
      }
    }
  }
}

const legalMove = (x1, y1, x2, y2, timesMoved, typ) => {
  if (typ = 'pawn') {
    return pMove(x1, y1, x2, y2, timesMoved, typ)
  }
  if (typ = 'rook') {
    return rMove(x1, y1, x2, y2, timesMoved, typ)
  }
  if (typ = 'knight') {
    return kMove(x1, y1, x2, y2, typ)
  }
  if (typ = 'bishop') {
    return bMove(x1, y1, x2, y2, typ)
  }
  if (typ = 'queen') {
    return qMove(x1, y1, x2, y2, typ)
  }
  if (typ = 'king') {
    return kingMove(x1, y1, x2, y2, timesMoved, typ)
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