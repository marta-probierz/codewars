String.prototype.digit = function() {
  return /^\d$/g.test(this)
};

// or
String.prototype.digit = function() {
  return /^[0-9]$/.test(this);
};
