let alpha = 'abcdefghijklmnopqrstuvwxyz'

//NOTE TO SELF str = string | cNum = caesar cipher number | sNum is the number point into 
//the string | str2 = new string

const makeCaesar = (str, key) => {
  let str2 = ''
  for (let sNum = 0; sNum < str.length; sNum++)
    if (alpha.indexOf(str[sNum - 1]) + key > 26) {
      str2 = str2 + alpha[((alpha.indexOf(str[sNum - 1]) + key) - 26) - 1]
    } else {
      str2 = str2 + alpha[(alpha.indexOf(str[sNum - 1]) + key) -1]
    }
  return str2
}

//I DID IT YEEEEAHHHH

//Intrstructions: this function takes two arguments, a string and the key you want to use
//for your caesar cipher and then returns the first sring as a caesar cipher!

//now that I understand recursive functions i can do this much better :)

const caesar2 = (s, k) =>{
  if(s.length === 1){
    return alpha[alpha.indexOf[s] + k]
  } else{
    return + caesar2(s.substring(1), k)
  }
}

// damn, overflow got hands