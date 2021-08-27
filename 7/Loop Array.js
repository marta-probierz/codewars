function loopArr(arr, direction, steps) {
  return direction === 'left' ? arr.concat(arr.splice(0, steps)) : arr.splice(arr.length-steps, steps).concat(arr);
}
