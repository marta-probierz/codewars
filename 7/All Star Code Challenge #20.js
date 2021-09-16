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
