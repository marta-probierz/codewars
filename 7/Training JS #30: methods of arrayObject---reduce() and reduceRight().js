function tailAndHead(arr){
   let m=[];
   for(let i=0;i<arr.length-1;i++)
     m.push(arr[i]%10+Number((arr[i+1]+'')[0]))
   return m.reduce((a,b)=>a*b)
 }
