function alternateCase(s) {
let str = '';
  for(let i = 0; i < s.length; i++){
    if (s[i] == s[i].toLowerCase()){ 
      str += s[i].toUpperCase();
    } else {
      str += s[i].toLowerCase();
    }
  }
  return str; 
}

// shorter
function alternateCase(s) {
  return s.split("").map(e => e === e.toUpperCase()? e.toLowerCase() : e.toUpperCase()).join('');
}
