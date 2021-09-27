function twoHighest(arr) {
    let arrS = arr.sort((a,b) => a-b);
    let rem = [...new Set(arrS)];
    return rem[0] === undefined ? [] : rem[rem.length-2] === undefined ? [rem[rem.length-1]] : [rem[rem.length-1], rem[rem.length-2]];
}
