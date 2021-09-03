function removeEveryOther(arr){
  let res = [];
  for (let i = 0; i < arr.length; i+=2) {
    res.push(arr[i]);
  }
  return res;
}


// short
const removeEveryOther = arr => arr.filter((item, i) => i % 2 == 0);
