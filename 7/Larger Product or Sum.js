function sumOrProduct(array, n) {
  let srt = array.sort((a,b) => a-b);
  let min = srt.slice(0,n);
  let max = srt.slice(-n);
  return max.reduce((e,i) => e+i) > min.reduce((e,i) => e*i) ? 'sum' : max.reduce((e,i) => e+i) == min.reduce((e,i) => e*i) ? 'same' : 'product'
}
