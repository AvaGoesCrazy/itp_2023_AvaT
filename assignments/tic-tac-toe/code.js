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

let i = 0

const ticTacToe = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

registerOnclick((x, y)) => {
  if (x > 0 && x < 100 && y > 0 && y < 100)
    if (i === 0){
      drawText('O', 30, 30, 'black', Math.min(width, height) * 0.2);
    }
});

//registerOnclick((x, y) => {
//  if (i === 0){
//    drawText('O', x - 30, y + 30, 'black', Math.min(width, height) * 0.2);
//    i = i + 1
//    console.log(i)
//  } else {
//    drawText('X', x - 30, y + 30, 'black', Math.min(width, height) * 0.2);
//    i = i - 1
//    console.log(i)
//  }
//});
