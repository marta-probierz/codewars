function correctTail(body, tail) {
  let last = body[body.length - 1];
  if (last === tail) {
    return true;
  } else {
    return false;
  }
}
