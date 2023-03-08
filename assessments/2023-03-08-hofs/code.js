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
  let answer = initVal
  for (let i = 0; i < strings.length; i++){
    answer = fn(answer, strings[i])
  }
  return answer
};

//I skipped ahead to the rewrite in HOF questions

const strange = (people) => {
  return people.filter((n) => n.isStrange);
};

const birthdays = (students) => {
  return students.map((n) => n.birthday);
};

const heaviest = (animals) => {
  return animals.reduce((tot, n) => Math.max(tot , n.weight), null);
};

const allStudents = (grades) => {
  return grades.flatMap((n) => n.students);
};

const allCromulent = (things) => {
  return things.every((n) => n.isCromulent);
};

const notAllTerrible = (things) => {
  return things.some((n) => n.isTerrible);
};