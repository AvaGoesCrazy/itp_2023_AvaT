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

let ary = ['x', 'x', 'x']

const allTheSame = (ary) => {
  if (ary[0] === ary[1] && ary[0] === ary[2])
    return ary;
}