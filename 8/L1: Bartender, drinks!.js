function getDrinkByProfession(param){
  let res = param.toLowerCase();
    if (res === 'jabroni') return "Patron Tequila";
    else if (res === 'school counselor') return "Anything with Alcohol";
    else if (res === 'programmer') return "Hipster Craft Beer";
    else if (res === 'bike gang member') return "Moonshine";
    else if (res === 'politician') return "Your tax dollars";
    else if (res === 'rapper') return "Cristal";
    else return "Beer";
}

// obj
function getDrinkByProfession(param){
let res = param.toLowerCase();
const drinks = {
  "jabroni": "Patron Tequila",
  "school counselor": "Anything with Alcohol",
  "programmer": "Hipster Craft Beer",
  "bike gang member": "Moonshine",
  "politician": "Your tax dollars",
  "rapper": "Cristal"
}
return drinks[res] || 'Beer'
}
