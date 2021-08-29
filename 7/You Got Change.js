function giveChange(amount) {
  let result = [0,0,0,0,0,0];
    while (amount >= 100) {
    result[5]++;
    amount-=100;
  } while (amount >= 50) {
    result[4]++;
    amount-=50;
  } while (amount >= 20) {
    result[3]++;
    amount-=20;
  } while (amount >= 10) {
    result[2]++;
    amount-=10;
  } while (amount >= 5) {
    result[1]++;
    amount-=5;
  } while (amount >= 1) {
    result[0]++;
    amount-=1;
  }
  return result;
}
