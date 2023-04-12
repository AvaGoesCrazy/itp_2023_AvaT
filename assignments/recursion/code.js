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

const gcd = (n1, n2) =>{
  if(n2 === 0){
    return n1
  } else{
    return gcd(n2, n1 % n2)
  }
}

const sum = (ary) =>{
  if(ary.length === 1){
    return ary[0]
  } else {
    return sum(ary.slice(1)) + ary[ary.length - 1]
  }
}

const search = (ary, n) =>{
  if(ary[ary.length - 1] === n){
    return true
  } else{
    ary.slice(ary.length - 1)
    return search(ary, n)
  }
}

const reverseString = (s) =>{
  
}