const evens = (numbers) => {
  let answer = []
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0){
      answer.push(numbers[i])
    };
  };
  return answer
};

const shouty = (strings) => {
  let answer = []
  for (let i = 0; i < strings.length; i++){
    answer.push(strings[i].toUpperCase())
  }
  return answer
}

const join = (strings, delimiter) => {
  return strings.reduce((joined, s) => {
    if (joined === null) {
      return s;
    } else {
      return joined + delimiter + s;
    }
  }, null);
};

//I skipped ahead

const strange = (people) => {
  return people.filter((n) => n.isStrange)
};

const birthdays = (students) => {
  return students.map((n) => n.birthday)
};