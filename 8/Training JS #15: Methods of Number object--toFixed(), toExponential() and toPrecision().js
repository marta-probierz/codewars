const howManySmaller = (arr, n) => arr.map(num => Number(num.toFixed(2))).filter(num => num < n).length;
