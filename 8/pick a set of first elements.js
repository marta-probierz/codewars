function first(arr, n) {
  if (n === undefined) {
    return [arr[0]];
  } else {
    return arr.slice(0, n);
  }
  }
