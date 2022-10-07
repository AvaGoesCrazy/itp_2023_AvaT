// Some constants you will need. No need to do anything to these
const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.
const itemsLeftOver = (numPeople, numItems) => numItems - numPeople;

const areaOfCircle = (radius) => Math.pi(radius) ** 2;

const volumeOfCube = (edge) => edge ** 3;

const populationGrowth = (popSize, growthRate) => popSize * (growthRate + 1);

const earnedRunAverage = (earnedRuns, innings) => earnedRuns * innings * 9;

const valueOfJewels = (numDiam, numEmer, diamInGold, emerInGold) => (numDiam * diamInGold) + (numEmer * emerInGold);

const payWithOvertime = (hrsWorked, normalRate, overtimeRate) => (8 * normalRate) + ((hrsWorked - 8) * overtimeRate);

const firstClassPostage = (weight) => (((Math.ceil(weight)) - 1) * .24) + .60;

const weightOnJupiter = (weight) => (JUPITER_GRAVITY / EARTH_GRAVITY) * weight;

const gravity = (mass1, mass2, distance) => ((mass1 / (distance ** 2)) * G) + ((mass2 / (distance ** 2)) * G);