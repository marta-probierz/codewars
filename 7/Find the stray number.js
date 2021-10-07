function stray(numbers) {
  return numbers.reduce((a,b) => a^b);
}

// or
function stray(numbers) {
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);
  return numbers.filter(x => x == max).length == 1 ? max : min;
}
