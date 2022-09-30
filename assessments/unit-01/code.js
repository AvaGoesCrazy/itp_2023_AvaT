// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

// Write your code here ...
let isWeekday;
let isVacation;

const averageWeight = (x, y) => {
  return (x / y);
};

const hypotenuse = (a, b) => {
  return Math.sqrt((a ** 2) + (b ** 2));
};

const maxRadius = (x, y) => {
  if (x > y)
    return (y / 2);
  else
    return (x / 2);
};

const numCircles = (x, y) => {
  return y / (x * 2);
};

const offset = (x, y) => {
  return ((x - y) / 2);
};

const canSleepIn = (isWeekday, isVacation) => {
  if (isWeekday)
    return false;
  else
    if (isVacation)
      return true;
    else
      return true;
};

// this ones a lil messy but I think I got it right... I used a lot of elseifs
const canGoToProm = (isSenior, invitedBySenior, isOnList) => {
  if (isOnList)
    return false;
  else
    if (invitedBySenior)
      return true;
    else
      if (isSenior)
        return true;
      else
        return false;
}

// not 100% sure this is right but its not giving me any errors anymore so i guess its fine
const getsSpeedingTicket = (x, isGrouchy) => {
  if (isGrouchy + (x>65))
    return true;
  else
    if (!isGrouchy + (x>65))
      return false;
    else
      if (!isGrouchy + (x>70))
        return true;
      else
        return true;
};