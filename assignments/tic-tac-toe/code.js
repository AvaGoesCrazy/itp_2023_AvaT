// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.

drawLine(100, 0, 100, 300, 'black', 10)
drawLine(200, 0, 200, 300, 'black', 10)
drawLine(0, 100, 300, 100, 'black', 10)
drawLine(0, 200, 300, 200, 'black', 10)

let pTurn = 0

const ticTacToe = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

//WIN DETECTION DOES NOT WORK YET
//const threeInARow = (ticTacToe) => {
//  if ((ticTacToe [0] [0] && ticTacToe [0] [1] && ticTacToe [0] [2] === 'x') || (ticTacToe [0] [0] && ticTacToe [0] [1] && ticTacToe [0] [2] === 'o')){
//    drawLine (50, 50, 250, 50 ,'black' , 10)
//  } else
//      if ((ticTacToe [1] [0] && ticTacToe [1] [1] && ticTacToe [1] [2] === 'x') || (ticTacToe [1] [0] && ticTacToe [1] [1] && ticTacToe [1] [2] === 'o')){
//      drawLine (50, 150, 250, 150 ,'black' , 10)
//      } else
//          if((ticTacToe [2] [0] && ticTacToe [2] [1] && ticTacToe [2] [2] === 'x') || (ticTacToe [2] [0] && ticTacToe [2] [1] && ticTacToe [2] [2] === 'o')){
//          drawLine (50, 250, 250, 250 ,'black' , 10)
//         }
//              
//}

