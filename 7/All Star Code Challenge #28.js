function convertCF(num, scale){
  if (scale==='f') return num*9/5+32
  if (scale==='c') return (num-32)*5/9
  if (scale===undefined) return (num-32)*5/9
  throw new Error()
}
