function addLength(str) {
  let res = [];
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    res.push(`${arr[i]} ${arr[i].length}`);
  }
  return res;
}

// shorter
function addLength(str) {
  return str.split(' ').map(e => `${e} ${e.length}`);
}
