var countSheep = function (num){
  let res = [];
  for (let i = 1; i <= num; i++) {
    res.push(i);
  }
  return res.map(e => e + ' sheep...').join('');
}

// second version
var countSheep = function (num){
  let res = '';
  for (let i = 1; i <= num; i++) {
    res += `${i} sheep...`;
  }
  return res;
}
