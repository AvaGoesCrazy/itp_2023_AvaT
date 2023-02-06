

const rgb = (r, g, b) => `rgb(${r}, ${g}, ${b})`;

const mazeColor = (element) => {
  element.style.background = rgb(r, g, b);
  element.style.color = rgb(0, 0, 255);
};


const maze = [
  [0,1,1,1,0,0,0,0,0,0],
  [0,1,0,1,0,0,0,0,0,0],
  [0,1,0,1,0,0,1,1,1,0],
  [0,1,0,1,1,1,1,0,1,0],
  [0,1,0,0,0,0,0,0,1,0],
  [0,1,1,1,0,1,1,1,1,0],
  [0,0,0,1,0,1,0,0,0,0],
  [1,1,0,1,0,1,0,0,1,1],
  [0,1,1,1,0,1,1,0,1,0],
  [0,0,0,0,0,0,1,1,1,0]
]

let isMazeClicked = [
  ['n','n','n','n','n','n','n','n','n','n'],
  ['n','n','n','n','n','n','n','n','n','n'],
  ['n','n','n','n','n','n','n','n','n','n'],
  ['n','n','n','n','n','n','n','n','n','n'],
  ['n','n','n','n','n','n','n','n','n','n'],
  ['n','n','n','n','n','n','n','n','n','n'],
  ['n','n','n','n','n','n','n','n','n','n'],
  ['n','n','n','n','n','n','n','n','n','n'],
  ['n','n','n','n','n','n','n','n','n','n'],
  ['n','n','n','n','n','n','n','n','n','n']
]

const tileType = (x, y) =>{
  return maze[y] [x]
}

const isClicked = (x, y) =>{
  if (isMazeClicked[y] [x] == 'y'){
    return true
  } else {
    return false
  }
}

const grid = document.querySelector('#grid');

for (let i = 0; i < 10 * 10; i++) {
  const div = document.createElement('div');
  div.classList.add('box');
  mazeColor(div);
  div.onclick = (e) => mazeColor(e.target);
  grid.append(div);
}

