function generateIntegers(n) {
  let res = [];
  for (let i = 0; i <= n; i++) {
    res.push(i);
  }
  return res;
}

// one line
const generateIntegers = (n) => [...Array(n + 1).keys()];
