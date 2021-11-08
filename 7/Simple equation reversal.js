function solve(eq){
  return eq.split('').reverse().join('').replace(/(\d+)/gi,$1=>{
  return $1.split('').reverse().join('')});
}

// or
function solve(eq){
    return eq.split(/\b/g).reverse().join("");
}
