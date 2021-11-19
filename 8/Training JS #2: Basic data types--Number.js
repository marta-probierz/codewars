var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
function equal1(){
  var a=v1   
  var b=v1   
  return a+b;
}
//Please refer to the example above to complete the following functions
function equal2(){
  var a= v4  //set number value to a
  var b= v2  //set number value to b
  return a-b;
}
function equal3(){
  var a= v1  //set number value to a
  var b= v5  //set number value to b
  return a*b;
}
function equal4(){
  var a= v4  //set number value to a
  var b= v5  //set number value to b
  return a/b;
}
function equal5(){
  var a= v6  //set number value to a
  var b=  v3 //set number value to b
  return a%b;
}

// shorter
var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250

const equal1 = () => v1 + v1;
const equal2 = () => v3 - v1;
const equal3 = () => v1 * v5;
const equal4 = () => v4 / v5;
const equal5 = () => v2 % v4;
