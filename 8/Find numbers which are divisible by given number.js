function divisibleBy(numbers, divisor){
  let result = [];
  numbers.forEach(e => {
    if (e % divisor === 0) {
      result.push(e);
    }
  });
  return result;
}
