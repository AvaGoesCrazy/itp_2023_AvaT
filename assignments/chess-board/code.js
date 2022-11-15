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

const drawBackground = () => {
  //BACKGROUND
  drawFilledRect(0, 0, 400, 400, 'lightGrey')
  //ROW 1
  drawFilledRect(0, 0, 50, 50, 'grey')
  drawFilledRect(100, 0, 50, 50, 'grey')
  drawFilledRect(200, 0, 50, 50, 'grey')
  drawFilledRect(300, 0, 50, 50, 'grey')
  //ROW 2
  drawFilledRect(50, 50, 50, 50, 'grey')
  drawFilledRect(150, 50, 50, 50, 'grey')
  drawFilledRect(250, 50, 50, 50, 'grey')
  drawFilledRect(350, 50, 50, 50, 'grey')
  //ROW 3
  drawFilledRect(0, 100, 50, 50, 'grey')
  drawFilledRect(100, 100, 50, 50, 'grey')
  drawFilledRect(200, 100, 50, 50, 'grey')
  drawFilledRect(300, 100, 50, 50, 'grey')
  //ROW 4
  drawFilledRect(50, 150, 50, 50, 'grey')
  drawFilledRect(150, 150, 50, 50, 'grey')
  drawFilledRect(250, 150, 50, 50, 'grey')
  drawFilledRect(350, 150, 50, 50, 'grey')
  //ROW 5
  drawFilledRect(0, 200, 50, 50, 'grey')
  drawFilledRect(100, 200, 50, 50, 'grey')
  drawFilledRect(200, 200, 50, 50, 'grey')
  drawFilledRect(300, 200, 50, 50, 'grey')
  //ROW 6
  drawFilledRect(50, 250, 50, 50, 'grey')
  drawFilledRect(150, 250, 50, 50, 'grey')
  drawFilledRect(250, 250, 50, 50, 'grey')
  drawFilledRect(350, 250, 50, 50, 'grey')
  //ROW 7
  drawFilledRect(0, 300, 50, 50, 'grey')
  drawFilledRect(100, 300, 50, 50, 'grey')
  drawFilledRect(200, 300, 50, 50, 'grey')
  drawFilledRect(300, 300, 50, 50, 'grey')
  //ROW 8
  drawFilledRect(50, 350, 50, 50, 'grey')
  drawFilledRect(150, 350, 50, 50, 'grey')
  drawFilledRect(250, 350, 50, 50, 'grey')
  drawFilledRect(350, 350, 50, 50, 'grey')
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

//IT DOESNT WORK WHY DOESNT THIS WORRRRRK WHAT DID I DOOOOOOO
//registerOnclick((x, y) => {
//  if (x > 0 && x < 400 && y > 100 && y < 300)
//    drawBackground()
//    drawBoard()
//});

//ROOK LEGAL MOVES
registerOnclick((x, y) => {
  if (x > 0 && x < 50 && y > 0 && y < 50) {
    drawBackground()
    
    drawFilledRect(0, 0, 50, 400, '#86c4ff')
    drawFilledRect(0, 0, 400, 50, '#86c4ff')
    drawFilledRect(50, 0, 50, 50, '#cae5ff')
    drawFilledRect(150, 0, 50, 50, '#cae5ff')
    drawFilledRect(250, 0, 50, 50, '#cae5ff')
    drawFilledRect(350, 0, 50, 50, '#cae5ff')
    drawFilledRect(0, 50, 50, 50, '#cae5ff')
    drawFilledRect(0, 150, 50, 50, '#cae5ff')
    drawFilledRect(0, 250, 50, 50, '#cae5ff')
    drawFilledRect(0, 350, 50, 50, '#cae5ff')

    drawBoard()
  } else
  if (x > 350 && x < 400 && y > 0 && y < 50)
    drawBackground()
    
    drawFilledRect(0, 0, 400, 50, '#86c4ff')
    drawFilledRect(350, 0, 400, 400, '#86c4ff')
    drawFilledRect(50, 0, 50, 50, '#cae5ff')
    drawFilledRect(150, 0, 50, 50, '#cae5ff')
    drawFilledRect(250, 0, 50, 50, '#cae5ff')
    drawFilledRect(350, 0, 50, 50, '#cae5ff')
    drawFilledRect(350, 50, 50, 400, '#cae5ff')
    drawFilledRect(350, 150, 50, 400, '#cae5ff')
    drawFilledRect(350, 250, 50, 400, '#cae5ff')
    drawFilledRect(350, 350, 50, 400, '#cae5ff')

    drawBoard()
});
