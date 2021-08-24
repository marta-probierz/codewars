function sumDigits(number) {
  return ( [...number.toString()]
    .filter( (char) => !isNaN(parseInt( char ) ) )
    .reduce( function(a,b) { return a + parseInt(b) }, 0) );
}
