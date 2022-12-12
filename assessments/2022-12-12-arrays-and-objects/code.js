const makeRow = ['', '' ,'']

const makeBoard = [
  makeRow, 
  makeRow,
  makeRow
]

const makeMove = (xo, y, x) => {
  let move = {'mark' : xo, 'row':y, 'column':x}
  return move
}

let board = makeBoard
let move = makeMove('X', 1, 1)


const placeMark = (board, move) => {
  board[move.row] [move.column] = move.mark
}

const allTheSame = (ary) => {
  if (ary[0] === ary[1] && ary[0] === ary[2]) {
    return true;
  } else {
    return false;
  }
}

const extractColumn = (ary3x3, i) => {
  let ary = ['', '', '']
  ary[0] = ary3x3[0] [i]
  ary[1] = ary3x3[1] [i]
  ary[2] = ary3x3[2] [i]
  return ary
}