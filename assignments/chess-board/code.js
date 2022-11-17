const WHITE_KING = '♔';
const WHITE_QUEEN = '♕';
const WHITE_ROOK = '♖';
const WHITE_BISHOP = '♗';
const WHITE_KNIGHT = '♘';
const WHITE_PAWN = '♙';
const BLACK_KING = '♚';
const BLACK_QUEEN = '♛';
const BLACK_ROOK = '♜';
const BLACK_BISHOP = '♝';
const BLACK_KNIGHT = '♞';
const BLACK_PAWN = '♟';

// Example of drawing one of the pieces
//drawText(WHITE_KING, width/2, height/2, 'black', 64);

const background = [
  ['grey', 'lightGrey', 'grey', 'lightGrey', 'grey', 'lightGrey', 'grey', 'lightGrey'],
  ['lightGrey', 'gray', 'lightGrey', 'gray', 'lightGrey', 'gray', 'lightGrey', 'gray'],
  ['grey', 'lightGrey', 'grey', 'lightGrey', 'grey', 'lightGrey', 'grey', 'lightGrey'],
  ['lightGrey', 'gray', 'lightGrey', 'gray', 'lightGrey', 'gray', 'lightGrey', 'gray'],
  ['grey', 'lightGrey', 'grey', 'lightGrey', 'grey', 'lightGrey', 'grey', 'lightGrey'],
  ['lightGrey', 'gray', 'lightGrey', 'gray', 'lightGrey', 'gray', 'lightGrey', 'gray'],
  ['grey', 'lightGrey', 'grey', 'lightGrey', 'grey', 'lightGrey', 'grey', 'lightGrey'],
  ['lightGrey', 'gray', 'lightGrey', 'gray', 'lightGrey', 'gray', 'lightGrey', 'gray'],
]

const drawBackground= () => {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let x1 = (j * 50)
      let x2 = ((j+1)* 50)
      let y1 = (i * 50)
      let y2 = ((i+1)* 50)
      drawFilledRect(x1, y1, x2, y2, background[j] [i])
    }
  }
  //draw the black border...
  drawFilledRect(400, 0, 800, 800, 'black')
  drawFilledRect(0, 400, 400, 800, 'black')
}


const board = [
  [BLACK_ROOK, BLACK_KNIGHT, BLACK_BISHOP, BLACK_QUEEN, BLACK_KING, BLACK_BISHOP, BLACK_KNIGHT, BLACK_ROOK],
  [BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  [WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN],
  [WHITE_ROOK, WHITE_KNIGHT, WHITE_BISHOP, WHITE_KING, WHITE_QUEEN, WHITE_BISHOP, WHITE_KNIGHT, WHITE_ROOK],
]

const drawBoard = () => {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      drawText(board[j][i], ((i) * 50) + 5, ((j + 1) * 50) - 5, 'black', 64)
    }
  }
}

drawBackground()
drawBoard()

//THIS CODE DOESNT WORK WHY DOESNT THIS WORRRRRK WHAT DID I DOOOOOOO
// everything else works fine
//
//registerOnclick((x, y) => {
//  if (x > 0 && x < 400 && y > 100 && y < 300)
//    drawBackground()
//    drawBoard()
//});
//
//registerOnclick((x, y) => {
//  if (x > 0 && x < 50 && y > 0 && y < 50) {
//    drawBackground()
//    
//    drawFilledRect(0, 0, 50, 400, '#86c4ff')
//    drawFilledRect(0, 0, 400, 50, '#86c4ff')
//    drawFilledRect(50, 0, 50, 50, '#cae5ff')
//    drawFilledRect(150, 0, 50, 50, '#cae5ff')
//    drawFilledRect(250, 0, 50, 50, '#cae5ff')
//    drawFilledRect(350, 0, 50, 50, '#cae5ff')
//    drawFilledRect(0, 50, 50, 50, '#cae5ff')
//    drawFilledRect(0, 150, 50, 50, '#cae5ff')
//    drawFilledRect(0, 250, 50, 50, '#cae5ff')
//    drawFilledRect(0, 350, 50, 50, '#cae5ff')
//
//    drawBoard()
//  } else
//  if (x > 350 && x < 400 && y > 0 && y < 50)
//    drawBackground()
//    
//    drawFilledRect(0, 0, 400, 50, '#86c4ff')
//    drawFilledRect(350, 0, 50, 400, '#86c4ff')
//    drawFilledRect(50, 0, 50, 50, '#cae5ff')
//    drawFilledRect(150, 0, 50, 50, '#cae5ff')
//    drawFilledRect(250, 0, 50, 50, '#cae5ff')
//    drawFilledRect(350, 0, 50, 50, '#cae5ff')
//    drawFilledRect(350, 0, 50, 50, '#cae5ff')
//    drawFilledRect(350, 100, 50, 50, '#cae5ff')
//    drawFilledRect(350, 200, 50, 50, '#cae5ff')
//    drawFilledRect(350, 300, 50, 50, '#cae5ff')
//
//    drawBoard()
//});
