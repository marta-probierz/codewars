function solution(value){
  if (value < 10) return `Value is 0000${value}`;
  if (value < 100) return `Value is 000${value}`;
  if (value < 1000) return `Value is 00${value}`;
  if (value < 10000) return `Value is 0${value}`;
  if (value < 100000) return `Value is ${value}`;
}
