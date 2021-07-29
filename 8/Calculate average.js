function find_average(array) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let sum = array.reduce(reducer);
  return sum / array.length;
}
