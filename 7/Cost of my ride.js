function insurance(age, size, numofdays){
  let a = 0;
  let s = 0;
  if (numofdays < 0) {return 0}
  else {
  if (age < 25) {a=+10*numofdays;}
  if (size === "medium") {s=+10*numofdays;}
  if (size === "economy") {s=0}
  if (size === "full-size") {s=+15*numofdays;}
  if (size !== "economy" && size !== "medium" && size !== "full-size") {s=+15*numofdays;}
  }
  return a + s + numofdays * 50;
}
