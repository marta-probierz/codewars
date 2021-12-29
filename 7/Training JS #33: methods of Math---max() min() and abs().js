function maxMin(arr1,arr2){
  const arr=arr2.map((v,i)=>v-arr1[i],0);
  return [Math.max(...arr.map(v=>Math.abs(v))),Math.min(...arr.map(v=>Math.abs(v)))];
}

// or
function maxMin(arr1,arr2){
  var rs=arr1.map((x,i)=>Math.abs(x-arr2[i]));
  return [Math.max(...rs),Math.min(...rs)];
}
