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