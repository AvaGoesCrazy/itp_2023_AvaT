const totalEggs = (hrd, sft) => hrd + sft;

const chocolatesPerPerson = (chco, prsn) => (chco - (chco % prsn)) / prsn;

const extraChocolates = (chco, prsn) => chco % prsn;

const leftOut = (chco, prsn) => {
  if (chco > prsn) {
    return 0;
  } else {
    return prsn - chco;
  };
};

const probabilityAllHeads = (flps) => .5 ** flps;

const futureHour = (chr, nhrs) => chr + (nhrs % 24);

const presentsBudget = (nfns, pprc) => nfns * pprc;

const perPresent = (mttl, nprs) => mttl / nprs;

const wrapingCombos = (wppr, rbns, dbws) => wppr * rbns * dbws;

const biggestNumber = (nd) => (10 ** nd) - 1;