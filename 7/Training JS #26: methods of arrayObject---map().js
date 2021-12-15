function isolateIt(arr){
  return arr.map(v=>{
  if (v.length%2==0){return v.slice(0,v.length/2)+'|'+v.slice(v.length/2)};
  if (v.length%2!==0){return v.slice(0,v.length/2)+'|'+v.slice((v.length/2)+1)};
  })
}

// or
function isolateIt(arr){
  return arr.map(s=>s.slice(0,s.length/2)+"|"+s.slice(-s.length/2));
}
