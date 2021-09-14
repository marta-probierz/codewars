function orderFood(list) {
  let arr = list.map(({ meal }) => meal);
  let count = {};
  arr.forEach(function(i) { count[i] = (count[i]||0) + 1;});
  return count;
}
