function dutyFree(normPrice, discount, hol){
  let sumDiscount = normPrice * discount / 100;
  return Math.floor(hol / sumDiscount);
}
