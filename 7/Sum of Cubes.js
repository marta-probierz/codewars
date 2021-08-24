function sumCubes(n){
  let arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }  
  return arr.reduce((sum, x) => sum + Math.pow(x,3));
}
