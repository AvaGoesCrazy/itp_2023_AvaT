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
// Idk why i need to copypaste my HOF implements functions to get it wo work but here they are ^^^

const fruitBowl = [
  {
    name: 'apple',
    colors: ['red', 'green', 'yellow', 'brown'],
    grams: 150,
    grownIn: ['USA', 'China', 'Poland', 'Turkey'],
    tastiness: 8,
    inconvenience: 2,
  },
  {
    name: 'banana',
    colors: ['yellow'],
    grams: 120,
    grownIn: ['Ecuador', 'Costa Rica', 'Colombia', 'Philippines'],
    tastiness: 6,
    inconvenience: 1
  },
  {
    name: 'orange',
    colors: ['orange'],
    grams: 150,
    grownIn: ['Brazil', 'USA', 'Mexico', 'Spain'],
    tastiness: 7,
    inconvenience: 3
  },
  {
    name: 'mango',
    colors: ['yellow', 'orange', 'red'],
    grams: 200,
    grownIn: ['India', 'China', 'Thailand', 'Mexico'],
    tastiness: 9,
    inconvenience: 5
  },
  {
    name: 'pineapple',
    colors: ['brown', 'green', 'yellow'],
    grams: 1000,
    grownIn: ['Costa Rica', 'Philippines', 'Brazil', 'Thailand'],
    tastiness: 7,
    inconvenience: 8,
  },
  {
    name: 'watermelon',
    colors: ['green', 'red'],
    grams: 5000,
    grownIn: ['China', 'Turkey', 'Iran', 'Brazil'],
    tastiness: 6,
    inconvenience: 9
  },
  {
    name: 'peach',
    colors: ['orange', 'yellow'],
    grams: 150,
    grownIn: ['China', 'Spain', 'Italy', 'USA'],
    tastiness: 8,
    inconvenience: 4
  },
  {
    name: 'kiwi',
    colors: ['brown', 'green'],
    grams: 50,
    grownIn: ['New Zealand', 'Italy', 'Chile', 'Greece'],
    tastiness: 7,
    inconvenience: 6
  },
  {
    name: 'grapefruit',
    colors: ['pink', 'red', 'white'],
    grams: 300,
    grownIn: ['USA', 'Mexico', 'China', 'Turkey'],
    tastiness: 5,
    inconvenience: 7,
  },
  {
    name: 'grape',
    colors: ['purple', 'green'],
    grams: 5,
    grownIn: ['Italy', 'China', 'Spain', 'USA'],
    tastiness: 6,
    inconvenience: 2
  },
  {
    name: 'blueberry',
    colors: ['blue'],
    grams: 1,
    grownIn: ['USA', 'Canada', 'Chile', 'Peru'],
    tastiness: 8,
    inconvenience: 3
  },
  {
    name: 'strawberry',
    colors: ['red'],
    grams: 20,
    grownIn: ['USA', 'Spain', 'Mexico', 'Egypt'],
    tastiness: 9,
    inconvenience: 4
  },
  {
    name: 'lemon',
    colors: ['yellow'],
    grams: 60,
    grownIn: ['Spain', 'USA', 'Turkey', 'India'],
    tastiness: 5,
    inconvenience: 6
  }
];

const isTasty = (fruit) => fruit.tastiness >= 5;

const isInconvenient = (fruit) => fruit.inconvenience >= 5;

const redFruits = (fruits) => {
  return filter((n) => n.colors.includes('red'), fruits)
}

const weights = (fruits) => {
  return map((n) => n.grams, fruits)
}

const heaviest = (fruits) => {
  return reduce((n) => Math.max(n.grams), fruits)
}

const allColors = (fruits) => {
  return flatMap((n) => n.colors, fruits)
}

const areAllTasty = (fruits) => {
  return every((n) => isTasty(n), fruits)
}

const notAllInconvenient = (fruits) => {
  return some((n) => isInconvenient(n), fruits)
}

const tasty = (ary) => {
  let ary2 = []
  for (let i = 0; i < ary.length; i++){
    if (isTasty(ary[i])){
      ary2.push(ary[i])
    }
  }
  return ary2
};

const names = (ary) => {
  let ary2 = []
  for (let i = 0; i < ary.length; i++){
    ary2.push((ary[i]).name)
  }
  return ary2
};

const averageInconvenience = (ary) => {
  let lastNum = 0
  for (let i = 0; i < ary.length; i++){
    lastNum = lastNum + (ary[i].inconvenience)
  }
  return lastNum / ary.length
};