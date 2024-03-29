////////////////////////////////////////////////////////////////////////
// Scroll to the bottom to where it says "Write your code here ..." to actually
// write your code. Just above that is a list of Math functions that you might
// find useful. Everything before that you can safely ignore--I am providing
// functions and other constants you may need to use in our code but nothing
// that you need to change even necessarily understand the internals of. You
// will however need to understand how to use these functions and constants as
// described in the questions.

const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

/*
 * Log the object via console.log.
 */
const log = (x) => { console.log(x); }

/*
 * Record an okay object.
 */
const recordOk = (x) => { log(`OK: ${x}`); }

/*
 * Record a not-okay object.
 */
const recordNotOk = (x) => { log(`NOT OK: ${x}`); }

/*
 * Record a meh object.
 */
const recordMeh = (x) => { log(`MEH: ${x}`); }

/*
 * This one is some particular dark magic. Definitely don't worry about
 * what it's doing.
 */
const hash = (s) => {
  return [...JSON.stringify(s)]
    .reduce((hash, c) => ((hash << 5) + hash) + c.codePointAt(0), 5381);
};

/*
 * An arbitrary predicate on numbers you will use in one function.
 */
const isLeet = (n) => n % 1337 === 0;

/*
 * Return a random number between 0, inclusive, and 10,000, exclusive.
 */
const random10k = () => rand(10_000);

/*
 * Return true if the argument is "okay". This implementation treats roughly
 * half of all possible values as okay and the other half as not okay. Which are
 * which is essentially random but is stable.
 */
const isOk = (x) => hash(JSON.stringify(x)) % 2 == 0;

/*
 * Return true if the argument is "meh".
 */
const isMeh = (x) => !isOk(x) && hash(JSON.stringify(x)) % 3 == 0;

/*
 * Record a pair.
 */
//const pair = (a, b) => {
//  log(`pair: ${a},${b}`);
//};

////////////////////////////////////////////////////////////////////////
// For your reference, here are some functions and constants from Math
// that you might find useful

// Math.PI - a constant giving the closest approximation of π available
// Math.abs(n) - a function that computes the absolute value of its argument
// Math.ceil(n) - a function that rounds its argument up to the nearest integer
// Math.floor(n) - a function that rounds its argument down to the nearest integer
// Math.max(a, b) - a function that returns the largest of its arguments
// Math.min(a, b) - a function that returns the smallest of its arguments
// Math.sqrt(n) - a function that returns the square root of its argument

////////////////////////////////////////////////////////////////////////
// Write your code here ...


//STRINGS

const firstFewEveryOther = (s) => s[0] + s[2] + s[4];

const firstHalf = (s) => s.substring(0, (s.length / 2));

const secondHalf = (s) => s.substring(s.length / 2);

const swapFrontAndBack = (s) => s.substring(s.length / 2) + s.substring(0, (s.length / 2));

const upDown = (s) => s.toUpperCase() + s.toLowerCase();

const upDownLastCharacter = (s) => s[s.length - 1].toUpperCase() + s[s.length - 1].toLowerCase();

const firstAndLast = (s) => s[0] + s[s.length - 1];

const simplePigLatin = (s, x) => s.substring(x - 1) + s.substring(0, x - 1) + 'ay';

const randomCharacter = (s) => s[rand(s.length)];

const randomCharacterUpDown = (s) => {
  let n = rand(s.length);
  return s[n].toUpperCase() + s[n].toLowerCase();
}

const isAllUpperCase = (s) => s.toUpperCase() === s;

const sameIgnoringCase = (s, i) => s.toLowerCase() === i.toLowerCase();

const firstName = (s) => s.substring(0, s.indexOf(' '));

const lastName = (s) => s.substring(s.indexOf(' ') + 1);

const initials = (s) => s[0] + s[s.indexOf(' ') + 1]

const upToX = (s) => s.substring(0, s.indexOf('x'))

const charactersAround = (s, i) => s[i - 1] + s[i + 1]

const middle = (s) => s.substring(s.length / 4, (s.length / 4) * 3)

const pair = (s1, s2) => s1 + 'and' + s2

//ARRAYS

const allTheSame = (ary) => (ary[0] === ary[1] && ary[0] === ary[2]);

const extractColumn = (ary, i) => {
  let ary2 = ['', '', '']
  ary2[0] = ary[0] [i]
  ary2[1] = ary[1] [i]
  ary2[2] = ary[2] [i]
  return ary;
}

//const fillTimesTable = (ary) => {
//  for (let i = 0; i < ary.length; i++)
//    for (let n = 0; n < ary.length; n++)
//      if (i - 1 === 0) {
//        ary[i - 1] [n - 1] = i - 1
//      } else {
//        if (n - 1 === 0) {
//          ary[i - 1] [n = 1] = n - 1
//        } else {
//          ary[i - 1] [n - 1] = ary[i - 1] [n] * ary [i] [n - 1]
//        }
//      }
//  return ary
//}
//
//const sums = (n) => {
//  let ary = [0]
//  let x = 0
//  for (let i = 0; i < n; i++)
//    x = x + (i - 1)
//    ary.push(x)
//  return ary
//}

//OBJECTS 

const isSamePoint = (obj1, obj2) => obj1.x === obj2.x && obj1.y === obj2.y;

const area = (obj) => obj.width * obj.height;

const totalWithTip = (obj, n) => {
  let obj2 = {subtotal:0, tip:0, total:0};
  obj2.subtotal = obj.subtotal;
  obj2.tip = obj.subtotal * n;
  obj2.total = obj.subtotal * (n + 1);
};

const higherPaid = (obj1, obj2) => {
  if (obj1.salary - obj2.salary < 0){
    return obj1;
  } else {
    return obj2;
  };
};