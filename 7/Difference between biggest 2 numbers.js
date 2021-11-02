function diffBig2(arr) {
  let max = Math.max.apply(null, arr);
  let i = arr.indexOf(max);
  arr.splice(i,1);
  let max2 = Math.max.apply(null, arr);
  let i2 = arr.indexOf(max2);
  return max-max2;
}
