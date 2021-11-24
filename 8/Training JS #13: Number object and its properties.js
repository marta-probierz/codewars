const numberConstant = constant => {
  if (Number.isNaN(constant)) return 'Number.NaN'
  if (Number.isSafeInteger(constant)) return constant
  if (constant === Number.MAX_VALUE) return 'Number.MAX_VALUE'
  if (constant === Number.MIN_VALUE) return 'Number.MIN_VALUE'
  if (constant === Number.NEGATIVE_INFINITY) return 'Number.NEGATIVE_INFINITY'
  if (constant === Number.POSITIVE_INFINITY) return 'Number.POSITIVE_INFINITY'
}
const whatNumberIsIt = n => `Input number is ${numberConstant(n)}`

// or
function whatNumberIsIt(n){
  switch (true) {
    case (n==Number.MAX_VALUE): return "Input number is Number.MAX_VALUE";
    case (n==Number.POSITIVE_INFINITY): return "Input number is Number.POSITIVE_INFINITY";
    case (n==Number.MIN_VALUE): return "Input number is Number.MIN_VALUE";
    case (n==Number.NEGATIVE_INFINITY): return "Input number is Number.NEGATIVE_INFINITY";
    case (isNaN(n)): return "Input number is Number.NaN";
    default: return "Input number is " + n;
  }
}
