function pickIt(arr){
  var odd=[],even=[];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
      even.push(arr[i])
    } else {
      odd.push(arr[i])
    }
  }
  return [odd, even];
}


// or
function pickIt(arr){
  var odd=[],even=[];
  for(var x of arr) {
    (x % 2 === 0 ? even : odd).push(x)
  }
  return [odd,even];
}
