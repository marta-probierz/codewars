function tailAndHead(arr){
   let m=[];
   for(let i=0;i<arr.length-1;i++)
     m.push(arr[i]%10+Number((arr[i+1]+'')[0]))
   return m.reduce((a,b)=>a*b)
 }

// or
function tailAndHead(arr){
  return arr.reduce((a,b,i)=>a*(+((arr[i]+"")[0])+(arr[i-1]%10)))/arr[0];
}
