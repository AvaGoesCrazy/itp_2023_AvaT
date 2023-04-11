const factorial = (n) =>{
  if(n === 0){
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

const triangular = (n) =>{
  if(n === 0){
    return 0
  } else {
    return n + triangular(n - 1)
  }
}

const fibonacci = (n) =>{
  if(n === 0){
    return 0
  }
  if(n === 1){
    return 1
  }
  if(n > 1){
    return fibonacci(n - 2) + fibonacci(n - 1)
  }
}

const gcd = (n) =>{
  
}