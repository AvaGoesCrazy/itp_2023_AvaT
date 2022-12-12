const makeRow = ['', '' ,'']

const makeBoard = [
  makeRow, 
  makeRow,
  makeRow
]

const makeMove = (xo, y, x) => {
  let tttMove = {'mark' : xo, 'row':y, 'column':x}
  return tttMove
}