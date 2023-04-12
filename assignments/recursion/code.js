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
  //owwww this one makes my brain hurrrttt :(
  if(n2 === 0){
    return n1
  } else{
    return gcd(n2, n1 % n2)
  }
  //nevermind, it wasnt that bad
}

const sum = (ary) =>{
  ary[0] + ary[0]
  return sum(ary)
}

const search = (ary, n) =>{
  if(ary[ary.length - 1] === n){
    return true
  } else{
    ary.slice[ary.length]
    return search (ary, n)
  }
}

const reverseString = (s) =>{
  
}