
const add = (n1, n2) =>{
  if (n2 === 0){
    return n1 + n2
  } else{
      return 1 + add(n1, n2 - 1)
    }
}

const multiply = (n1, n2) =>{
  return n1 * n2
}
//not sure how to make these two recursive


const double = (n1, n2) =>{
  if (n2 === 1){
    return n1 * 2
  } else{ 
    if (n2 === 0){
    return n1
    } else{
    return double(n1, n2 - 1) * 2
    }
  }
}

const triple = (n1, n2) =>{
  if (n2 === 1){
    return n1 * 3
  } else{ 
    if (n2 === 0){
    return n1
    } else{
    return triple(n1, n2 - 1) * 3
    }
  }
}

const power = (n1, n2) =>{
    if (n2 === 1){
    return n1
  } else{ 
    if (n2 === 0){
    return 1
    } else{
    return power(n1, n2 - 1) * n1
    }
  }
}