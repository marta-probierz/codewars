function bigToSmall(arr){
 return [].concat(...arr).sort((a,b)=>b-a).join('>');
}

// or
const bigToSmall = (arr) => [].concat(...arr).sort((a,b)=>b-a).join('>');
