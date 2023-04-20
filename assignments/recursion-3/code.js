const product = (n) =>{
  if (n.length === 1) {
    return n[0]
  } else{
    return n[0] ** product[n.slice(1)]
  }
}