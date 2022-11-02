const WHITE_KING   = '♔';
const WHITE_QUEEN  = '♕';
const WHITE_ROOK   = '♖';
const WHITE_BISHOP = '♗';
const WHITE_KNIGHT = '♘';
const WHITE_PAWN   = '♙';
const BLACK_KING   = '♚';
const BLACK_QUEEN  = '♛';
const BLACK_ROOK   = '♜';
const BLACK_BISHOP = '♝';
const BLACK_KNIGHT = '♞';
const BLACK_PAWN   = '♟';


// Example of drawing one of the pieces
//drawText(WHITE_KING, width/2, height/2, 'black', 64);


const board = [
  [BLACK_ROOK,BLACK_KNIGHT,BLACK_BISHOP,BLACK_QUEEN,BLACK_KING,BLACK_BISHOP,BLACK_KNIGHT,BLACK_ROOK],
  [BLACK_PAWN,BLACK_PAWN,BLACK_PAWN,BLACK_PAWN,BLACK_PAWN,BLACK_PAWN,BLACK_PAWN,BLACK_PAWN],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  [WHITE_PAWN,WHITE_PAWN,WHITE_PAWN,WHITE_PAWN,WHITE_PAWN,WHITE_PAWN,WHITE_PAWN,WHITE_PAWN],
  [WHITE_ROOK,WHITE_KNIGHT,WHITE_BISHOP,WHITE_KING,WHITE_QUEEN,WHITE_BISHOP,WHITE_KNIGHT,WHITE_ROOK],
]

//SECTION 1
drawFilledRect(0, 0, 50, 50, 'black')
drawFilledRect(100, 0, 50, 50, 'black')
drawFilledRect(200, 0, 50, 50, 'black')
drawFilledRect(300, 0, 50, 50, 'black')
drawFilledRect(50, 50, 50, 50, 'black')
drawFilledRect(150, 50, 50, 50, 'black')
drawFilledRect(250, 50, 50, 50, 'black')
drawFilledRect(350, 50, 50, 50, 'black')
//SECTION 2
drawFilledRect(0, 100, 50, 50, 'black')
drawFilledRect(100, 100, 50, 50, 'black')
drawFilledRect(200, 100, 50, 50, 'black')
drawFilledRect(300, 100, 50, 50, 'black')
drawFilledRect(50, 150, 50, 50, 'black')
drawFilledRect(150, 150, 50, 50, 'black')
drawFilledRect(250, 150, 50, 50, 'black')
drawFilledRect(350, 150, 50, 50, 'black')
//SECTION 3
drawFilledRect(0, 200, 50, 50, 'black')
drawFilledRect(100, 200, 50, 50, 'black')
drawFilledRect(200, 200, 50, 50, 'black')
drawFilledRect(300, 200, 50, 50, 'black')
drawFilledRect(50, 250, 50, 50, 'black')
drawFilledRect(150, 250, 50, 50, 'black')
drawFilledRect(250, 250, 50, 50, 'black')
drawFilledRect(350, 250, 50, 50, 'black')
//SECTION 4
drawFilledRect(0, 300, 50, 50, 'black')
drawFilledRect(100, 300, 50, 50, 'black')
drawFilledRect(200, 300, 50, 50, 'black')
drawFilledRect(300, 300, 50, 50, 'black')
drawFilledRect(50, 350, 50, 50, 'black')
drawFilledRect(150, 350, 50, 50, 'black')
drawFilledRect(250, 350, 50, 50, 'black')
drawFilledRect(350, 350, 50, 50, 'black')


drawText(WHITE_KING, width/2, height/2, 'white', 64);