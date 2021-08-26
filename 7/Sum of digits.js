function sum(digits) {
  if (digits == '0')  {
    return '0 = 0';
  } else if (digits == undefined || digits == '') {
    return '';
  }
  let arr = [...digits + ''];
  let total = arr.reduce((sum, i) => parseInt(sum) + parseInt(i));
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result+=arr[i] + ' + ';
  }
  let x = result.slice(0, -2);
  return x + '= ' + total;
  
}
