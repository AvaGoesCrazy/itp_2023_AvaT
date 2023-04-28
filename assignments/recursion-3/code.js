//ifs and elsifs for easy copypasting:

  if (1){

  } else{

  }

//-----

  if (1){

  } else{
    if(1){

    } else{

    }
  }

//------------------------


const product = (n) =>{
  if (n.length === 1) {
    return n[0]
  } else{
    if (n.length === 0){
      return 1
    } else{
        return n[0] * product(n.slice(1))
      }
    }
}

const sumSquares = (n) =>{
  if (n <= 1){
    return n
  } else{
    return (n ** 2) + sumSquares(n - 1)
  }
}

const lucas = (n) =>{
  if (n == 0){
    return 2
  } else{
    if(n === 1){
      return n
    } else{
      return lucas(n - 1) + lucas(n - 2)
    }
  }
}

const isAscending = (a) =>{
  if (a.length === 1){
    return true
  } else{
    if(a[0] > a[1]){
      return false
    } else{
      return isAscending(a.slice(1))
    }
  }
}

const isDescending = (a) =>{
  if (a.length === 1){
    return true
  } else{
    if(a[a.length - 1] < a[a.length]){
      return false
    } else{
      return isDescending(a.slice(1))
    }
  }
}

const sumNested = (a) =>{
  if(a[0].isNumber){
    return a[0]
  } else{
    return sumNested(a) + sumNested(a.slice(1))
  }  
}