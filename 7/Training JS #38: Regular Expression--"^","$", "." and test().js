function findSimilarity(str,word){
  var regstr=word[0]                             
          +word.slice(1,-1).replace(/./g,".")  
          +word.slice(-1);                     
  var reg1=new RegExp("^"+regstr+"$");
  return str.split(' ').filter(v=>reg1.test(v)).join(' ')
  
}
