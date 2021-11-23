const grabDoll = dolls => {
  const bag = []

  for (const element of dolls) {
    if (element === 'Hello Kitty' || element === 'Barbie doll') {
      bag.push(element)
    } else continue

    if (bag.length >= 3) break
  }

  return bag
}

// or
function grabDoll(dolls){
  var bag=[];
  for (d in dolls) {
     if (dolls[d]=="Hello Kitty"||dolls[d]=="Barbie doll") bag.push(dolls[d]);
     if (bag.length<3) continue;
     break;
  }
  return bag;
}
