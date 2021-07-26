var humanYearsCatYearsDogYears = function(humanYears) {
  let cat;
  let dog;
  if (humanYears === 1) {
    cat = 15;
    dog = 15;
  } else if (humanYears === 2) {
    cat = 9 + 15;
    dog = 9 + 15;
  } else if (humanYears >= 3) {
    let humanYearsNew = humanYears - 2;
    cat = humanYearsNew * 4 + 15 + 9;
    dog = humanYearsNew * 5 + 15 + 9;
  }
  return [humanYears,cat,dog];
}
