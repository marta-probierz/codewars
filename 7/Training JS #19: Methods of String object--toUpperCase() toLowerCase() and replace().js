function alienLanguage(str){
 return str.split(' ').map(e => e.slice(0,-1).toUpperCase() + e.slice(-1).toLowerCase()).join(' ');
}

// one line
const alienLanguage = str => str.split(' ').map(e => e.slice(0,-1).toUpperCase() + e.slice(-1).toLowerCase()).join(' ');
