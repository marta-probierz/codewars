function none(arr, fun){
  return arr.some(fun) ? false : true;
}

// shorter 
const none = (arr, fun) => arr.some(fun) ? false : true;
