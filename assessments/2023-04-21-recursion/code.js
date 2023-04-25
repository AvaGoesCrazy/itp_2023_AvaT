////////////////////////////////////////////////////////////////
// Write your code here ...

const factorial = (n) =>{
  if (n === 0){
    return n
  } else{
    return n + factorial(n - 1)
  }
}

const fibonacci = (n) =>{
  if (n < 3){
    return n - 1
  } else{
    return fibonacci(n - 2) + fibonacci(n - 1)
    } 
}

const sumSquares = (n) =>{
  if(n === 0){
    return n
  } else{
    return (n * n) + sumSquares(n - 1)
  }
}

const maximum = (a) =>{
  if(a.length === 0){
    return 0
  } else{
    if(a[0] > maximum(a.slice)){
      return a[0]
    } else{
      return maximum(a.slice)
    }
  }
}

////////////////////////////////////////////////////////////////
// Functions you will use in your code. No need to touch these
// or understand these beyond understanding what they do which
// is described in the appropriate questions.

const isLeaf = (o) => typeof o !== 'object' || (!(('left' in o) && ('right' in o)));

const isPrime = (n) => {
  const loop = (f) => f ** 2 > n || (n % f !== 0 && loop(f + 1));
  return n > 1 && loop(2);
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const mod = (n, m) => ((n % m) + m) % m;

const rotate = (char, places) => {
  const lower = char.toLowerCase();
  const i = alphabet.indexOf(lower);
  if (i === -1) {
    return char;
  } else {
    const rotated = alphabet[mod(i + places, alphabet.length)];
    return lower === char ? rotated : rotated.toUpperCase();
  }
}
