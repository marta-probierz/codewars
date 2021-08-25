function battle(x, y) {
  const capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lower = 'abcdefghijklmnopqrstuvwxyz'
  let a = [...x].map(el => capital.indexOf(el) + 1).reduce((a,c) => a + c)
  let b = [...y].map(el => capital.indexOf(el) + 1).reduce((a,c) => a + c)
  let c = [...x].map(el => (lower.indexOf(el) + 1) / 2).reduce((a,c) => a + c)
  let d = [...y].map(el => (lower.indexOf(el) + 1) / 2).reduce((a,c) => a + c)
  return a + c === b + d ? 'Tie!' : a + c > b + d ? x : y
}
