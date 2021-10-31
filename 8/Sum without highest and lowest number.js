function sumArray(array) {
    if (array == null)
    {
        return 0;
    }
    else if (array.length < 2)
    {
        return 0;
    }
    else
    {
        array = array.sort(function(a,b) {return a - b;});
        var total = 0;
        for (var i = 1; i < array.length - 1; i++) {
            total += array[i];
        }
        return total;
    }
}



// shorter
function sumArray(array) {
  return array ? array.sort((a,b) => a - b).slice(1,-1).reduce((sum, e) => sum + e, 0) : 0;
}


