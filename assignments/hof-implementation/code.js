// N.B. Do not use the array methods of the same name to implement these functions!

let testAry = ['a', 1, 'c', 2, 'e', 'f', 'g']

const filter = (pre, ary) => {
  let ary2 = []
  for (let i = 0; i < ary.length; i++){
    if (pre(ary[i])){
      ary2.push(ary[i])
    }
  }
  return ary2
};

const map = (fn, ary) => {
  let ary2 = []
  for (let i = 0; i < ary.length; i++){
    ary2.push(fn(ary[i]))
  }
  return ary2
};

const flatMap = (fn, ary) => {
  let ary2 = []
  for (let i = 0; i < ary.length; i++){
    let tempAry = []
    if(fn(ary[i]) !== []){
      tempAry.push(fn(ary[i]))
      console.log('temp:' + tempAry)
      for (let i = 0; i < tempAry.length; i++){
        ary2.push(tempAry[i])
        console.log('final: [' + ary2 + ']')
      }
    }
  }
  return ary2
};

const reduce = (fn, initVal, ary) => {
  fn
};

const every = (predicate, array) => {
};

const some = (predicate, array) => {
};
