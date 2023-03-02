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

// I worked with my table partner on this one, we got it to work but neither of us could figure out why.
const flatMap = (fn, ary) => {
  console.log('taking new array...')
  let ary2 = []
  for (let i = 1; i < ary.length + 1; i++){
    console.log('i = ' + i)
    for (let n = 0; n < fn(i).length; n++){
      console.log('n = ' + n)
      ary2.push(fn(i)[n])
      console.log('ary2 = ' + ary2)
    }
  }
  console.log('finished!')
  return ary2
};

const reduce = (fn, initVal, ary) => {
  fn(initVal, ary)
};

const every = (predicate, array) => {
};

const some = (predicate, array) => {
};
