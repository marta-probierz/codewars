function countSheeps(arrayOfSheep) {
    let sum = 0;
  arrayOfSheep.forEach(e => {
    if (e) {
      sum++;
    }
  });
  return sum;
}
