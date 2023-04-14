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
    return ary[0] + sum(ary.slice(1))
  }
}

const search = (ary, n) =>{
  if(ary[0] === n){
    return true
  } else{ if(ary.length === 0){
            return false
          } else{
            return search(ary.slice(1), n)
          }
    
  }
}

const reverseString = (s) =>{
    if (s.length === 1){
      return s[0]
    } else{
      return reverseString(s.substring(1)) + s[0]
    }
}



const treeMap = (t, f) =>{
  if (isLeaf(t)){
    return f(t)
  } else{
    return {left:treeMap(t.left, f), right:treeMap(t.right, f)}
  }
}