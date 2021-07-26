function sumTwoSmallestNumbers(numbers) {  

  let min = numbers[0];
  let min2 = numbers[1];

  for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min2 = min;
        min = numbers[i];
      } else if (numbers[i] < min2) {
        min2 = numbers[i];
      }
  }
  return min + min2;
}
