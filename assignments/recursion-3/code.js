const product = (n) =>{
  if (n.length === 1) {
    return n[0]
  } else{
    return n[0] ** product(n.slice(1))
  }
}

console.log(81 ** 81 ** 85)