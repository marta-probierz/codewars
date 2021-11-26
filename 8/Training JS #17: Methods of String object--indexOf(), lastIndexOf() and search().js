function firstToLast(str,c){
  return str.includes(c) ? str.lastIndexOf(c) - str.indexOf(c) : -1;
}

// one line
const firstToLast = (str,c) => str.includes(c) ? str.lastIndexOf(c) - str.indexOf(c) : -1;
