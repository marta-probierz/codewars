function evenLast(numbers) {
  let last = numbers[numbers.length - 1];
  let sum = 0;
  
    if (numbers == 0) {
    return 0;
  }
  
  numbers.filter((a, b) => {
    if (b % 2 == 0) {
      sum += a;
    }
  });
  return sum*last;
}
