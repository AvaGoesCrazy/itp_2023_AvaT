const yesIfEven = (x) => {
  if ((x % 2) === 0) {
    return 'yes'
  } else {
    return 'no'
  }
}

const countXs = (s, n) => {
  for (let i = 0; i < s.length; i++)
    if (s.substring(i) === 'x') {
      n++
    }
  return n
}

//WHAT EMIT FUCNTION I DON'T SEE AN EMIT FUNTION??
const timesTable = (n) => {
  for (let x = 0; x < n; x++)
    for (let y = 0; y < n; y++)
      emit(x, y, x * y)
}
//I THINK THIS WOULD BE CORRECT IF I HAD EMIT SO HOPEFULLY ITS GOOD :)

const containsX = (s) => {
  if (s.indexOf('x') !== -1) {
    return true
  } else {
    return false
  }
}

const sumSquares = (n) => {
  for (i = 0; i < n; i++)
    i = i + (i**2)
}