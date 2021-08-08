function findDifference(a, b) {
  let as = a.reduce((x,y) => x*y);
  let bs = b.reduce((x,y) => x*y);
  return  as >  bs ? as - bs : bs - as;
}
