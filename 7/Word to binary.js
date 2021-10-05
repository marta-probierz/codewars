function wordToBin(text){
  let output = [];
  for (var i = 0;i < text.length; i++) {
    let bin = text[i].charCodeAt().toString(2);
    output.push(Array(8-bin.length+1).join("0") + bin);
  } 
  return output;
}
