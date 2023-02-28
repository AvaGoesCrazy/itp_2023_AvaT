// N.B. Do not use the array methods of the same name to implement these functions!

const filter = (pre, ary) => {
  let ary2 = []
  for (let i = 0; i > ary.length; i++){
    if (pre(ary[i - 1])){
      ary2.push(ary[i - 1])
    }
  }
  return ary2
};

const map = (fn, array) => {
};

const flatMap = (fn, array) => {
};

const reduce = (fn, initialValue, array) => {
};

const every = (predicate, array) => {
};

const some = (predicate, array) => {
};
