function incrementer(nums) { 
  return nums.map((a,b) => a+ b+1).map(e => {
    if (e < 10) {
      return e;
    } else {
      return e % 10;
    }
  });
}
