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