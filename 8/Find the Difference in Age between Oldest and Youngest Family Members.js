function differenceInAges(ages){
  return [Math.floor(Math.min(...ages)), Math.max(...ages), Math.max(...ages) - Math.floor(Math.min(...ages))];
}
