function invert(array) {
   let result = [];
   array.forEach(e => {
       result.push(-e);
   });
   return result;
}
