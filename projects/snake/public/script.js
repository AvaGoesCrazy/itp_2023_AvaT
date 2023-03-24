// TO DO:
// - Make gui so i can actually see what im doing


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

const apple = [
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

const board = [
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

let speed = 500

let gameStarted = false

const grid = document.querySelector('#grid');

for (let i = 0; i < 10; i++) {
  for (let n = 0; n < 10; n++) {
    const div = document.createElement('div');
    div.classList.add('box');
    board[i] [n] = div
    grid.append(div);
  }
}

const rgb = (r, g, b) => `rgb(${r}, ${g}, ${b})`;

const makeRed = (element) => {
  element.style.background = rgb(255, 0, 0);
  element.style.color = rgb(0, 255, 255);
};
const makeGreen = (element) => {
  element.style.background = rgb(0, 255, 0);
  element.style.color = rgb(255, 0, 255);
};
const makeBlue = (element) => {
  element.style.background = rgb(0, 0, 255);
  element.style.color = rgb(255, 255, 0);
};
const makeClear = (element) => {
  element.style.background = rgb(255, 255, 255);
  element.style.color = rgb(0, 0, 0);
};


const newApple = () => {
  let canMakeApple = false
  while(!canMakeApple) {
    let randomX = Math.floor(Math.random() * 10)
    let randomY = Math.floor(Math.random() * 10)
    if(countDown[randomY] [randomX] === 0 && snakeHead[randomY] [randomX] === 'n') {
      apple[randomY] [randomX] ++
      canMakeApple = true
      makeRed(board[randomY] [randomX])
    }
  }
}

document.body.onkeydown = (e) => {
  console.log('Game Start!')

  gameStarted = true

  let X = 5
  let Y = 5
  
  let bufferMove = 'up'
  
  let turn = 0
  
  let score = 0
  
  newApple()
  makeBlue(board[Y] [X])

  document.body.onkeydown = (e) => {
    if (e.key === 'ArrowUp') {
      bufferMove = 'up'
    }
    if (e.key === 'ArrowDown') {
      bufferMove = 'down'
    }
    if (e.key === 'ArrowLeft') {
      bufferMove = 'left'
    }
    if (e.key === 'ArrowRight') {
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

  const drawSnakeBody = () => {
    for (let i = 0; i< countDown.length; i++) {
      for (let n = 0; n < countDown.length; n++) {
        if (countDown[i] [n] > 0){
          makeGreen(board[i] [n])
        }
        if (countDown[i] [n] === 0 && snakeHead[i] [n] === 'n' && apple[i] [n] === 0){
          makeClear(board[i] [n])
        }
      } 
    }
  }

  const safeMove = () => ((Y++ && X++ < 10) && (Y-- && X-- > -1))

  const movePart1 = () =>{
    snakeHead[Y] [X] = 'n'
    makeClear(board[Y] [X])
  }

  const movePart2 = () =>{
    snakeHead[Y] [X] = 'y'
    countDown[Y] [X] = score

    makeBlue (board[Y] [X])
    if (apple[Y] [X] = 1){
      apple[Y] [X] --
      score ++
      newApple()
      addSegment()
    }
    drawSnakeBody()
    removeSegment()
  }

  const move = (dir) => {
    if(dir === 'up' && safeMove()) {
      movePart1()
      Y--
      movePart2()
    }
    if(dir === 'down' && safeMove()) {
      movePart1()
      Y++
      movePart2()
    }
    if(dir === 'left' && safeMove()) {
      movePart1()
      X--
      movePart2()
    }
    if(dir === 'right' && safeMove()) {
      movePart1()
      X++
      movePart2()
    }
    if(!safeMove()) {
      gameStarted = false
      console.log('Game Over!')
    }
  }

  const doMove = (dir) => {
    if (gameStarted) {
      move(dir)
      console.log(countDown)
    }
  }

  setInterval(() => doMove(bufferMove), speed);
}






//const rgb = (r, g, b) => `rgb(${r}, ${g}, ${b})`;
//
//const makeBlue = (element) => {
//  element.style.background = rgb(0, 100, 255);
//  element.style.color = rgb(255, 155, 0);
//};
//const makeRed = (element) => {
//  element.style.background = rgb(255, 0, 0);
//  element.style.color = rgb(0, 255, 255);
//};
//const makeGreen = (element) => {
//  element.style.background = rgb(0, 255, 0);
//  element.style.color = rgb(255, 0, 255);
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