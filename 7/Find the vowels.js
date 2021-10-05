function vowelIndices(word){
  word = word.toLowerCase();
  let res = [];
  for(let i = 0; i < word.length; i++) {
    if(word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u' || word[i] === 'y') {
      res.push(i + 1);
    }
  }
  return res;
}

// shorter
function vowelIndices(word){
  let res = [];
  for(let i = 0; i < word.length; i++) {
    if(/[aeioyu]/gi.test(word[i])) {
      res.push(i + 1);
    }
  }
  return res;
}
