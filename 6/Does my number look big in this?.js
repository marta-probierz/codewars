function narcissistic(value) {
  let arr = String(value).split('');
  return arr.map(e => Math.pow(e, arr.length)).reduce((a,b) => a+b) === value;
}
