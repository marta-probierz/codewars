function findShort(s){
  let res = [];
  s.split(' ').forEach(e => {
    res.push(e.length);
  });
  let tot = res.sort((a,b) => a-b);
  return tot[0];
}

// shorter
function findShort(s){
  return Math.min(...s.split(' ').map (s => s.length));
}
