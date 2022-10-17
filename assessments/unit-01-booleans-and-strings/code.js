/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

const fireAlarm = (alarmPulled, smokeDetected, plannedDrill) => {
  if (alarmPulled || smokeDetected || plannedDrill)
    return true
  else
    return false
}

const canBePresident = (age, isNatCitizen, yearsOfRes) => {
  if (age > 30 && isNatCitizen && yearsOfRes > 14)
    return true
  else
    return false
}

const willSeeTweet = (followsTweeter, followsRetweeter, isBlocked) => {
  if (followsTweeter || followsRetweeter && !isBlocked)
    return true
  else 
    return false
}

const evenGreaterThanZero = (num) => {
  if (num > 0)
    return true
  else
    return false
}