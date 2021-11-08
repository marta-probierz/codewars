function solve(eq){
  return eq.split('').reverse().join('').replace(/(\d+)/gi,$1=>{
  return $1.split('').reverse().join('')});
}
