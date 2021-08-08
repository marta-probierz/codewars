function sortVowels(s){
  if (s === Number || s === undefined || s === null) {
    return '';
  } else {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u' || s[i] === 'A' || s[i] === 'E' || s[i] === 'I' || s[i] === 'O' || s[i] === 'U') {
      result.push('|'+s[i]);
    } else {
      result.push(s[i]+'|')
    }
  }
  return result.join('\n');
  }
}
