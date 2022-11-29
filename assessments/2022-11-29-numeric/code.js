const totalEggs = (h, s) => h + s;

const chocolatesPerPerson = (c, p) => (c - (c % p)) / p;

const extraChocolates = (c, p) => c % p;

const leftOut = (c, p) => {
  if (c > p){
    return 0
  } else {
    return p - c
  }
}