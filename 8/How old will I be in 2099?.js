function  calculateAge(x, y) {
  if (x === y) {
    return 'You were born this very year!';
  } else if (x === y - 1) {
    return 'You are 1 year old.';
  } else if (x < y) {
    return `You are ${y-x} years old.`;
  } else if (x === y + 1) {
    return 'You will be born in 1 year.';
  } else if (x > y) {
    return `You will be born in ${x-y} years.`;
  } 
}
