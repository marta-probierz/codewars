function solve(arr){  
  let alphabeth = "abcdefghijklmnopqrstuvwxyz";
  return arr.map(e => e.toLowerCase().split('').filter((y,i) => i === alphabeth.indexOf(y)).length);
}
