// stock values:
let x = 2;
let y = 1;
let z = 3;

// manhattan distance and euclidean distance values:
let x1 =43;
let y1 =76;
let x2 =23;
let y2 =98;

// equations or funtions, whatever you call em...

// Addition
const add = (x, y) => {
  return x + y;
};

// Subtraction
const subtract = (x, y) => {
  return x - y;
};

// Multiplication
const multiply = (x, y) => {
  return x * y;
};

// Division
const divide = (x, y) => {
  return x / y;
};

// Remainder
const mod = (x, y) => {
  return x % y;
};

// Average of two Numbers
const averageOfTwo = (x, y) => {
  return (x + y) / 2;
};

// Average of three Numbers
const averageOfThree = (x, y, z) => {
  return (x + y + z) / 3;
};

// Number Line Distance
const distance = (x, y) => {
  return Math.abs(x - y);
};

// Manhattan Distance
const manhattanDistance = (x1, y1, x2, y2) => {
  return Math.abs(x1 - x2)+ Math.abs(y1 - y2);
};

// Euclidean Distance
const euclideanDistance = (x1, y1, x2, y2) => {
  return Math.sqrt(((x1 - x2)^2) + ((y1 - y2)^2));
};