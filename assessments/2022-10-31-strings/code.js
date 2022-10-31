/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton and more credit for a skeleton with a
// reasonable argument list. To get full credit you need to write a correct
// function but you can get partial credit for a function that is basically
// correct even if contains small mistakes.

const x = (s) => {
  return ((s.length / 2) - (s.length % 2));
};

const firstHalf = (s, x) => {
  return s - s.substring(x);
};

const secondHalf = (s, x) => {
  return s.substring(x);
};

const upDown = (s) => {
  return s.toUpperCase + s.toLowerCase;
};

const firstFewEveryOther = (s) => {
  return s[0] + s[2] + s[5];
};

const upDownLastCharacter = (s) => {
  return s.substring(s.length - 1).toUpperCase + s.substring(s.length - 1).toLowerCase;
};

const firstAndLast = (s) => {
  return s[0] + s.substring(s.length - 1);
};

const swapFrontAndBack = (s, x) => {
  return s.substring(x) + (s - s.substring(x));
};

const simplePigLatin = (s) => {
  return s.substring(1) + s[0] + 'ay';
};

const randonCharacter = (s) => {
  return s[rand(s.length + 1)];
};

const 