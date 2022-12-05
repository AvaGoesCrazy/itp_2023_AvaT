// STRING USED FOR REPL TESTING 'burger'

const upTOx = (s) => s.substring(0, s.indexFf('x'));

const charactersAround = (s, i) => s[s.indexOf(i) - 1] + s[s.indexOf(i) + 1];

const middle = (s) => s.substring(s.length / 4, s.length - (s.length / 4));

const pair = (s, i) => s + ' and ' + i

const containsX = (s) => {
  if (s.indexOf('x' === -1)) {
    return false
  } else
    return true
}