const add = (n1, n2) =>{
  return n1 + n2
}

const multiply = (n1, n2) =>{
  return n1 * n2
}

const double = (n1, n2) =>{
  if (n2 = 1){
    return n1 * 2
  } else{
    return double(n1, n2 - 1) * 2
  }
}

const triple = (n1, n2) =>{
  if (n2 = 1){
    return n1 * 3
  } else{
    return double(n1, n2 - 1) * 3
  }
}

