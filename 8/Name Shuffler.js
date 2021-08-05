// first version
function nameSuffle(str){
  return str.split(' ').reverse().join(' ')
}


// second version
function nameShuffler(str){
  let arr = str.split(' ');
  let first = arr[0];
  let last = arr[1];
  return last + ' ' + first;
}
