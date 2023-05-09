
const makePiece = (typ, clr, x, y) =>{
  let piece = {type: typ, color: clr, x: x, y: y}
  return piece
}

//type: name of piece type
//color: 0 = black, 1 = white
//x & y: coords


const startPieces = () =>{
  for(let j = 0; j<2; j++){
    for(let i = 0; i<10; i++){
      makePiece(pawn, j, i, 1)
    }
    for(let i = -1; i<1; i++){
      makePiece(rook, j, i * 9, 0)
    }
    for(let i = -1; i<1; i++){
      makePiece(rook, j, i * 9, 9)
    }
  }
}

const startTurn = (e) =>{

}

const grid = document.querySelector('#grid');

for (let i = 0; i < 10; i++) {
  for (let n = 0; n < 10; n++) {
    const div = document.createElement('div');
    div.classList.add('box');
    grid.append(div);
    div.onclick = (e) => startTurn(e.target)
  }
}