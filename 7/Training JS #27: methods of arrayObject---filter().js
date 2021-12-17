function countGrade(scores){
  const obj={S:0,A:0,B:0,C:0,D:0,X:0}
  scores.map(v=>{
  if(v>=100){obj[`S`]++}
  if(v>=90&&v<100){obj[`A`]++}
  if(v>=80&&v<90){obj[`B`]++}
  if(v>=60&&v<80){obj[`C`]++}
  if(v>=0&&v<60){obj[`D`]++}
  if(v<0){obj[`X`]++}
  })
  return obj;
}

// or 
function countGrade(scores){
  return {
    'S': scores.filter(function(x){return x == 100}).length,
    'A': scores.filter(function(x){return (x < 100 && x >= 90)}).length,
    'B': scores.filter(function(x){return (x < 90 && x >= 80)}).length,
    'C': scores.filter(function(x){return (x < 80 && x >= 60)}).length,
    'D': scores.filter(function(x){return (x < 60 && x >= 0)}).length,
    'X': scores.filter(function(x){return x == -1}).length,
  };
}
