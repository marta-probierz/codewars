function oddOrEven(array) {
    let sum = array.reduce(function(a, b){
        return a + b;
    }, 0);
  if (sum % 2 == 0) {
    return 'even';
  } else {
    return 'odd';
  }
}
