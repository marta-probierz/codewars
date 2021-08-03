function solve(s){
  const vowels = /[^aeiou]/;
  let word = s.split(vowels);
  return Math.max(...word.map((x) => x.length));
}
