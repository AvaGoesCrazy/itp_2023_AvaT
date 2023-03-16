// TO DO:
// - figure out how to make things run in real time

const countDown = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const snakeHead = [
  ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'y', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n']
];

//i think these are gonna be useless unless i can figure out a way to use them
//const X = (e) => {
//  return (e % 10);
//};
//const Y = (e) => {
//  return Math.floor(e / 10);
//};


let gameStarted = 0

document.body.onkeydown = (e) => {
  gameStarted = 1
  let X = 5
  let Y = 5
  
  let bufferMove = ''
  
  let turn = 0
  
  let score  = 0
  

  document.body.onkeydown = (e) => {
    console.log(Date().substring(22, 24))
    if (e.key === 'ArrowUp') {
      console.log('Up!');
      bufferMove = 'up'
    }
    if (e.key === 'ArrowDown') {
      console.log('Down!');
      bufferMove = 'down'
    }
    if (e.key === 'ArrowLeft') {
      console.log('Left!');
      bufferMove = 'left'
    }
    if (e.key === 'ArrowRight') {
      console.log('Right!');
      bufferMove = 'right'
    }
  }

  const addSegment = () => {
    for (let i = 0; i< countDown.length; i++) {
      for (let n = 0; n < countDown.length; n++) {
        if (countDown[i] [n] > 0 ){
          countDown[i] [n] = countDown[i] [n] + 1
        }
      } 
    }
  }

  const removeSegment = () => {
    for (let i = 0; i< countDown.length; i++) {
      for (let n = 0; n < countDown.length; n++) {
        if (countDown[i] [n] > 0 ){
          countDown[i] [n] = countDown[i] [n] - 1
        }
      } 
    }
  }

  const safeMove = () => ((Y++ && X++ < 10) && (Y-- && X-- > -1))

  const collision = (dir) => {

  }

  const move = (dir) => {
    if(dir === 'up' && safeMove()) {
      snakeHead[Y] [X] = 'n'
      Y = Y - 1
      snakeHead[Y] [X] = 'y'
      removeSegment()
    }
    if(dir === 'down' && safeMove()) {
      snakeHead[Y] [X] = 'n'
      Y = Y++
      snakeHead[Y] [X] = 'y'
      removeSegment()
    }
    if(dir === 'left' && safeMove()) {
      snakeHead[Y] [X] = 'n'
      X = X - 1
      snakeHead[Y] [X] = 'y'
      removeSegment()
    }
    if(dir === 'right' && safeMove()) {
      snakeHead[Y] [X] = 'n'
      X = X++
      snakeHead[Y] [X] = 'y'
      removeSegment()
    }
  }

  snakeHead[Y()] [X()] = 'n'
  snakeHead[Y()] [X()] = 'y'

  //theres no way this works... right???
  if (Date().substring(22, 24) > Date().substring(22, 24) - 1) {
    move(bufferMove)
  }
}



//const rgb = (r, g, b) => `rgb(${r}, ${g}, ${b})`;
//
//const makeBlue = (element) => {
//  element.style.background = rgb(0, 100, 255);
//  element.style.color = rgb(255, 155, 0);
//};
//const makeRed = (element) => {
  element.style.background = rgb(255, 0, 0);
  element.style.color = rgb(0, 255, 255);
//};
//const makeGreen = (element) => {
  element.style.background = rgb(0, 255, 0);
  element.style.color = rgb(255, 0, 255);
//};
//
//const grid = document.querySelector('#grid');
//
//for (let i = 0; i < 10 * 10; i++) {
//  const div = document.createElement('div');
//  div.classList.add('box');
//  makeBlue(div);
//
//  const inBounds = (i) => {
//    return 9 >= Y(i) && Y(i) >= 0 && 9 >= X(i) && X(i) >= 0
//  }
//maybe if i define the fucntions here they'll work, that was partially the case but now its still weird
//
//  const clickedNearby = (e) => {
//    return (
//      isMazeClicked[Y(i) + 1][X(i)] === 'y' || 
//      isMazeClicked[Y(i) - 1][X(i)] === 'y' || 
//      isMazeClicked[Y(i)][X(i) + 1] === 'y' || 
//      isMazeClicked[Y(i)][X(i) - 1] === 'y'
//    ) 
//  }
//
//  const greenNearby = (e) => {
//    return (
//      inBounds(maze[Y(i) + 1][X(i)]) === '1' || 
//      inBounds(maze[Y(i) - 1][X(i)]) === '1' || 
//      inBounds(maze[Y(i)][X(i) + 1]) === '1' || 
//      inBounds(maze[Y(i)][X(i) - 1]) === '1'
//    ) 
//  }
//
//This is the stuff that happens when you click on a square
//  div.onclick = (e) => {

// click on a MAZE SQUARE:
//    if (clickedNearby(e) && greenNearby(e) && maze[Y(i)][X(i)] === 1 && isMazeClicked[Y(i)][X(i)] === 'n') {
//      isMazeClicked[Y(i)][X(i)] = 'y';
//      makeGreen(e.target);
//      console.log('you found a maze square!')
//    } else {
//
//click on a BOUNDRY SQUARE:
//      if (maze[Y(i)][X(i)] === 0 && isMazeClicked[Y(i)][X(i)] === 'n') {
//        isMazeClicked[Y(i)][X(i)] = 'y';
//        makeRed(e.target);
//        console.log('you cant click here')
//      } else {
//
// click on an already CLICKED SQUARE:
//        if (isMazeClicked[Y(i)][X(i)] === 'y');
//        console.log('you already clicked here')
//      };
//    };
//  };
//  grid.append(div);
//};