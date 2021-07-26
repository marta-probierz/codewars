function largestPairSum(numbers){
  let count = 0;
  numbers.sort(function(a,b) {
    return b-a;
  });
  count = numbers[0] + numbers[1];
  return count;
}
