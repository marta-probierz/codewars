var regex=/(\d)(?=(\d{3})+$)/g;
function addCommas(money,reg){
  return money.replace(reg,x=>x+",")
}

// or
var regex=/(\d)(?=(\d{3})+$)/g
const addCommas = (money,reg) => money.replace(reg,x=>x+",");
