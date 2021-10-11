function squareDigits(num){
  return Number(String(num).split('').map(e => e*e).join(''));
}
