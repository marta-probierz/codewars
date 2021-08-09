function evenOrOdd(str) {
  let even = str.split('').filter(x => x % 2 == 0).reduce((a, b) => a + parseInt(b), 0);
  let odd = str.split('').filter(x => x % 2 != 0).reduce((a, b) => a + parseInt(b), 0);
  if (odd > even) {
    return 'Odd is greater than Even';
  } else if (odd < even) {
    return 'Even is greater than Odd';
  } else if (odd === even) {
    return 'Even and Odd are the same'
  }
}
