function cutCube(volume,n){
  return !(Math.cbrt(n) % 1) && !(Math.cbrt(volume / n) % 1);
}

// or
const isIntegerCube = n => Number.isInteger(Math.cbrt(n));
const cutCube = (volume, n) => isIntegerCube(n) && isIntegerCube(volume / n);
