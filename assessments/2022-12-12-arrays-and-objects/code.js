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
let move = makeMove('x', 1, 1)


const placeMark = (board, move) => {
  board[move.row] [move.column] = move.mark
}