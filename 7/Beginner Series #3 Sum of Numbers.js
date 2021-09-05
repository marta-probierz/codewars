function getSum(a, b) {
  let max = Math.max(a, b);
  let current = Math.min(a, b);
  let sum = 0;
  while (current <= max) {
    sum += current++;
  }
  return a === b ? a : sum;
}
