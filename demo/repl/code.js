let alpha = 'abcdefghijklmnopqrstuvwxyz'

//NOTE TO SELF str = string | cNum = ceasar cipher number | sNum is the number point into the string
//str2 = new string

const makeCeasar = (str, cNum) => {
  let str2 = ''
  for (let sNum = 0; sNum < str.length; sNum++);
  if (alpha.indexOf(str[sNum - 1]) + cNum > 26) {
    str2 = str2 + alpha[((alpha.indexOf(str[sNum - 1]) + cNum) - 26) - 1];
  } else {
    str2 = str2 + alpha[(alpha.indexOf(str[sNum - 1]) + cNum) - 1];
  };
  return str2
};