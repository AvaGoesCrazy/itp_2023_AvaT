const factorial = (n) =>{
  if(n === 0){
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

const triangular = (n) =>{
  return n + trangular(n - 1)
}