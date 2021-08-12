function feast(beast, dish) {
  let first = beast.split(' ');
  let second = dish.split(' ');
  let first_last = first[first.length - 1];
  let second_last = second[second.length - 1];
  return first[0][0] === second[0][0] && first_last[first_last.length-1] === second_last[second_last.length-1] ? true : false;
}
