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
    for (let j = 0; j < fn(ary[i]).length; j++){
      ary2.push(fn(ary[i])[j])
    }
  }
  return ary2
};

const reduce = (fn, initVal, ary) => {
  let lastNum = initVal
  for (let i = 0; i < ary.length; i++){
    lastNum = fn(lastNum, ary[i])
  }
  return lastNum
};

const every = (pred, ary) => {
  let trueCount = 0
  for (let i = 0; i < ary.length; i++){
    if (pred(ary[i])){
      trueCount ++
    } else{
      return false
    }
  }
  return trueCount === ary.length
};

const some = (pred, ary) => {
  let trueCount = 0
  for (let i = 0; i < ary.length; i++){
    if (pred(ary[i])){
      trueCount ++
    }
  }
  return trueCount !== 0
};


//-------  Actual functions start here: ---------

const evens = (ary) =>{
  return ary.filter((n) => n % 2 === 0)
};

const odds = (ary) =>{
  return filter((n) => n % 2 !== 0, ary)
};

const big = (ary) =>{
  return filter((n) => n > 100, ary)
};

const names = (ary) =>{
  return map((n) => n["name"], ary)
};

const grades = (ary) =>{
  return map((n) => n["grade"], ary)
};

const pairs = (ary) =>{
  return flatMap((n) => [[n, n]], ary)
};

const averageGrade = (ary) =>{
  return ary.reduce((tot, n) => tot + n.grade, 0) / ary.length;
};

const flatpairs = (ary) =>{
  return flatMap((n) => [n, n], ary)
};

const allEven = (ary) =>{
  return every((n) => n % 2 === 0, ary)
};

const someEven = (ary) =>{
  return some((n) => n % 2 === 0, ary)
};

const lengthOfNames = (ary) =>{
  return map((n) => n.length, filter((n) => n[0].toUpperCase() === n[0], ary))
};