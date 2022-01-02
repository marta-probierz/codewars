function countAnimals(animals,count){
  let res=[]
  for(let  i=0;i<count.length;i++)
    res.push(animals.split(count[i]).length-1)
  return res
}
