function cutIt(arr){
  let lng = arr.map(e => e.length);
  let srt = lng.sort((a,b) => a - b);
  let sl = srt[0];
  return arr.map(e => e.slice(0, sl));
}
