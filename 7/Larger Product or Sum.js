function sumOrProduct(array, n) {
  let srt = array.sort((a,b) => a-b);
  let min = srt.slice(0,n);
  let max = srt.slice(-n);
  return max.reduce((e,i) => e+i) > min.reduce((e,i) => e*i) ? 'sum' : max.reduce((e,i) => e+i) == min.reduce((e,i) => e*i) ? 'same' : 'product';
}

// or
function sumOrProduct(array, n) {
  let srt = array.sort((a,b) => a-b);
  let min = srt.slice(0,n).reduce((e,i) => e*i);
  let max = srt.slice(-n).reduce((e,i) => e+i);
  return max > min ? 'sum' : max == min ? 'same' : 'product';
}
