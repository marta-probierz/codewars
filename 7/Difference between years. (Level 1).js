var howManyYears = function(date1, date2){
  let res = Number(date1.slice(0,4)) - Number(date2.slice(0,4));
  return res < 0 ? -res : res;
}
