// TO DO:
// - Make snake lose when coliding with self
// - Make score counter
// - let player input directions whenever they want, not just on a timer.


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
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false]
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
      apple[randomY] [randomX] = true
      canMakeApple = true
      makeRed(board[randomY] [randomX])
    }
  }
}


//Game starts here:
document.body.onkeydown = (e) => {
  console.log('Game Start!')

  gameStarted = true

  let X = 5
  let Y = 5
  
  let bufferMove = 'ArrowUp'
  let previousMove = 'ArrowDown'

  let turn = 0
  
  let score = 2

  let moveDoneThisTurn = false
  
  newApple()
  makeBlue(board[Y] [X])

  for(let i = 0; i< 10; i++){
    for(let n = 0; n< 10; n++){
      makeClear(board[Y] [X])
    }
  }

  document.body.onkeydown = (e) => {
    bufferMove = e.key
    if(bufferMove !== e.key){
      doMove(bufferMove)
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
    for (let i = 0; i < 10; i++) {
      for (let n = 0; n < 10; n++) {
        if (countDown[i] [n] > 0){
          makeGreen(board[i] [n])
        }
        if (countDown[i] [n] === 0 && snakeHead[i] [n] === 'n' && !apple[i] [n]){
          makeClear(board[i] [n])
        }
      } 
    }
  }

  const getOpposite = (i) => {
    if (i === 'ArrowUp'){
      return 'ArrowDown'
    }
    if (i === 'ArrowDown'){
      return 'ArrowUp'
    }
    if (i === 'ArrowLeft'){
      return 'ArrowRight'
    }
    if (i === 'ArrowRight'){
      return 'ArrowLeft'
    }
  }

  const safeMove = () => {(
    Y++ < 10 && 
    X++ < 10 && 
    Y-- > -1 && 
    X-- > -1
  ) && countDown[X] [Y] === 0
  }

  //const notGoingBack = () => {
  //  if(bufferMove === )
  //}

  //When the snake moves:
  const movePart1 = () =>{
    snakeHead[Y] [X] = 'n'
    makeClear(board[Y] [X])
  }

  const movePart2 = () =>{
    snakeHead[Y] [X] = 'y'
    countDown[Y] [X] = score

    if (apple[Y] [X]){
      apple[Y] [X] = false
      score ++
      addSegment()
      newApple()
    }

    drawSnakeBody()
    makeBlue (board[Y] [X])
    removeSegment()
  }

  const move = (dir) => {
    if(dir === 'ArrowUp' && safeMove()) {
      movePart1()
      Y--
      movePart2()
    }
    if(dir === 'ArrowDown' && safeMove()) {
      movePart1()
      Y++
      movePart2()
    }
    if(dir === 'ArrowLeft' && safeMove()) {
      movePart1()
      X--
      movePart2()
    }
    if(dir === 'ArrowRight' && safeMove()) {
      movePart1()
      X++
      movePart2()
    }
    if(!safeMove()) {
      gameStarted = false
      console.log('Game Over!')
    }
  }

  //this thing just makes sure the game is actuallly stared when doing moves. Idk if it actually works how its suposed to though...
  const doMove = (dir) => {
    if (gameStarted) {
      move(dir)
    }
  }
  
  // does a move every [speed * .001] of a second:
  setInterval(() => doMove(bufferMove), speed);
}

