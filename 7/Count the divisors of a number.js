function getDivisorsCnt(n){
    var divisors = 0;
    let m = n;
    while (m > 0){
      if(n % m === 0){
        divisors++;
      }
      m--;
    }
    return divisors;
}
