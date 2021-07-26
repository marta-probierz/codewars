function getAverage(marks){
  function sum(total, mark) {
    return total + mark;
  }
  let summ = marks.reduce(sum);
  let average = summ / marks.length;
  return Math.floor(average);
}
