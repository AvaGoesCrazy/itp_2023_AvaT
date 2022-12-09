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

const randomCharacterUpDown = (s) => {
  return s[rand(s.length + 1)].toUppercase + s[rand(s.length + 1)].toLowerCase;
};

//this is the only one im unsure about. i think it works but the repl wasnt really giving me a straight answer
const isAllUpperCase = (s) => {
  if (s - s.toUpperCase() === '')
    return true
}

const sameIgnoringCase = (s, i) => {
  if (s.toUpperCase() - i.toUpperCase() === 0)
    return true
}

const firstName = (s) => {
  return s.substring(0, s.indexOf(' '))
}

const lastName = (s) => {
  return s.substring(s.indexOf(' '))
}

const initials = (s) => {
  return (s[0] + '. ' + s[s.indexOf(' ')+1]).toUpperCase()
}
