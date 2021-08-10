function odds(values){
  let arr = [];
  values.forEach(e => {
    if (e % 2 !== 0) {
      arr.push(e);
    }
  });
  return arr;
}
