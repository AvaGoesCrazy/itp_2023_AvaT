// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.

drawLine(200, 0, 200, 300, 'black', 10)

let i = 0

registerOnclick((x, y, i) => {
  if (i = 0){
    drawText('Y', x - 30, y + 30, 'black', Math.min(width, height) * 0.3);
    i = i + 1
    console.log(i)
  } else {
    drawText('X', x - 30, y + 30, 'black', Math.min(width, height) * 0.3);
    i = i - 1
    console.log(i)
  }
});
