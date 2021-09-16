function addArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return error;
  } else {
    let res = [];
    array1.forEach((e, i) => {
      array2.forEach((el, ind) => {
        if (i === ind) {
          res.push(e+el);
        }
      });
    });
    return res;
  }
}


// shorter
function addArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return error;
  } else {
    return array1.map((a,i) => array1[i] + array2[i]);
  }
}


// shorter
function addArrays(array1, array2) {
  return array1.length !== array2.length ? error : array1.map((a,i) => array1[i] + array2[i]);
}
