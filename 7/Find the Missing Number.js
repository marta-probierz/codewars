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
