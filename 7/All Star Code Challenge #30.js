function Member(name,gender,status){
  this.name = name;
  this.gender=gender;
  this.status=status;
}
var manCave = function(array){
  
  if (array.some(v=>v.name==='Raj')){
    array=array.map((v,i,arr)=>{
    return Object.assign(v,{status: 'Single' })}).filter(v=>v.gender!=='female')
  }
  return array
}
