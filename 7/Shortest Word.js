function findShort(s){
  let res = [];
  s.split(' ').forEach(e => {
    res.push(e.length);
  });
  let tot = res.sort((a,b) => a-b);
  return tot[0];
}
