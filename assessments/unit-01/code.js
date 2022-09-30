// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

// Write your code here ...
let isWeekday;
let isVacation;

const averageWeight = (x, y) => {
  return (x / y);
};

const hypotenuse = (a, b) => {
  return Math.sqrt((a ** 2) + (b ** 2));
};

const maxRadius = (x, y) => {
  if (x > y)
    return (y / 2);
  else
    return (x / 2);
};

const numCircles = (x, y) => {
  return y / (x * 2);
};

const offset = (x, y) => {
  return ((x - y) / 2);
};

const canSleepIn = (isWeekday) => {
  if (isWeekday)
    return false;
  else
    if (isVacation)
      return true;
    else
      return true;
};