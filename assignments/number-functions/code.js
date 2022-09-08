let x = 2;
let y = 1;
let z = 3

let x1 =43
let y1 =76
let x2 =23
let y2 =98

const add = (x, y) => {
  return x + y;
};

const subtract = (x, y) => {
  return x - y;
};

const multiply = (x, y) => {
  return x * y;
};

const divide = (x, y) => {
  return x / y;
};

const mod = (x, y) => {
  return x % y;
};

const averageOfTwo = (x, y) => {
  return (x + y) / 2;
};

const averageOfThree = (x, y, z) => {
  return (x + y + z) / 3;
};

const distance = (x, y) => {
  return Math.abs(x - y);
};

const manhattanDistance = (x1, y1, x2, y2) => {
  return Math.abs(x1 - x2)+ Math.abs(y1 - y2);
};

const euclideanDistance = (x1, y1, x2, y2) => {
  return (x1 - x2)^2 + (y1 - y2)^2;
};