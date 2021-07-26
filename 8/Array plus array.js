function arrayPlusArray(arr1, arr2) {
  let x = arr1.reduce((a,b) => {
    return a+b;
  });
  let y = arr2.reduce((c, d) => {
    return c+d;
  });
  return x+y; 
}
