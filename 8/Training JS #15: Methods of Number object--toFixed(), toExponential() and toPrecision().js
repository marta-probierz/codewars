const howManySmaller = (arr, n) => arr.map(num => Number(num.toFixed(2))).filter(num => num < n).length;

// or
const howManySmaller = (arr, n) => arr.filter(number => Number(number.toFixed(2)) < n).length;
