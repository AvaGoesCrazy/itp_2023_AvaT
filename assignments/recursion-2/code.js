
const add = (n1, n2) =>{
  if (n2 === 0){
    return n1 + n2
  } else{
      return 1 + add(n1, n2 - 1)
    }
}

const multiply = (n1, n2) =>{
  if (n2 === 1){
    return n1
  } else{
    if (n2 === 0){
      return 0
    } else{
        return n1 + multiply(n1, n2 - 1)
      }
    }
}


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

const deleteXs = (s) =>{
  if (s[0] === 'x'){
    return deleteXs(s.substring(1))
  } else{
    return deleteXs(s.substring(0))
  }
}