registerOnclick((x, y) => {
  if (x > 0 && x < 100 && y > 0 && y < 100)
    if (ticTacToe [0] [0] !== 'x' && ticTacToe [0] [0] !== 'o'){
      if (pTurn === 0) {
        drawText('X', 25, 60, 'red', Math.min(width, height) * 0.2);
        pTurn = pTurn + 1
        ticTacToe[0][0] = 'x'
        console.log(pTurn)
        console.log(ticTacToe)
      } else {
        drawText('O', 25, 60, 'blue', Math.min(width, height) * 0.2);
        pTurn = pTurn - 1
        ticTacToe[0][0] = 'o'
        console.log(pTurn)
        console.log(ticTacToe)
      }
    }
  if (x > 100 && x < 200 && y > 0 && y < 100)
    if (ticTacToe [0] [1] !== 'x' && ticTacToe [0] [1] !== 'o'){
      if (pTurn === 0) {
        drawText('X', 125, 60, 'red', Math.min(width, height) * 0.2);
        pTurn = pTurn + 1
        ticTacToe[0][1] = 'x'
        console.log(pTurn)
        console.log(ticTacToe)
      } else {
        drawText('O', 125, 60, 'blue', Math.min(width, height) * 0.2);
        pTurn = pTurn - 1
        ticTacToe[0][1] = 'o'
        console.log(pTurn)
        console.log(ticTacToe)
      }
    }
  if (x > 200 && x < 300 && y > 0 && y < 100)
    if (ticTacToe [0] [2] !== 'x' && ticTacToe [0] [2] !== 'o'){
      if (pTurn === 0) {
        drawText('X', 225, 60, 'red', Math.min(width, height) * 0.2);
        pTurn = pTurn + 1
        ticTacToe[0][2] = 'x'
        console.log(pTurn)
        console.log(ticTacToe)
      } else {
        drawText('O', 225, 60, 'blue', Math.min(width, height) * 0.2);
        pTurn = pTurn - 1
        ticTacToe[0][2] = 'o'
        console.log(pTurn)
        console.log(ticTacToe)
      }
    }
  if (x > 0 && x < 100 && y > 100 && y < 200)
    if (ticTacToe [1] [0] !== 'x' && ticTacToe [1] [0] !== 'o'){
      if (pTurn === 0) {
        drawText('X', 25, 160, 'red', Math.min(width, height) * 0.2);
        pTurn = pTurn + 1
        ticTacToe[1][0] = 'x'
        console.log(pTurn)
        console.log(ticTacToe)
      } else {
        drawText('O', 25, 160, 'blue', Math.min(width, height) * 0.2);
        pTurn = pTurn - 1
        ticTacToe[1][0] = 'o'
        console.log(pTurn)
        console.log(ticTacToe)
      }
    }
  if (x > 100 && x < 200 && y > 100 && y < 200)
    if (ticTacToe [1] [1] !== 'x' && ticTacToe [1] [1] !== 'o'){
      if (pTurn === 0) {
        drawText('X', 125, 160, 'red', Math.min(width, height) * 0.2);
        pTurn = pTurn + 1
        ticTacToe[1][1] = 'x'
        console.log(pTurn)
        console.log(ticTacToe)
      } else {
        drawText('O', 125, 160, 'blue', Math.min(width, height) * 0.2);
        pTurn = pTurn - 1
        ticTacToe[1][1] = 'o'
        console.log(pTurn)
        console.log(ticTacToe)
      }
    }
  if (x > 200 && x < 300 && y > 100 && y < 200)
    if (ticTacToe [1] [2] !== 'x' && ticTacToe [1] [2] !== 'o'){
      if (pTurn === 0) {
        drawText('X', 225, 160, 'red', Math.min(width, height) * 0.2);
        pTurn = pTurn + 1
        ticTacToe[1][2] = 'x'
        console.log(pTurn)
        console.log(ticTacToe)
      } else {
        drawText('O', 225, 160, 'blue', Math.min(width, height) * 0.2);
        pTurn = pTurn - 1
        ticTacToe[1][2] = 'o'
        console.log(pTurn)
        console.log(ticTacToe)
      }
    }
  if (x > 0 && x < 100 && y > 200 && y < 300)
    if (ticTacToe [2] [0] !== 'x' && ticTacToe [2] [0] !== 'o'){
      if (pTurn === 0) {
        drawText('X', 25, 260, 'red', Math.min(width, height) * 0.2);
        pTurn = pTurn + 1
        ticTacToe[2][0] = 'x'
        console.log(pTurn)
        console.log(ticTacToe)
      } else {
        drawText('O', 25, 260, 'blue', Math.min(width, height) * 0.2);
        pTurn = pTurn - 1
        ticTacToe[2][0] = 'o'
        console.log(pTurn)
        console.log(ticTacToe)
      }
    }
  if (x > 100 && x < 200 && y > 200 && y < 300)
    if (ticTacToe [2] [1] !== 'x' && ticTacToe [2] [1] !== 'o'){
      if (pTurn === 0) {
        drawText('X', 125, 260, 'red', Math.min(width, height) * 0.2);
        pTurn = pTurn + 1
        ticTacToe[2][1] = 'x'
        console.log(pTurn)
        console.log(ticTacToe)
      } else {
        drawText('O', 125, 260, 'blue', Math.min(width, height) * 0.2);
        pTurn = pTurn - 1
        ticTacToe[2][1] = 'o'
        console.log(pTurn)
        console.log(ticTacToe)
      }
    }
  if (x > 200 && x < 300 && y > 200 && y < 300)
    if (ticTacToe [2] [2] !== 'x' && ticTacToe [2] [2] !== 'o'){
      if (pTurn === 0) {
        drawText('X', 225, 260, 'red', Math.min(width, height) * 0.2);
        pTurn = pTurn + 1
        ticTacToe[2][2] = 'x'
        console.log(pTurn)
        console.log(ticTacToe)
      } else {
        drawText('O', 225, 260, 'blue', Math.min(width, height) * 0.2);
        pTurn = pTurn - 1
        ticTacToe[2][2] = 'o'
        console.log(pTurn)
        console.log(ticTacToe)
      }
    }
  threeInARow (ticTacToe)
});




//OLD CODE NO LONGER BEING USED!!!
//registerOnclick((x, y) => {
//  if (pTurn === 0){
//    drawText('O', x - 30, y + 30, 'black', Math.min(width, height) * 0.2);
//    pTurn = pTurn + 1
//    console.log(pTurn)
//  } else {
//    drawText('X', x - 30, y + 30, 'black', Math.min(width, height) * 0.2);
//    pTurn = pTurn - 1
//    console.log(pTurn)
//  }
//});
