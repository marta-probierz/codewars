function solution(nums){
  if (nums == [] || nums == null || nums == undefined) {
    return [];
  } else {
    return nums.sort((a, b) => a - b);
  }
}
