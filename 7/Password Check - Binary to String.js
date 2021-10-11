function decodePass( passArr, bin ){
  let pass = bin.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
  return passArr.includes(pass) ? pass : false;
}
