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

// or

function manCave(array){
  if(array.some(a => a.name == "Raj"))
  {
    var marray = array.slice().filter(a => a.gender == "male");
    marray.forEach(a => a.status = "Single");
    return marray;
  }
  return array;
}
