function toFreud(string) {
  return !string ? '' : string.split(' ').map((e) => 'sex').join(' ');
}

// one line
const toFreud = string => !string ? '' : string.split(' ').map((e) => 'sex').join(' ');

// or
const toFreud = s => s.replace(/\w+/g, 'sex');
