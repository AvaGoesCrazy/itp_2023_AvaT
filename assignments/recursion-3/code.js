const product = (n) =>{
  if (n.length === 1) {
    return n[0]
  } else{
    if (n.length === 0){
      return 1
    } else{
        return n[0] * product(n.slice(1))
      }
    }
}

const sumSquares = (n) =>{
  if (n === 1){
    return n
  } else{
    return (n ** 2) + sumSquares(n - 1)
  }
}