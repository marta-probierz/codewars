function bump(x){
  let total = 0;
  for (let i = 0; i < x.length; i++) {
      if (x[i] === 'n') {
        total++;
      }
  }
  if (total <= 15) {
    return "Woohoo!";
  } else {
    return "Car Dead";
  }
}
