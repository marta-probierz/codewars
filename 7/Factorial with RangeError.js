function factorial(n) {
  let res = [];
  if (n < 0 || n > 12) throw new RangeError();
  if (n === 0) return 1;
  else {
    for (let i = 1; i <= n; i++) {
      res.push(i)
    }
  }
  return res.reduce((tot, e) => tot * e);
}
