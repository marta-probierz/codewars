function comp(array1, array2){
  if (array1 === null || array2 === null) {
    return false;
  } else {
  let first = array1.map(e => Math.pow(e,2));
  let theSame = first.filter(value => array2.includes(value));
  let arr1 = first.sort((a,b) => a-b);
  let arr2 = array2.sort((a,b) => a-b);
  return JSON.stringify(arr1) == JSON.stringify(arr2);
  }
}
