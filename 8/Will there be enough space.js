function enough(cap, on, wait) {
    if (cap >= on + wait) {
    return 0;
  } else {
    let free = cap - on;
    return wait - free;
  }
}
