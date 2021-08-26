function dbSort(a){
  let num = [];
  let word = [];
  let arr = [...a];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      word.push(arr[i]);
   } else if (typeof arr[i] === 'number') {
     num.push(arr[i]);
   }
  }
  let second = word.sort();
  let first = num.sort(function(a, b) {
  return a - b;
});
return first.concat(second);
}
