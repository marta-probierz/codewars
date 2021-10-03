function missingNo(n) {
  let res = []
  let sor = n.sort((a,b) => a-b);
  sor.forEach((e, i) => {
    if (e !== i) {
      res.push(i)
    }
  })
  return res[0] === undefined ? 100 : res[0];
}

// or
function missingNo(nums) {
  let arr = [];
  for (let i = 0; i <= 100; i ++) {
    if (nums.indexOf(i) < 0) {
      return i;
    }
  }
}
