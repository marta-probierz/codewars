function whoIsPaying(name){
  if (name.length > 2) {
    return [name].concat([`${name[0]}${name[1]}`]);
  } else {
    return [name];
  }
}

// one line
const whoIsPaying = name => (name.length > 2) ? [name].concat([`${name[0]}${name[1]}`]) : [name];
