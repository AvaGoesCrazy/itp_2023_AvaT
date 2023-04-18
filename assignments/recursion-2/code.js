
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

//this ones kinda scuffed but its reacursive and it works
const deleteXs = (s) =>{
  if (s.length === 0){
    return ''
  }
  if (s.length === 1 && !s[0] === 'x'){
    return s[0]
  }
  if (s[0] === 'x'){
    return deleteXs(s.substring(1))
  } else{
    return s[0] + deleteXs(s.substring(1))
  }
}

const countXs = (s) =>{
  if (s === ''){
    return 0
  } else{
    if (s[0] === 'x'){
      return countXs(s.substring(1)) + 1
    } else{
      return countXs(s.substring(1))
    }
  }
}

const maximum = (a) =>{
  if (a === []){
    return 0
  } else{
    if (a[0] > maximum(a.slice(1))){
      return a[0]
    } else{
      return maximum(a.slice(1))
    }
  }
}