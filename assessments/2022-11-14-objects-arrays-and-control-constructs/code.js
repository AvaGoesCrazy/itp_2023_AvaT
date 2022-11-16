// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rect) => {
  return rect.width * rect.height
};

const higherPaid = (e1, e2) => {
  if ((e1.salary - e2.salary) < (e2.salary - e1.salary)) {
    return e1
  } else
    return e2
};

const isSamePoint = (p1, p2) => {
  if ((p1.x === p2.x) && (p1.y === p2.y)) {
    return true
  }
};

const totalWithTip = (bill, tipPercentage) => {
  let total.subtotal = bill.subtotal
};

const isWinner = (player) => {
  if (player.score > 100) {
    return true
  } else
    return false
};

const updateWins = (players) => {
  if (isWinner(players) === true)
    return players.wins ++
};

const bigWinners = (players) => {
};

const fillTimesTable = (table) => {
};

const sums = (n) => {
};

const rule110 = (cells) => {
};
