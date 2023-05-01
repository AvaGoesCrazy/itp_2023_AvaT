// TO DO:
// - Make snake lose when coliding with self
// - Make score counter
// - let player input directions whenever they want, not just on a timer. (sorta figured that one out...)
// - fix body dissapearing for one turn at the begigning of the game
// - fix colliding with walls resulting in errors instead of a game over
// - allow replaying of the game without needing to reload the page
// - add animations (maybe...)


const countDown = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const snakeHead = [
  ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'y', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n']
];

const apple = [
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false]
];

const board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let speed = 500

let gameStarted = false

const grid = document.querySelector('#grid');

for (let i = 0; i < board.length; i++) {
  for (let n = 0; n < board[0].length; n++) {
    const div = document.createElement('div');
    div.classList.add('box');
    board[i] [n] = div
    grid.append(div);
  }
}

const rgb = (r, g, b) => `rgb(${r}, ${g}, ${b})`;

const makeRed = (element) => {
  element.style.background = rgb(191, 63, 63);
  element.style.color = rgb(255 - 191, 255 - 63, 255 - 63);
};
const makeGreen = (element) => {
  element.style.background = rgb(63, 127, 191);
  element.style.color = rgb(255 - 63, 255 - 127, 255 - 191);
};
const makeBlue = (element) => {
  element.style.background = rgb(63, 63, 191);
  element.style.color = rgb(255 - 63, 255 - 63, 225 - 191);
};
const makeClear = (element) => {
  element.style.background = rgb(63, 191, 63);
  element.style.color = rgb(255 - 63, 255 - 191, 255 - 63);

};


const newApple = () => {
  let canMakeApple = false
  while(!canMakeApple) {
    let randomX = Math.floor(Math.random() * 9)
    let randomY = Math.floor(Math.random() * 9)
    if(countDown[randomY] [randomX] === 0 && snakeHead[randomY] [randomX] === 'n') {
      apple[randomY] [randomX] = true
      canMakeApple = true
      makeRed(board[randomY] [randomX])
    }
  }
}

for(let i = 0; i< 9; i++){
  for(let n = 0; n< 9; n++){
    makeClear(board[i] [n])
  }
}

makeBlue(board[4] [4])
makeGreen(board[5] [4])

//Game starts here:
document.body.onkeydown = (e) => {
  console.log('Game Start!')

  gameStarted = true

  let X = 4
  let Y = 4
  
  let bufferMove = 'ArrowUp'
  let previousMove = 'ArrowDown'

  let turn = 0
  
  let score = 2

  let moveDoneThisTurn = false
  
  newApple()

  makeBlue(board[Y] [X])
  //makeGreen(board[Y+1] [X])

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
    for (let i = 0; i < 9; i++) {
      for (let n = 0; n < 9; n++) {
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
    if(dir === 'ArrowUp') {
      movePart1()
      Y--
      movePart2()
    }
    if(dir === 'ArrowDown') {
      movePart1()
      Y++
      movePart2()
    }
    if(dir === 'ArrowLeft') {
      movePart1()
      X--
      movePart2()
    }
    if(dir === 'ArrowRight') {
      movePart1()
      X++
      movePart2()
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

