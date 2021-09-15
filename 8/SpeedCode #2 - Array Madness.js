function arrayMadness(a, b) {
return Math.floor(a.map(e => Math.pow(e,2)).reduce((tot, i) => tot + i)) > Math.floor(b.map(e => Math.pow(e,3)).reduce((tot, i) => tot + i));
}

// longer
function arrayMadness(a, b) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i =0, {length} = a; i < length; ++i)
    {
        sum1 += a[i]**2;
    }
    for (let i =0, {length} = b; i < length; ++i)
    {
        sum2 += b[i]**3;
    }
    return sum1 > sum2;
}
