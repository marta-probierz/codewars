function smallestProduct(arr) {
  let dev = [];
  arr.forEach(e => {
    dev.push(e.reduce((tot, i) => tot * i));
  })
  let sor = dev.sort((a, b) => a - b);
  return sor[0];
 }
