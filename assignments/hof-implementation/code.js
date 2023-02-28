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
    if (fn(ary[i])){
      ary2.push(ary[i])
    }
  }
  return ary2
};

const flatMap = (fn, array) => {
};

const reduce = (fn, initialValue, array) => {
};

const every = (predicate, array) => {
};

const some = (predicate, array) => {
};
