function strCount(str, letter){  
  let res = 0;
  str.split('').forEach(e => {
    if (e === letter) {
      res++;
    }
  })
  return res;
}
