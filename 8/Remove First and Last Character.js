function removeChar(str){
  let arr = str.split('');
  let first = arr.shift();
  let last = arr.pop();
  let result = arr.join('');
  return result;
};
