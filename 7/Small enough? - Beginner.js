function smallEnough(a, limit){
  let check = a.map(e => e <= limit);
  for (let i = 0; i < check.length; i++) {
    if (check[i] === false) return false;
  }
  return true;
}
