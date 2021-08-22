var splitInParts = function(s, partLength){
  let result = "";
  
  while(s.length >= partLength){
    result += s.slice(0, partLength) + " "
    s = s.slice(partLength);     
  }
  result += s;
  return result.trim();
}
