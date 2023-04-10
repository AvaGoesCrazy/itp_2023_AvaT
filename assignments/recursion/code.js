const factorial = (n) =>{
  if(n === 0){
    return true
  } else {
    return n * factorial(n - 1)
  }
}