const evens = (numbers) => { // correct
  let answer = []
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0){
      answer.push(numbers[i])
    };
  };
  return answer
};

const shouty = (strings) => { // correct
  let answer = []
  for (let i = 0; i < strings.length; i++){
    answer.push(strings[i].toUpperCase())
  }
  return answer
}

const join = (strings, delimiter) => { // pattern
  let answer = initVal
  for (let i = 0; i < strings.length; i++){
    answer = fn(answer, strings[i])
  }
  return answer
};

//I skipped ahead to the rewrite in HOF questions

const strange = (people) => { // correct
  return people.filter((n) => n.isStrange);
};

const birthdays = (students) => { // correct
  return students.map((n) => n.birthday);
};

const heaviest = (animals) => { // correct
  return animals.reduce((tot, n) => Math.max(tot , n.weight), null);
};

const allStudents = (grades) => { // correct
  return grades.flatMap((n) => n.students);
};

const allCromulent = (things) => { // almost
  return things.every((n) => n.isCromulent);
};

const notAllTerrible = (things) => { // almost
  return things.some((n) => n.isTerrible);
};