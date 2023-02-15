
const maze = [
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
  [0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 0, 0, 1, 1],
  [0, 1, 1, 1, 0, 1, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 0]
];

const isMazeClicked = [
  ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
  ['y', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
  ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n']
];

const safeReturn = (x, y) =>{
  return !(x > 9 || x < 0 || y > 9 || y < 0)
}

const X = (e) => {
  return (e % 10);
};
const Y = (e) => {
  return Math.floor(e / 10);
};

// not sure if you're supposed to write code like this below but it makes it a little easier to understand atm
//const clickedNearby = (e) => {
//  return (isMazeClicked[Y(i) + 1] [X(i)] || isMazeClicked[Y(i) -1] [X(i)] || isMazeClicked[Y(i)] [X(i) + 1] || isMazeClicked[Y(i)] [X(i) + 1]) === 'n' 
//}
//
//const greenNearby = (e) => {
//  return (maze[Y(i) + 1] [X(i)] || maze[Y(i) -1] [X(i)] || maze[Y(i)] [X(i) + 1] || maze[Y(i)] [X(i) + 1]) === '1' 
//}


const rgb = (r, g, b) => `rgb(${r}, ${g}, ${b})`;

const makeBlue = (element) => {
  element.style.background = rgb(0, 100, 255);
  element.style.color = rgb(255, 155, 0);
};

const makeRed = (element) => {
  element.style.background = rgb(255, 0, 0);
  element.style.color = rgb(0, 255, 255);
};

const makeGreen = (element) => {
  element.style.background = rgb(0, 255, 0);
  element.style.color = rgb(255, 0, 255);
};

const grid = document.querySelector('#grid');

for (let i = 0; i < 10 * 10; i++) {
  const div = document.createElement('div');
  div.classList.add('box');
  makeBlue(div);

  const inBounds = (i) => {
    return 9 >= Y(i) && Y(i) >= 0 && 9 >= X(i) && X(i) >= 0
  }
//maybe if i define the fucntions here they'll work, that was partially the case but now its still weird

  const clickedNearby = (e) => {
    safeReturn()
    return (
      isMazeClicked[Y(i) + 1][X(i)] === 'y' || 
      isMazeClicked[Y(i) - 1][X(i)] === 'y' || 
      isMazeClicked[Y(i)][X(i) + 1] === 'y' || 
      isMazeClicked[Y(i)][X(i) + 1] === 'y'
    ) 
  }

  const greenNearby = (e) => {
    return (
      inBounds(maze[Y(i) + 1][X(i)]) === '1' || 
      inBounds(maze[Y(i) - 1][X(i)]) === '1' || 
      inBounds(maze[Y(i)][X(i) + 1]) === '1' || 
      inBounds(maze[Y(i)][X(i) + 1]) === '1'
    ) 
  }

//This is the stuff that happens when you click on a square
  div.onclick = (e) => {

// click on a MAZE SQUARE:
    if (clickedNearby(e) && greenNearby(e) && maze[Y(i)][X(i)] === 1 && isMazeClicked[Y(i)][X(i)] === 'n') {
      isMazeClicked[Y(i)][X(i)] = 'y';
      makeGreen(e.target);
      console.log('you found a maze square!')
    } else {

//click on a BOUNDRY SQUARE:
      if (maze[Y(i)][X(i)] === 0 && isMazeClicked[Y(i)][X(i)] === 'n') {
        isMazeClicked[Y(i)][X(i)] = 'y';
        makeRed(e.target);
        console.log('you cant click here')
      } else {

// clcik on an already CLICKED SQUARE:
        if (isMazeClicked[Y(i)][X(i)] === 'y');
        console.log('you already clicked here')
      };
    };
  };
  grid.append(div);
};