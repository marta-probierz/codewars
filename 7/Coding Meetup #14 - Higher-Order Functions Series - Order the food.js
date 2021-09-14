function orderFood(list) {
  let arr = list.map(({ meal }) => meal);
  let count = {};
  arr.forEach(function(i) { count[i] = (count[i]||0) + 1;});
  return count;
}

// or
function orderFood(list) {
  let foodOrder = {}
  
  for (let i = 0; i <list.length; i++){
    if (foodOrder[list[i].meal]){
      foodOrder[list[i].meal]++ 
    } else {
      foodOrder[list[i].meal] = 1
      }
  }
  return foodOrder
}
