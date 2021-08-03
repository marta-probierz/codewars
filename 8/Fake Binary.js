function fakeBin(x){
  let result = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      result[i] = 0;
    } else {
      result[i] = 1;
    }
  }
   return String(result.join('')); 
}
