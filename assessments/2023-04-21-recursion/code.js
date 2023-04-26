////////////////////////////////////////////////////////////////
// Write your code here ...

const factorial = (n) =>{ // almost
  if (n === 0){
    return n
  } else{
    return n + factorial(n - 1)
  }
}

const fibonacci = (n) =>{ // almost
  if (n < 3){
    return n - 1
  } else{
    return fibonacci(n - 2) + fibonacci(n - 1)
    }
}

const sumSquares = (n) =>{ // correct
  if(n === 0){
    return n
  } else{
    return (n * n) + sumSquares(n - 1)
  }
}

const maximum = (a) =>{ // correct
  if(a.length === 0){
    return 0
  } else{
    if(a[0] > maximum(a.slice(1))){
      return a[0]
    } else{
      return maximum(a.slice(1))
    }
  }
}

// uggggh this one really tripped me up last time too.
const treeMap = (t, f) =>{ // something
  if(t.left.isLeaf){
    return f(t.left)
  } else{
    return treeMap(t.left, f)
  }

}

const sumPrimesBelow = (n) =>{ // correct
  if (n === 1){
    return n
  } else{
    if(isPrime(n)){
      return n + sumPrimesBelow(n - 1)
    } else{
      return sumPrimesBelow(n - 1)
    }
  }
}

const nvwls = (s) =>{ // correct
  if (s.length === 0){
    return ''
  } else{
    if(s[0] === 'a' || s[0] === 'e' || s[0] === 'i' || s[0] === 'o' || s[0] === 'u'){
      return '' + nvwls(s.substring(1))
    } else {
      return s[0] + nvwls(s.substring(1))
      }
  }
}

const caesar = (s, k) =>{ // correct
  if(s.length === 0){
    return ''
  } else{
    return rotate(s[0], k) + caesar(s.substring(1), k)
  }
}

const toList = (a) =>{ // pattern
  if(a.length = 0){
    return {first: a[0], rest: null}
  } else{
    return {first: a[0], rest: toList(a.slice(1))}
  }
}

const map = (l, f) =>{ // almost
  if (l.rest === null){
    return {first: f(l.first), rest: null}
  } else{
    return {first: f(l.first), rest: map(l.rest, f)}
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
