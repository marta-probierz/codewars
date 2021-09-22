function maskify(cc) {
  return cc.replace(/.(?=.{4})/g, "#");
}

// longer
function maskify(cc) {
  cc = cc.split("");
  for(let i = 0; i < cc.length - 4; i++){
    cc[i] = "#";
  }
  return cc.join("");
}
